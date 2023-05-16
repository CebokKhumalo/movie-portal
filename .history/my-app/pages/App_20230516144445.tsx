import React from 'react';
import { useGet } from 'restful-react';

const MyComponent = () => {
    const { data: randomDogImage } = useGet({
        // Inferred from RestfulProvider in index.js
        path: 'breeds/image/random',
    });

    return (
        <img
            alt="Here's a good boye!"
            src={randomDogImage && randomDogImage.message}
        />
    );
};

export default MyComponent;
