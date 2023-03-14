export const GOOGLE_API_KEY="AIzaSyATTNWmI0JOfNVv-sg7Ju3rJL0Yxqseg_0"
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key="+GOOGLE_API_KEY;
// export const SUGGESTIONS_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="+GOOGLE_API_KEY;

export const searchAPI=(keyword)=>{
    return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+keyword+"&key="+GOOGLE_API_KEY;
}