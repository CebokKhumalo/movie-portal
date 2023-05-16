import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">About</Link>
        </p>
        <RestfulProvide base="https://localhost:44311/api/services/app/">
            <App />
        </RestfulProvider>
    </Layout>
);

export default IndexPage;
