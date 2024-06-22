import Post from "../models/post.js";

export const create = async (req, res) => {
  const { content, author, title, image } = req.body;
  const newPost = new Post({
    content,
    author,
    title,
    image
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error);
  }
};

export const getposts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
  }
};
