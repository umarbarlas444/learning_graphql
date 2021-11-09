const graphql = require('graphql')
const { buildResolveInfo } = require('graphql/execution/execute')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
}) 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args ){
                //Code to get data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})