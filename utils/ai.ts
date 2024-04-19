// export const getSentiment = async (text: string) => {
//     const res = await fetch(
//         new Request("https://api-inference.huggingface.co/models/finiteautomata/bertweet-base-sentiment-analysis"),
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//             },
//             method: "POST",
//             body: JSON.stringify({ inputs: text }),
//         }
//     );
// }

import axios from "axios";
export const getSentiment = async (text: string) => {
  const options = {
    method: "POST",
    //url: "https://api.edenai.run/v2/text/sentiment_analysis",
    headers: {
      authorization: `Bearer ${process.env.AI_API_KEY}`,
    },
    data: {
      providers: "ibm,lettria",
      text:
        "i went to school and surprisingly got a test that was very interesting" +
        " and very difficult but i tried my best to understand it. And finally i score very below average",
      language: "en",
      fallback_providers: "",
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log("AI respose::::" + JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
};
