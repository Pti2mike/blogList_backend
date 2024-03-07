const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const blogLikeSum = blogs.reduce((sum, blog) => sum + blog.likes, 0);
  return blogLikeSum;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  const mostLikedBlog = blogs.reduce((maxLikesBlog, currentBlog) =>
    currentBlog.likes > maxLikesBlog.likes ? currentBlog : maxLikesBlog
  );

  const { title, author, likes } = mostLikedBlog;

  return {
    title,
    author,
    likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
