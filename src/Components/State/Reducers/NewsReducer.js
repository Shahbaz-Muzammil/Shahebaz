export const initialState={
    newsData:[
        {
            title:"Global News",
            Image:"https://www.pexels.com/photo/unrecognizable-pedestrians-walking-in-city-district-on-rainy-day-7210061/",
            discription: "this is an global main news "
        },
        {
            title:"Country News",
            Image:"https://www.pexels.com/photo/unrecognizable-pedestrians-walking-in-city-district-on-rainy-day-7210061/",
            discription: "this is an Country main news " 
        },
        {
            title:"state News",
            Image:"https://www.pexels.com/photo/unrecognizable-pedestrians-walking-in-city-district-on-rainy-day-7210061/",
            discription: "this is an State main news "
        }
    ]
}
export const NewsReducer=(state=initialState,action)=>{
    return state;

};