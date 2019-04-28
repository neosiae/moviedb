const API_KEY = 'abcefd6209b563d488aa2f9a6294d4ca'

export function topRatedContent (type) {
  return `https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_KEY}`
}

export function search (type, query) {
  return `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${API_KEY}`
}

export function info (type, id) {
  return `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&append_to_response=videos`
}