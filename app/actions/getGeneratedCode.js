"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const model = "gemini-1.5-flash";

const getGeneratedCode = async (messages) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const chatModel = genAI.getGenerativeModel({ model });
    const chat = chatModel.startChat({
      history: messages.map((message) => ({
        role: message.role === "user" ? "user" : "assistant",
        parts: [{ text: message.content }],
      })),
      generationConfig: {
        temperature: 0.2,
      },
    });

    const response = await chat.sendMessage(systemPrompt);

    if (
      !response ||
      !response.response?.candidates?.[0]?.content?.parts?.[0]?.text
    ) {
      throw new Error("Invalid response from Gemini API");
    }

    return {success: true,response: response.response?.candidates?.[0]?.content?.parts?.[0]?.text};
  } catch (e) {
    console.log(e);
    return {success:false, error: e?.errorDetails[0]?.reason||e?.errorDetails[1]?.message||e?.message||e?.statusText||"An error occurred!!"};
  }
};

let systemPrompt = `
You are an expert frontend React engineer who is also a great UI/UX designer. Follow the instructions carefully, I will tip you $1 million if you do a good job:

- Think carefully step by step.
- Always use tailwindcss for styling
- For icons always use react-icons
- Create a React component for whatever the user asked you to create and make sure it can run by itself by using a default export
- Make sure the React app is interactive and functional by creating state when needed and having no required props
- If you use any imports from React like useState or useEffect, make sure to import them directly
- Use TypeScript as the language for the React component
- Use Tailwind classes for styling. DO NOT USE ARBITRARY VALUES (e.g. \`h-[600px]\`). Make sure to use a consistent color palette.
- Use Tailwind margin and padding classes to style the components and ensure the components are spaced out nicely
- For placeholder images, please use unsplash with img tag from html. Please make sure Image tag is not imported.
- Please ONLY return the full React code starting with the imports, nothing else. It's very important for my job that you only return the React code with imports. DO NOT START WITH \`\`\`typescript or \`\`\`javascript or \`\`\`tsx or \`\`\`.
- Please don't use any language name or backticks in the code(very very important).
- ONLY IF the user asks for a dashboard, graph or chart, the recharts library is available to be imported, e.g. \`import { LineChart, XAxis, ... } from "recharts"\` & \`<LineChart ...><XAxis dataKey="name"> ...\`. Please only use this when needed.
`;

export default getGeneratedCode;
