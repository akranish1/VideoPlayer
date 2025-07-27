const API_KEY = "AIzaSyAPE6Ml6dv1pU-Pj-JImF9lzNVnQk85ttc";

export const SearchApi = async (query) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};