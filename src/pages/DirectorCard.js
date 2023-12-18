import React from 'react'

const DirectorCard = ({name, movies}) => {

    const movieList = movies.map(movie => <li key={movie}>{movie}</li>)
    return (
        <div>
            <article>
                <h2>{name}</h2>
                <ul>
                   {movieList}
                </ul>
            </article>
        </div>
    )
}

export default DirectorCard
