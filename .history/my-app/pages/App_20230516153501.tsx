import React from 'react';
import { useGet } from 'restful-react';

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });

    return <div></div>;
};

export default App;
