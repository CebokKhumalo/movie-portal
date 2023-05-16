import React from 'react';
import { useGet } from 'restful-react';

interface Movies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
}

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });
    if (!data) {
        return <div>Loading...</div>;
    }

    const movies = data.result;

    console.log('movies: ', movies);
    console.log('@movies', movies);

    return (
        <div>
            {movies.map((movie: Movies) => (
                <h1>{(movie.title, movie.duration, movie.staring, movie.)}</h1>
            ))}
        </div>
    );
};

export default App;
