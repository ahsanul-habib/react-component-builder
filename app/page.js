"use client";

import { useState } from "react";

import CodeTextBox from "./components/CodeTextBox";
import SandBox from "./components/SandBox";
import PromptBox from "./components/PromptBox";
import initialComponent from "@/lib/initialComponent";
import toast from "react-hot-toast";
import getGeneratedCode from "./actions/getGeneratedCode";

export default function AiComponentBuilder() {
  const [componentDescription, setComponentDescription] = useState("");
  const [generatedComponent, setGeneratedComponent] =
    useState(initialComponent);

  const generateCode = async () => {
    toast.promise(
      async () => {
        try {
          const generatedCode = await getGeneratedCode([
            { role: "user", content: componentDescription },
          ]);

          if (generatedCode.success) {
            setGeneratedComponent(generatedCode.response);
            return "Code generated successfully";
          } else {
            throw new Error("Failed to generate code");
          }
        } catch (error) {
          throw new Error(error.message || "An unexpected error occurred");
        }
      },
      {
        loading: "Generating code...",
        success: (msg) => msg,
        error: (err) => err.message,
      }
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <PromptBox
          componentDescription={componentDescription}
          setComponentDescription={setComponentDescription}
          generateCode={generateCode}
        />
        <SandBox code={generatedComponent} />
      </div>
    </>
  );
}
