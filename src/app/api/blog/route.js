import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request) => {

    try {
        connectToDb();

        const posts = await Post.find()
        return NextResponse.json(posts);
    } catch (error) {
        coneole.log(err);
        throw new Error("Failed to fetch Posts")
        
    }
}