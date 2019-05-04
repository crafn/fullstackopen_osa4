const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	if (blogs.length === 0)
		return 0;
	return blogs.map(b => b.likes).reduce((a, b) => a + b)
}

const favoriteBlog = (blogs) => {
	if (blogs.length === 0)
		return null;
	let largest = 0;
	for (let i = 0; i < blogs.length; ++i) {
		if (blogs[i].likes > blogs[largest].likes)
			largest = i
	}
	return blogs[largest]
}

const mostBlogs = (blogs) => {
	if (blogs.length === 0)
		return null;
	let blog_counts = {};
	let most = null;
	for (let i = 0; i < blogs.length; ++i) {
		const a = blogs[i].author
		blog_counts[a] = blog_counts[a] + 1 || 1
		if (most === null || blog_counts[a] > blog_counts[most])
			most = a
	}
	return { author: most, blogs: blog_counts[most] }
}

const mostLikes = (blogs) => {
	if (blogs.length === 0)
		return null;
	let likes = {};
	let most = null;
	for (let i = 0; i < blogs.length; ++i) {
		const a = blogs[i].author
		likes[a] = (likes[a] || 0) + blogs[i].likes
		if (most === null || likes[a] > likes[most])
			most = a
	}
	return { author: most, likes: likes[most] }
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes
}

