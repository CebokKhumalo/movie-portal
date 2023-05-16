import React from 'react';
import { useGet } from 'restful-react';

interface Movies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
}

interface People {
    userName: string;
    name: string;
    email: string;
    password: string;
    id: string;
}

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });
    const { userData } = useGet({
        path: 'Person/GetAll',
    });
    if (!data) {
        return <div>Loading...</div>;
    }
    if (!userData) {
        return <div>loading....</div>;
    }

    const movies = data.result;
    cons

    console.log('movies: ', movies);
    console.log('@movies', movies);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Starring</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.duration}</td>
                            <td>{movie.staring}</td>
                            <td>{movie.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table></table>
        </div>
    );
};

export default App;
