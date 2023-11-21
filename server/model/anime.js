import mongoose from 'mongoose'
const Anime = new mongoose.Schema({
    title:String,
    desc:String,
    category:String,
    posterUrl:String,
    fileUrl:String
},{
    timestamps:true
})

export default mongoose.model("anime",Anime)    