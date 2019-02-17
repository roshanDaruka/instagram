let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

let schema = buildSchema(`
    type User {
      id : String!
      nickname : String!
      avatar : String!
    }
    type Comment {
      author: User!
      text: String!
      timestamp: String
      id: String!
    }

    input CommentInput {
      author: UserInput!
      text: String!
      timestamp: String
      post_id: String!
    }
    input UserInput {
      id : String!
      nickname : String!
      avatar : String!
    }
    type Post {
        id: String!
        user: User!
        caption : String!
        image : String!
        comment: Comment
        likes: Int
    }
    type Query{
      user(user_id: String) : User!
      post(user_id: String, post_id: String) : Post!
      posts(user_id: String) : [Post]
      comments(post_id: String): [Comment]
    }

    type Mutation {
      updateComments(input: CommentInput): Comment
    }
  `);

let userslist = {
  a: {
    id: "a",
    nickname: "Chris",
    avatar: "https://loremflickr.com/30/30"
  },
  b: {
    id: "b",
    nickname: "Haris",
    avatar: "https://loremflickr.com/30/30"
  },
  c: {
    id: "c",
    nickname: "Paris",
    avatar: "https://loremflickr.com/30/30"
  },
  d: {
    id: "d",
    nickname: "Maris",
    avatar: "https://loremflickr.com/30/30"
  },
};

let commentsList = {
  post_a: [
    {
      id: "comment_id_1",

      author: userslist["a"],
      text: "Hou arer u ?",
      timestamp: "1550328142",
    },
    {
      id: "comment_id_2",

      author: userslist["c"],
      text: "hello what sup",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_3",

      author: userslist["d"],
      text: "well done",
      timestamp: "1550328142",

    },
  ],
  post_b: [
    {
      author: userslist["a"],
      text: "Hou arer u ?",
      timestamp: "1550328142",
      id: "comment_id_4",

    },
    {
      id: "comment_id_5",

      author: userslist["c"],
      text: "hello what sup",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_6",

      author: userslist["d"],
      text: "well done",
      timestamp: "1550328142",

    },
  ],
  post_c: [
    {
      id: "comment_id_7",
      author: userslist["b"],
      text: "hello",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_8",
      author: userslist["c"],
      text: "hello what sup",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_9",
      author: userslist["d"],
      text: "well done",
      timestamp: "1550328142",

    },
  ],
  post_d: [
    {
      id: "comment_id_10",
      author: userslist["b"],
      text: "hello",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_11",
      author: userslist["c"],
      text: "hello what sup",
      timestamp: "1550328142",

    },
    {
      id: "comment_id_12",
      author: userslist["d"],
      text: "well done",
      timestamp: "1550328142",

    },
  ],
}

let postslist = {
  a: [
    {
      id: "post_a",
      user: userslist["a"],
      caption: "Moving the community!",
      image: "https://loremflickr.com/300/450",
      likes: 34,
      comment: {
        author: userslist["a"],
        text: "Hou arer u ?",
        timestamp: "1550328142",
        id: "comment_id_1",
      }
    },
    {
      id: "post_b",
      user: userslist["a"],
      caption: "Angular Book :)",
      image:
        "https://loremflickr.com/300/450",
      likes: 34,
      comment: {
        author: userslist["a"],
        text: "Hou arer u ?",
        timestamp: "1550328142",
        id: "comment_id_4",
      }
    },
    {
      id: "post_c",
      user: userslist["a"],
      caption: "Me at Frontstack.io",
      image: "https://loremflickr.com/300/450",
      likes: 34,
      comment: {
        id: "comment_id_7",
        author: userslist["b"],
        text: "hello",
        timestamp: "1550328142",
      }
    },
    {
      id: "post_d",
      user: userslist["a"],
      caption: "Moving the community!",
      image: "https://loremflickr.com/300/450",
      likes: 34,
      comment: {
        id: "comment_id_10",
        author: userslist["b"],
        text: "hello",
        timestamp: "1550328142",
      }
    }
  ]
};

let root = {
  user: function ({ user_id }) {
    return userslist[user_id];
  },
  post: function ({ user_id, post_id }) {
    return postslist[user_id][post_id];
  },
  posts: function ({ user_id }) {
    return postslist[user_id];
  },
  comments: function ({ post_id }) {
    return commentsList[post_id];
  },
  updateComments: function({ post_id, author, text, timestamp}) {
    commentsList[post_id].push({
      author,
      text,
      timestamp,
    });
    return {
      author, text, timestamp,
    };
  }
};

let app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
// set application port
app.listen(4000);