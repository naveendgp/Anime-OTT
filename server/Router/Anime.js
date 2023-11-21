import express from 'express'
import Anime from "../model/anime.js"

const router = express.Router()

router.get('/',async(req,res) =>{
    try{
        const response = await Anime.find({})
        res.json(response)
    }catch (e){
        console.log(e)
    }
})

export {router as animeRouter}