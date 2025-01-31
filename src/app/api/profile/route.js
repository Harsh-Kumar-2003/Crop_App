"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Profile from "@/models/Profile";
import User from "@/models/User";
const uri = process.env.MONGODB_URI; // Your MongoDB connection string

export async function POST(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const profileData = (await Profile.findOne({ uuid: uuid })) || {};
  if (profileData.length > 0) {
    return NextResponse.json(
      { message: "Profile already exists" },
      { status: 400 }
    );
  }

  const body = await req.json();
  const profile = new Profile(body);
  await profile.save();
  return NextResponse.json({ status: 201 });
}

export async function PUT(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const body = await req.json();
  const profile = await Profile.findOneAndUpdate({ uuid: uuid }, body, {
    new: true,
  });
  if (!uuid) {
    return NextResponse.json({ message: "UUID is required" }, { status: 400 });
  }
  if (!profile) {
    return NextResponse.json({ message: "Profile not found" }, { status: 404 });
  }
  return NextResponse.json({ status: 200 });
}
