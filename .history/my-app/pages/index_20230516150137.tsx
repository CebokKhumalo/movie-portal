import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <RestfulProvider base="https://localhost:44311/api/services/app/"></RestfulProvider>
    </Layout>
);

export default IndexPage;
