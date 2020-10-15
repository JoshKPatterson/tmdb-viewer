import React from 'react'

// this function renders a list of unique genre labels that correspond to a particular item
// a refers to the type of item being rendered, such as show or movie
// b refers to the the genre list reducer that corresponds to a
export const genreDisplay = (a, b) => {
  const genres = a.genre_ids.map(num => {
    const genre = b.filter(obj => obj.id === num)
    return genre[0].name
   })
  const genreItems = [...new Set(genres)]
  return (
    <div>
      Genres:
      {genreItems.length === 0 ? <div>None to display</div> : genreItems.map(genre => <div key={genre}>{genre}</div> )}
    </div>
  )
} 

// this function helps determine what to render based on the absense of a poster photo and the current state of imageLoaded or other relevant state variable
// a refers to the type of item being rendered, such as show or movie
// b refers to the state variable that determines whether image has loaded, like imageLoaded
// item refers to the item that is being rendered by the function
// replace refers to an optional special item, used to indicate a lack of item
export const checkPosterPath = (a, state, item, replace = item) => !a.poster_path ? item : !state ? null : replace