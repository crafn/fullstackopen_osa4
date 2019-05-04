const router = require('express').Router()
const Blog = require('../models/blog')

router.get('/api/blogs', async (request, response) => {
	const blogs = await Blog.find({})
	response.json(blogs.map(b => b.toJSON()))
})

router.post('/api/blogs', async (request, response) => {
	const blog = new Blog(request.body)
	const result = await blog.save()
	response.status(201).json(result.toJSON())
})

module.exports = router
