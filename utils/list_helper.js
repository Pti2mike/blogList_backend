const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const blogLikeSum = blogs.reduce((sum, blog) => sum + blog.likes, 0);
  return blogLikeSum;
};

module.exports = {
  dummy,
  totalLikes,
};
