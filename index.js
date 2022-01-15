import { GraphQLServer } from 'graphql-yoga'
import resolvers from '../graphQL/graphql/resolvers.js'

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
})
server.start(() => console.log('Graphql'))
