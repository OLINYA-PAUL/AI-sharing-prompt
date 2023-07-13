import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const newPrompt = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(newPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
