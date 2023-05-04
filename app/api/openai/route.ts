import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

// Set up OpenAI configuration with API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // API key is stored as an environment variable
});

// Create an OpenAI instance with the given configuration
const openai = new OpenAIApi(configuration);

// Define an asynchronous function that handles POST requests
export async function POST(request: Request) {
  try {
    // Extract the title and role from the request body
    const { title, role } = await request.json();

    // Use OpenAI to generate a blog post based on the given title
    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo", // Use the "gpt-3.5-turbo" model for generating text
        messages: [
          {
            role: "user",
            content: `Create 3 line blog post with html tags bases on this title: ${title}`, // Prompt the user to create a 3-line blog post with HTML tags based on the given title
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags.`, // Provide additional instructions to the user
          },
        ],
      });

    // Return the generated blog post as a JSON response
    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content, // Extract the generated text from the response object
      },
      { status: 200 }
    );
  } catch (error) {
    // If an error occurs, log it to the console and return a 500 error response
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
