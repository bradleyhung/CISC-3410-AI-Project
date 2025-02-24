"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const initialCode = `
def greet(name):
    return f"Hello, {name}! Welcome to GirlsWhoCode BC!"

# Try changing the name below and click "Run Code"
print(greet("Alice"))
`;

export default function CodeEditor() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [typingOutput, setTypingOutput] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    const name = code.match(/greet\("(.+)"\)/)?.[1] || "World";
    const fullOutput = `Hello, ${name}! Welcome to GirlsWhoCode BC!`;
    setOutput("");
    setTypingOutput("");
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypingOutput((prev) => prev + fullOutput[i]);
      i++;
      if (i === fullOutput.length) {
        clearInterval(typingInterval);
        setOutput(fullOutput);
      }
    }, 50);
  };

  return (
    <section className="py-20 bg-gradient-to-tr from-rose-100 via-pink-100 to-fuchsia-100 dark:from-rose-950 dark:via-pink-950 dark:to-fuchsia-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Try Coding!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="w-full h-64 p-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-inner font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button
              onClick={handleRunCode}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
            >
              Run Code
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Output:
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner font-mono text-sm text-gray-800 dark:text-white min-h-[200px]">
              {typingOutput}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
