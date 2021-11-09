const express= require('express')
const graphHTTP = require('express-graphql')
const PORT = process.env.PORT || 4000;

const schema = require('./schema/schema')


//Middlewares
app.use('/graphql', graphHTTP({
    schema
}))
const app = express()

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})