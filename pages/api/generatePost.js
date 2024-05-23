import { OpenAI, Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(config);

  const topic = "history of peru";
  const keywords = "incas, inca empire, machu picchu";


  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-1106",
    messages: [{
      role: "system",
      content: "You're a writer specialized on reading comprehension texts, and write based on a category passed to you in form of a single word (for example, history texts when user says: \"History\"). The texts are aimed to children from ages 8-10, should be interesting to read, shouldn't include false information (unless is a science fiction category)."
    },
    {
      role: "user",
      content: 'generate a text on the following topic:' + topic + '.And target the following comma separated keywords ' + keywords
    },

    ],
    temperature: 1,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    
  });


  console.log('antes')
  console.log(response.data.choices[0]?.message?.content);
  console.log('despues')

  res.status(200).json({ postContent: response.data.choices[0]?.message?.content })

}
