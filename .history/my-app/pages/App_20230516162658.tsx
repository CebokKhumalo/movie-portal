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

    console.log('movies: ', movies.data.resu);
    console.log('@movies', movies);

    return (
        <div>
            <h1>{movies.data.result[0].title}</h1>
        </div>
    );
};

export default App;
