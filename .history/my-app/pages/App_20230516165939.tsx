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
                <h1>{movie.title}</h1>
                <h1>{movie.duration}</h1>
                <h1>{movie.title}</h1>
                <h1>{movie.title}</h1>
                <h1>{movie.title}</h1>
            ))}
        </div>
    );
};

export default App;
