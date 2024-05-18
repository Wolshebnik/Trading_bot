import { Schema, model, models } from 'mongoose';

const postsSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true },
);

const PostsModel = models.posts || model('posts', postsSchema);

export default PostsModel;
