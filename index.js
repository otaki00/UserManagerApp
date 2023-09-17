const express = require('express')
const registerRouter = require('./routes/registerRoute')
const loginRouter = require('./routes/loginRoute')
const usersRouter = require('./routes/userRoute')

const app = express()
app.use(express.json())

app.use('/api/v1/register', registerRouter)
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/users', usersRouter)



module.exports = app