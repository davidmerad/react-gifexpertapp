export const getGifs =async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=AAaSY2ECCVhNbP7rXDMhclPxsBq4xA5F`
    const rpta = await fetch(url);
    const {data} = await rpta.json();
    const gifs = data.map(img => {
        return {
            id : img.id,
            title: img.title, 
            url : img.images?.downsized_medium.url 
        }
    });
    return gifs;
};