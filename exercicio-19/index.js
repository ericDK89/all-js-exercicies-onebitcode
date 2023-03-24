const Author = require("./Author");
const Post = require("./Post");
const Comments = require("./Comments");

const newPost = new Post();

const author = new Author("Eric");
const comment = new Comments("Novo comentário");

newPost.createNewPost(1, "Nova postagem", author);
newPost.addComment(1, comment);

console.log(newPost.post[0].comments);
