// const { ApolloServer, gql } = require('apollo-server');
import {ApolloServer,gql} from 'apollo-server';
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int
    fetchBoardsCount: Int
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 10,// 중괄호와 return사이에 아무것도 없으면 이렇게 쓴다 
  },
};
//리졸버
const server = new ApolloServer({
  typeDefs,//: typeDefs, //같으면 생략 가능하다(shorthand property)
  resolvers//: Resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
//기본포트:3000