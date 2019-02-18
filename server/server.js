let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");
let faker = require("faker");

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
      updateLikes(post_id: String!, user_id: String!): Post
    }
  `);

let userslist = {
  a: {
    id: "a",
    nickname: "Chris",
    avatar: faker.image.imageUrl(30, 30, "people", true)
  },
  b: {
    id: "b",
    nickname: "Haris",
    avatar: faker.image.imageUrl(30, 30, "people", true)
  },
  c: {
    id: "c",
    nickname: "Paris",
    avatar: faker.image.imageUrl(30, 30, "people", true)
  },
  d: {
    id: "d",
    nickname: "Maris",
    avatar: faker.image.imageUrl(30, 30, "people", true)
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
      image: faker.random.image(),
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
      user: userslist["b"],
      caption: "Angular Book :)",
      image:
        faker.random.image(),
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
      user: userslist["c"],
      caption: "Me at Frontstack.io",
      image: faker.random.image(),
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
      image: faker.random.image(),
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
    console.log(commentsList[post_id])
    return commentsList[post_id];
  },
  updateComments: function ({ input }) {
    const { post_id, author, text, timestamp } = input;
    const id = Date.now().toString();
    commentsList[post_id].push({
      author,
      text,
      timestamp,
      id,
    });
    console.log(commentsList[post_id],'updated')
    return {
      author, text, timestamp, id,
    };
  },
  updateLikes: function ({ post_id, user_id }) {
    let post = postslist[user_id].find((post) => (post.id === post_id))
    post = { ...post, likes: post.likes + 1 };
    postslist[user_id][postslist[user_id].findIndex((post) => (post.id === post_id))] = post;
    return post;
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