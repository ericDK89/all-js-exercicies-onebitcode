class Post {
  constructor() {
    this.post = [];
  }

  createNewPost(id, post, author) {
    const newPost = {
      id,
      post,
      author,
      comments: [],
    };

    this.post.push(newPost);
  }

  addComment(id, comment) {
    const postIndex = this.post.findIndex((post) => post.id === id);
    this.post[postIndex].comments.push(comment);
  }
}

module.exports = Post;
