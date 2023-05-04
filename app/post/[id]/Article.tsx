import React, { useState } from "react";
import { Editor, EditorContent } from "@tiptap/react";
import EditorMenuBar from "./EditorMenuBar";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

// Defining the Article component and passing it the props
const Article = ({
  contentError,
  editor,
  isEditable,
  setContent,
  title,
}: Props) => {
  // Initializing state to store the "role" of the writer for AI generated content
  const [role, setRole] = useState<string>("I am a helpful assistant");

  // If the editor is not present, return null
  if (!editor) {
    return null;
  }

  // Function to generate AI content using OpenAI API
  const postAiContent = async () => {
    // Updating the editor's content to show that the AI content is being generated
    editor
      .chain()
      .focus()
      .setContent("Generating Ai Content. Please wait...")
      .run();

    // Sending a request to the OpenAI API to generate content
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        role: role,
      }),
    });

    // Parsing the response from the API and updating the editor's content
    const data = await response.json();
    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  // Rendering the article
  return (
    <article className="text-wh-500 leading-8">
      {/* AI generator */}
      {/* Rendering the AI generator only if the component is editable */}
      {isEditable && (
        <div className="border-2 rounded-md bg-wh-50 p-3 mb-3">
          <h4 className="m-0 p-0">Generate AI content</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex gap-5 justify-between">
            {/* Input field for the role of the writer */}
            <input
              className="border-2 rounded-md bg-wh-50 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            {/* Button to generate AI content */}
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}
      {/* Rendering the editor content */}
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {/* Rendering the editor menu bar only if the component is editable */}
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        {/* Rendering the editor content */}
        <EditorContent editor={editor} />
      </div>
      {/* Rendering the content error, if any */}
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
