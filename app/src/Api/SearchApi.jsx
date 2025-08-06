const API_KEY = "AIzaSyDZTwHv5cxbv8T3KXh5l80nPLzFFAhi7rg";

export const SearchApi = async (query) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};