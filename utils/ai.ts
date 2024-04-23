import { OpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";
import { PromptTemplate } from "@langchain/core/prompts";
import { loadQARefineChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { Document } from "@langchain/core/documents";

/*
Reference::
https://js.langchain.com/docs/modules/model_io/output_parsers/types/structured#structured-output-parser-with-zod-schema
*/

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe(
        "the mood of the person who wrote the journal entry. Must represent one word mood or feeling."
      ),
    summary: z
      .string()
      .describe(
        "quick summary of the entire journal entry. Not more than 50 words. should always be shorter than input entry."
      ),
    negative: z
      .boolean()
      .describe(
        "is the journal entry negative? (i.e. does it contain negative emotions?)."
      ),
    subject: z
      .string()
      .describe(
        "the subject of the journal entry. It must accurately fit as the title for the entry."
      ),
    sentimentScore: z
      .number()
      .describe(
        "sentiment of the text and rated on a scale from -10 to 10, where -10 is extremely negative, 0 is neutral, and 10 is extremely positive."
      ),
    color: z
      .string()
      .describe(
        "a hexidecimal color code that represents the mood of that entry. Example #0101fe for blue representing happiness. Shades of blue, green, and yellow are for positive moods. Shades of red, orange, and pink are for negative moods."
      ),
  })
);

const getPrompt = async (content: string) => {
  const format_instructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template:
      "Analyze the following journal entry. The journal entry represents events or activities that happened during the day for a user. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}",
    inputVariables: ["entry"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    entry: content,
  });

  return input;
};

export const getSentiment = async (prompt: string) => {
  const input = await getPrompt(prompt);
  const model = new OpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
  });
  const res = await model.invoke(input);

  try {
    return parser.parse(res);
  } catch (e) {
    throw e;
  }
};

export const qa = async (question: string, entries: any) => {
  const docs = entries.map(
    (entry: any) =>
      new Document({
        pageContent: entry.content,
        metadata: { source: entry.id, date: entry.createdAt },
      })
  );
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const chain = loadQARefineChain(model);
  const embeddings = new OpenAIEmbeddings();
  const store = await MemoryVectorStore.fromDocuments(docs, embeddings);
  const relevantDocs = await store.similaritySearch(question);
  const res = await chain.call({
    input_documents: relevantDocs,
    question,
  });

  return res.output_text;
};

export type analysisSchema = z.infer<typeof parser.schema>;
