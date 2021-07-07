
import { Router } from "express";

const route = Router()

route.get('/', (requets, response)=>{
    response.json({message: 'hello wold'})
})

export { route }
