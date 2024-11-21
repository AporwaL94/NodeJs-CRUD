import { Router } from 'express';
import { getBlogs, createNewBlog } from '../controllers/blogController';

const router = Router();

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: A list of blogs
 */
router.get('/blogs', getBlogs);

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog
 *     tags:
 *       - Blogs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog created
 */
router.post('/blogs', createNewBlog);

export default router;
