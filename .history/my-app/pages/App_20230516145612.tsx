import React from 'react';
import { useGet } from 'restful-react';

const MyComponent = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });

    const movies = {
        data,
    };

console.log("movies: " movies.data.result)
console.log("movies" movies.data)


    return <div></div>;
};

export default MyComponent;
