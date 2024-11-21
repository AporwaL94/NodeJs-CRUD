// controllers/blogController.ts
import { Request, Response } from 'express';
import { getAllBlogs, createBlog } from '../services/blogService';

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags:
 *       - Blog
 *     responses:
 *       200:
 *         description: Successfully fetched all blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   author:
 *                     type: string
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 */

// Controller to get all blogs
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs); // Send the blogs in response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
};

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog
 *     tags:
 *       - Blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the blog
 *               content:
 *                 type: string
 *                 description: The content of the blog
 *     responses:
 *       201:
 *         description: Successfully created a new blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the blog
 *                 title:
 *                   type: string
 *                   description: The title of the blog
 *                 content:
 *                   type: string
 *                   description: The content of the blog
 *                 author:
 *                   type: string
 *                   description: Author of the blog
 *                 tags:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: Tags associated with the blog
 */

// Controller to create a new blog
export const createNewBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newBlog = await createBlog({ title, content });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog' });
  }
};
