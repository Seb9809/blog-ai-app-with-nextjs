import { PrismaClient } from "@prisma/client";

// Declare a variable to hold an instance of PrismaClient
let prismaInit: PrismaClient;

// Check if the environment is production
if (process.env.NODE_ENV === "production") {
  // If it is production, create a new instance of PrismaClient
  prismaInit = new PrismaClient();
} else {
  // If it is not production, check if an instance of PrismaClient has already been created and stored in the global object
  if (!(global as any).prisma) {
    // If an instance of PrismaClient has not been created and stored in the global object, create a new instance and store it in the global object
    (global as any).prisma = new PrismaClient();
  }
  // Set the variable to reference the instance of PrismaClient in the global object
  prismaInit = (global as any).prisma;
}

// Export the variable holding the instance of PrismaClient
export const prisma = prismaInit;
