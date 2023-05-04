import { Editor } from "@tiptap/react";
import React from "react";

// Define the Props interface
type Props = {
  editor: Editor | null;
};

// Define the EditorMenuBar component
const EditorMenuBar = ({ editor }: Props) => {
  // If the editor is null, return null
  if (!editor) {
    return null;
  }

  // Render the editor menu bar
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Button to toggle Heading 1 */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            // Set the button class based on whether the heading is active
            editor.isActive("heading", { level: 1 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">1</span>
        </button>

        {/* Button to toggle Heading 2 */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            // Set the button class based on whether the heading is active
            editor.isActive("heading", { level: 2 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">2</span>
        </button>

        {/* Button to toggle Heading 3 */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            // Set the button class based on whether the heading is active
            editor.isActive("heading", { level: 3 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">3</span>
        </button>

        {/* Button to set paragraph */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            // Set the button class based on whether the paragraph is active
            editor.isActive("paragraph")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          paragraph
        </button>

        {/* Button to toggle bold */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            // Set the button class based on whether the bold is active
            editor.isActive("bold")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <b>B</b>
        </button>

        {/* Button to toggle italic */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            // Set the button class based on whether the italic is active
            editor.isActive("italic")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <i>I</i>
        </button>
      </div>
    </div>
  );
};

export default EditorMenuBar;
