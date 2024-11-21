const blogs: any[] = [
    {
        id: 1,
        title: 'How to Learn TypeScript',
        content: 'TypeScript is a superset of JavaScript that adds static typing. In this article, we will explore how to learn TypeScript from scratch, including setting up the environment, writing basic code, and using advanced features.',
        author: 'John Doe',
        createdAt: '2024-11-15',
        updatedAt: '2024-11-15',
        tags: ['TypeScript', 'JavaScript', 'Programming'],
        publishDate: '2024-11-16',
        image: 'https://example.com/learn-typescript.jpg',
    },
    {
        id: 2,
        title: 'The Future of Web Development',
        content: 'Web development is evolving rapidly with new tools, frameworks, and best practices. In this article, we’ll discuss some of the trends shaping the future of web development and how developers can stay ahead of the curve.',
        author: 'Jane Smith',
        createdAt: '2024-10-10',
        updatedAt: '2024-10-12',
        tags: ['Web Development', 'Frontend', 'Trends'],
        publishDate: '2024-10-15',
        image: 'https://example.com/web-development.jpg',
    },
    {
        id: 3,
        title: 'Building Scalable APIs with Node.js',
        content: 'Node.js is one of the most popular environments for building scalable web APIs. In this article, we explore best practices for building APIs using Node.js, including structure, error handling, and performance optimizations.',
        author: 'Alice Brown',
        createdAt: '2024-09-20',
        updatedAt: '2024-09-21',
        tags: ['Node.js', 'API', 'Backend'],
        publishDate: '2024-09-22',
        image: 'https://example.com/nodejs-api.jpg',
    },
    {
        id: 4,
        title: 'Understanding React Hooks',
        content: 'React Hooks provide a powerful way to use state and lifecycle methods in functional components. In this tutorial, we’ll go through the most commonly used hooks, including useState, useEffect, and custom hooks.',
        author: 'Bob Johnson',
        createdAt: '2024-08-05',
        updatedAt: '2024-08-06',
        tags: ['React', 'Frontend', 'Hooks'],
        publishDate: '2024-08-07',
        image: 'https://example.com/react-hooks.jpg',
    },
    {
        id: 5,
        title: 'Introduction to GraphQL',
        content: 'GraphQL is a query language for APIs that allows clients to request exactly the data they need. In this post, we’ll explain what GraphQL is, how it works, and why it’s gaining popularity over REST APIs.',
        author: 'Charlie Davis',
        createdAt: '2024-07-25',
        updatedAt: '2024-07-26',
        tags: ['GraphQL', 'API', 'Backend'],
        publishDate: '2024-07-28',
        image: 'https://example.com/graphql.jpg',
    }
];

export const getAllBlogs = async () => {
    return blogs;
};

export const createBlog = async (blogData: { title: string, content: string }) => {
    const newBlog = { id: Date.now(), ...blogData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    blogs.push(newBlog);
    return newBlog;
};
