
import mongoose from 'mongoose'

const AnimeBanner = new mongoose.Schema({
    title:String,
    desc:String,
    genre:String,
    year:String,
    seasons:String,
    Bannerurl:String,
    cardlogo:String,
})

export default mongoose.model('animeBanner',AnimeBanner)