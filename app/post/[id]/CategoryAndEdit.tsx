import React from "react";
import { Editor } from "@tiptap/react";
import { FormattedPost } from "@/app/types"; // Importing custom types
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

// Defining the props type
type Props = {
  isEditable: boolean;
  handleisEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

// Defining the component
const CategoryAndEdit = ({
  isEditable,
  handleisEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) => {
  // Function to enable editing
  const handleEnableEdit = () => {
    handleisEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    handleisEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };

  // Rendering the category and edit button
  return (
    <div className="flex justify-between items-center">
      {/* Displaying the category */}
      <h4 className="bg-accent-orange py-2 px-5 tex-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div className="mt-4">
        {/* Rendering the edit button */}
        {isEditable ? (
          <div className="flex justify-between gap-3">
            {/* Rendering the cancel button when in edit mode */}
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          // Rendering the pencil square icon when not in edit mode
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
