function createPostClasses() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let rating = this.likes - this.dislikes;
      let result = super.toString() + `\nRating: ${rating}`;
      if (this.comments.length > 0) {
        result += "\nComments:";
        this.comments.forEach((comment) => {
          result += `\n* ${comment}`;
        });
      }
      return result;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return `${super.toString()}\nViews: ${this.views}`;
    }
  }

  return {
    Post: Post,
    SocialMediaPost: SocialMediaPost,
    BlogPost: BlogPost,
  };
}

// Example usage:
const classes = createPostClasses();

let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
