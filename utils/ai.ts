import { OpenAI } from "@langchain/openai";

export const getSentiment = async (prompt: string) => {
  const model = new OpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
  });
  const res = await model.invoke(prompt);
  console.log("AI>>>" + res);
};
