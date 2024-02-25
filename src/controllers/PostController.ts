import { Request, Response } from 'express';
import Post from '../db/models/post';

const getAllPosts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const posts = await Post.findAll();
    return res.status(200).json({
      status: 200,
      data: posts,
      message: 'All posts retrieved successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const getPostById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: 'Post not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: post,
      message: 'Post retrieved successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const createPost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { content, authorId } = req.body;
    const post = await Post.create({ content, authorId });
    return res.status(201).json({
      status: 201,
      data: post,
      message: 'Post created successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const updatePost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const postId = req.params.id;
    const { content } = req.body;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: 'Post not found',
      });
    }
    post.content = content;
    await post.save();
    return res.status(200).json({
      status: 200,
      data: post,
      message: 'Post updated successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const deletePost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: 'Post not found',
      });
    }
    await post.destroy();
    return res.status(200).json({
      status: 200,
      message: 'Post deleted successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export default { getAllPosts, getPostById, createPost, updatePost, deletePost };
