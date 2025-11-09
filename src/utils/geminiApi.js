import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// System prompt untuk chatbot portfolio
const SYSTEM_PROMPT = `You are an AI assistant for a portfolio website. 
Your role is to help visitors learn more about the portfolio owner and answer their questions.

Portfolio Owner Info:
- Name: [Your Name]
- Role: Information Systems Student & Full-Stack Developer
- Skills: Laravel, React, Node.js, Flutter, Database Design
- Interests: Web Development, AI Engineering, Trail Running, Photography
- Currently: Final semester student, working on web projects

Guidelines:
- Be friendly, professional, and helpful
- Keep responses concise (2-3 sentences max)
- If asked about projects, encourage them to check the projects page
- If asked about contact, guide them to the contact section
- Don't make up information - if unsure, say you don't know`;

export async function sendMessageToGemini(message, conversationHistory = []) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Build conversation context
    const context = conversationHistory
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}\n\nConversation History:\n${context}\n\nUser: ${message}\n\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get response from AI");
  }
}

export async function generateContextualResponse(userMessage) {
  try {
    const response = await sendMessageToGemini(userMessage);
    return response;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return "Sorry, I'm having trouble connecting right now. Please try again later or use the contact form below.";
  }
}
