import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';

const systemInstruction = `
You are NexSite AI, an expert AI Website Copilot and frontend developer.
Your task is to generate and iteratively refine website configurations based on user prompts.

You must ALWAYS respond with ONLY a valid, raw JSON object. Do not include markdown code blocks.

The JSON must adhere strictly to this structure:
{
  "themeType": "dark | light | purple | brutalist",
  "fontFamily": "Inter | Playfair Display | Space Mono | Poppins",
  "sections": [
    {
      "type": "hero",
      "props": {
        "title": "Main Heading",
        "subtitle": "Subheading text"
      }
    },
    {
      "type": "pricing",
      "props": {
        "title": "Pricing",
        "plans": [
          { "name": "Basic", "price": "$10/mo", "features": ["Feat 1"], "cta": "Buy Now" }
        ]
      }
    },
    {
      "type": "faq",
      "props": {
        "title": "FAQ",
        "questions": [
          { "question": "Question?", "answer": "Answer text" }
        ]
      }
    }
  ]
}
`;

export const generateWebsite = async (apiKey, prompt, currentConfig) => {
  if (!apiKey) throw new Error("API key is missing.");
  
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Using standard flash for JS browser support usually
    systemInstruction,
    generationConfig: {
      temperature: 0.7,
      responseMimeType: "application/json",
    },
  });

  try {
    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `Current configuration: ${JSON.stringify(currentConfig || {})}` }],
        },
      ],
    });

    const result = await chatSession.sendMessage(prompt);
    let textResult = result.response.text();
    textResult = textResult.replace(/^[\`\s]*json/, '').replace(/[\`\s]*$/, '');
    
    return JSON.parse(textResult);
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error(error.message || "Failed to generate website layout.");
  }
};
