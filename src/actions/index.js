// define your actions here!

export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}


export function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie: movie
  }
}
