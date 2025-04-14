const express=require("express")

const cookieParser=require("cookie-parser")
const dotenv=require("dotenv")
const authRoutes=require("./routes/auth.routes")
const userRoutes=require("./routes/user.routes")
const messageRoutes=require("./routes/message.routes")
const connectToMongoDb=require("./db/connectToMongoDb")
const { app, server } = require("./socket/socket")


dotenv.config()
const PORT=process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`The server is run on the port ${PORT}`)
})