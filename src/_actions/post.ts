'use server';

import PostsModel from '@/models/post';
import connectDB from '@/config/database';

export async function getPosts() {
  try {
    await connectDB();
    const posts = await PostsModel.find();
    const data = JSON.parse(JSON.stringify(posts));
    return { posts: data };
  } catch (err) {
    console.log(err);
  }
}
