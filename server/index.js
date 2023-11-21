
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
const PORT = 3000
import { Server } from "socket.io"
import http from "http"

import { animeRouter } from './Router/Anime.js'
import { AnimeBannerRouter } from './Router/AnimeBanner.js'

const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)
app.use("/home", animeRouter)
app.use("/homebanner",AnimeBannerRouter)


const io = new Server(server,{
    cors:[]
})
const URL = 'mongodb+srv://naveendgp:naveen2004@post.yl2hhwy.mongodb.net/'

mongoose.connect(URL)

io.on('connection', (socket) => console.log('connection established'))

const db = mongoose.connection
db.once('open', () => {
    console.log("Connected to Databse...")

    const animeChange = db.collection('animes').watch()
    const animeBanner = db.collection('animeBanner').watch()



    animeChange.on("change", async(change) => {
        console.log(change)
        if (change.operationType == 'insert') {
            
            io.emit("message", change.fullDocument)
    }
    else if(change.operationType == 'delete'){
        io.emit("delete",change.fullDocument)
    }
    },

    animeBanner.on("change", async(change) => {
        console.log(change)
        if(change.operationType == 'insert') {

            io.emit("banner",change.fullDocument)
        }
    })
)}
    
)


server.listen(PORT,() => {console.log("Server Started...")})


  



