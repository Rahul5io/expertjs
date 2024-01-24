
import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import LoadingSpinner from "../components/loadingSpinner";

const Button = (props) => {
  return (
    <button
      className="ml-2 rounded-lg bg-blue-500 text-white px-4 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default function ChatAi() {
  const [result, setResult] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  var API_KEY = "AIzaSyDIzki9VLJ43LgEAHlMSpOZSr63k10MG9A";

  // Initialize the Generative AI client
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // Define the generation config and safety settings
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  async function sendMessage() {
    setLoading(true);

    // For text-only input, use the gemini-pro model
    const prompt = userInput;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setResult((prev) => [...prev, text]);

    setLoading(false);
    scrollToBottom();
    setUserInput("");
  }

  const scrollToBottom = () => {
    const element = document.getElementById("chat-container");
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const handleKeyDown = (event) => {
    console.log("handle Key down button");
    if (event.key === "Enter") {
      // Trigger the button click
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        id="chat-container"
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {result.map((item, index) => (
          <div key={index} className="flex items-end gap-2">
            <div>AI</div>
            <div className=" p-2 rounded-lg bg-gray-200 dark:bg-gray-200  ">
              <p className="text-sm">{item}</p>
            </div>
          </div>
        ))}
        {userInput && (
          <div className="flex items-end gap-2 justify-end">
            <div className="p-2 rounded-lg bg-blue-500 text-white dark:bg-blue-800">
              <p className="text-sm">{userInput}</p>
            </div>
            <div>user</div>
          </div>
        )}
      </div>
      <div className="sticky bottom-0 z-50">
        <div className="flex items-center gap-2">
          <input
            className="flex-1 rounded-lg border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
            placeholder="  Ask AI about anything"
            value={userInput}
            onChange={handleUserInput}
            onKeyDown={handleKeyDown}
          />

          {loading ? (
            <div className="ml-2">
              <LoadingSpinner />
            </div>
          ) : (
            <Button onClick={sendMessage}>Send</Button>
          )}
        </div>
      </div>
    </div>
  );
}