import React from 'react';
import { useGet } from 'restful-react';

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });

    const movies = { data };

    console.log('movies: ', movies.data);
    console.log('@movies', movies);

    return (
        <div>
            <h1>{movies.data[0].title}</h1>
        </div>
    );
};

export default App;
