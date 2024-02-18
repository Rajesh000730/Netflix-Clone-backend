import express, {Request, Response} from 'express'
import { instance2 } from '../config/axiosconfig';
const router = express.Router();

const API_KEY = process.env.API_KEY
router.get("/", async(req: Request, res: Response)=>{
    const requests = [
        instance2("movie/now_playing",{
            params:{
                api_key: API_KEY
            }
        }),
        instance2("movie/top_rated",{
            params:{
                api_key: API_KEY
            }
        }),
        instance2("movie/upcoming",{
            params:{
                api_key: API_KEY
            }
        }),
        instance2("/trending/movie/day",{
            params:{
                language:"en-US",
                api_key: API_KEY
            }
        })
    ]
   try{
    Promise.all(requests)
   .then((responses:Array<any>)=>{
    const [response1, response2, response3, response4] = responses
    const movies = [{movies:response1.data.results, topic:"Now Playing"},{movies:response4.data.results, topic:"Trending"},{movies:response2.data.results, topic:"Top rated"},{movies:response3.data.results, topic:"Upcoming"}]
    res.json(movies)

   })
   }catch(e:any){
    console.log(e.message)
   }
  

})


//search

router.get('/')
export default router