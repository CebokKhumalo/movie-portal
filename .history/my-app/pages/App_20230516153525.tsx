import React from 'react';
import { useGet } from 'restful-react';

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });

    const movies = {data}

    console.log("movies: " movies.data)
    console.log("@movies" data)

    return <div></div>;
};

export default App;
