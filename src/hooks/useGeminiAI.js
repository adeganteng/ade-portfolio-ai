import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const aiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are a helpful AI assistant...`; // sebutkan profil

export const useGeminiAI = () => {
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([
    { role: "system", parts: [{ text: SYSTEM_PROMPT }] },
  ]);

  const sendMessage = async (message) => {
    if (!message.trim()) throw new Error("Message is empty.");

    setLoading(true);

    try {
      const updatedContents = [
        ...conversationHistory,
        { role: "user", parts: [{ text: message }] },
      ];

      const response = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents: updatedContents,
        temperature: 0.7,
        maxOutputTokens: 1024,
      });

      const aiMessage = {
        role: "assistant",
        parts: [{ text: response.text }],
      };

      setConversationHistory([...updatedContents, aiMessage]);
      return response.text;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setConversationHistory([
      { role: "system", parts: [{ text: SYSTEM_PROMPT }] },
    ]);
  };

  return { sendMessage, loading, conversationHistory, clearHistory };
};
