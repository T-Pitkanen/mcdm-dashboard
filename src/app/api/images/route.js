import dbConnect from "@/lib/db/dbConnect.mjs";
import authorModel from "@/lib/db/models/author.model.mjs";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
    const db = await connectToDatabase();
    const collection = db.collection("images");
    const data = await collection.find().toArray();
  
    return NextResponse.json(data);
  }