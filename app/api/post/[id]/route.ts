import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

// Handler function for HTTP PATCH requests
export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params; // Extract the "id" parameter from the request URL
    const { title, content } = await request.json(); // Extract the new title and content values from the request body

    // Use Prisma's "update" method to update the post with the given ID
    const post = await prisma.post.update({
      where: { id: id }, // Specify the post to update by its ID
      data: { title, content }, // Set the new title and content values for the post
    });

    // Return a JSON response with the updated post data and HTTP status code 200
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    // If an error occurs during the update operation, log the error to the console and return a JSON error response with HTTP status code 500
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
