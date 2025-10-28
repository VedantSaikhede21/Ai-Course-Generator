const { default: axios } = require("axios");
const { max } = require("drizzle-orm");

const NEXT_PUBLIC_YOUTUBE_API_KEY='AIzaSyB_F4HeRcXc7fuelUeWheJmceymIMFYUVQ';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const getVideos=async(query)=>{
    const params={
        part:'snippet',
        q:query,
        maxResults:1,
        type:'video',
        key: NEXT_PUBLIC_YOUTUBE_API_KEY
    }

    const resp= await axios.get(YOUTUBE_BASE_URL+'/search',{params});

    return resp.data.items;
}

export default {
    getVideos
}