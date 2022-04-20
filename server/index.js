const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
  enum Color {
    Red
    Yellow
    Blue
  }
  
  type Query {
      colors: [Color!]!
  }
`

const resolvers = {
  Query: {
    colors: () => ["RED"]
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})