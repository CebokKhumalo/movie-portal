import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';

const RestfulProviderWrapper = () => (
    <RestfulProvider base="https://dog.ceo/api">
        <App />
    </RestfulProvider>
);

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <RestfulProviderWrapper />
    </Layout>
);

export default IndexPage;
