import express from 'express'
import AnimeBanner from '../model/animeBanner.js'

const router = express.Router()

router.get('/', async(req,res) => {

    try{
        const response = await AnimeBanner.find({})
        res.json(response)
        console.log(response.data)

    }
    catch (e){
        console.log(e)
    }
})

export {router as AnimeBannerRouter}