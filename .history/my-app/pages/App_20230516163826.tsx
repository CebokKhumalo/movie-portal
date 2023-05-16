import React from 'react';
import { useGet } from 'restful-react';

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });
    if (!data) {
        return <div>Loading...</div>;
    }

    const movies = { data };

    console.log('movies: ', movies.data.result);
    console.log('@movies', movies);

    return (
        <div>
            {movies.map(movie=>(
                
            ))}
        </div>
    );
};

export default App;
