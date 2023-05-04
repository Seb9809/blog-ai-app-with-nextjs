// Import statements for necessary dependencies and components
"use client"; // Indicates that this file is for the client-side only
import { FormattedPost } from "@/app/types";
import React, { useState } from "react";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

// Defining the props for this component
type Props = {
  post: FormattedPost; // post must be of type FormattedPost
};

// Defining the Content component with Props as input
function Content({ post }: Props) {
  // State hooks for managing the title and content of the post
  const [isEditable, setIsEditable] = useState<boolean>(false); // isEditable is initially false

  const [title, setTitle] = useState<string>(post.title); // title is set to the title of the post

  const [titleError, setTitleError] = useState<string>(""); // titleError is initially an empty string

  const [tempTitle, setTempTitle] = useState<string>(title); // tempTitle is initially set to the title of the post

  const [content, setContent] = useState<string>(post.content); // content is set to the content of the post

  const [contentError, setContentError] = useState<string>(""); // contentError is initially an empty string

  const [tempContent, setTempContent] = useState<string>(content); // tempContent is initially set to the content of the post

  // Parses the 'createdAt' string into a Date object, then formats the date using the 'toLocaleDateString' method.
  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Updates the isEditable state with the value passed as an argument, and also sets the editable property of the editor instance to the same value using the optional chaining operator ?.
  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  //Handles the onChange event of the title field, which is a text area element.
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError(""); //If the title state is truthy, and if so, it clears the titleError state.
    setTitle(e.target.value); //Updates the title state with the value of the text area
  };

  //Handles the onUpdate event of the editor instance
  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError(""); //It checks if the editor content is not empty, and if so, it clears the contentError state.
    setContent((editor as Editor).getHTML()); //Updates the content state with the HTML content of the editor instance
  };

  //useEditor hook from the @tiptap/react library to create an editor instance.
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    editable: isEditable,
  });

  // This function handles the form submission when the user clicks the "Submit" button
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading when the form is submitted

    // Validation checks for title and content fields
    if (title === "") setTitleError("This field is required");
    if (editor?.isEmpty) setContentError("This field is required.");

    // If the title or content fields are empty, exit the function early
    if (title === "" || editor?.isEmpty) return;

    // Send a PATCH request to update the post on the server
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, // URL to the API endpoint
      {
        method: "PATCH", // HTTP method
        headers: {
          "Content-Type": "application/json", // Content type header
        },
        body: JSON.stringify({
          // Request body containing the updated title and content
          title: title,
          content: content,
        }),
      }
    );

    // Parse the response data as JSON
    const data = await response.json();

    // Disable the editor and reset temporary title and content states
    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    // Update the title and content states with the response data
    setTitle(data.title);
    setContent(data.content);

    // Set the editor's content to the updated content from the server
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* Breadcrumbs */}
      {/* Display the breadcrumbs, showing the home page, category, and post title. */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title} `}</h5>

      {/* Category and Edit */}
      {/* Display the category and edit button. */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleisEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />

      {/* Form for editing the post */}
      {/* Handle the submission of the form. */}
      <form onSubmit={handleSubmit}>
        {/* Header */}
        {/* Display the title, author, and date of the post. */}
        <>
          {/* If the post is editable, display a textarea where the user can edit the title. */}
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full resize-none"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              />
              {/* If there's a title error, display the error message. */}
              {titleError && (
                <p className="mt-1 text-primary-500">{titleError}</p>
              )}
            </div>
          ) : (
            // If the post is not editable, display the title as a heading.
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}

          {/* Display the author and date of the post. */}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-30 text-xs">{formattedDate}</h6>
          </div>
        </>

        {/* Image */}
        {/* Display the image for the post. */}
        <div className="relative w-auto max-w-full mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480pxx) 100vw,
        (max-width: 768px) 85vw,
        (max-width: 1060px) 75vw,
        60vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Article */}
        {/* Display the content of the post. */}
        <Article
          contentError={contentError}
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          title={title}
        />

        {/* Save/submit button */}
        {/* If the post is editable, display a button for submitting changes. */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      {/* Social Links */}
      {/* Display Social Links */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
}

export default Content;
