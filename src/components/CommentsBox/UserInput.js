import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Input user payload',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nickname: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    }
  })
});

export { UserInputType as default };
