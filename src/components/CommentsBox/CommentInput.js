import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import UserInput from './UserInput.js';
const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  description: 'Input comment payload',
  fields: () => ({
    post_id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    author: {
      input: UserInput
    },
    text: {
      type: GraphQLString
    },
    timestamp: {
      type: GraphQLString
    }
  })
});

export { CommentInputType as default };
