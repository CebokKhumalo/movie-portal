import React from 'react';
import { RestfulProvider } from 'restful-react';

import App from './App.jsx';

const MyRestfulApp = () => (
    <RestfulProvider base="https://dog.ceo/api">
        <App />
    </RestfulProvider>
);

export default MyRestfulApp;
