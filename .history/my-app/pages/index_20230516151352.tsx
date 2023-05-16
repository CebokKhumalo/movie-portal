import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';

const IndexPage = () => (
  return(
<Layout title="Home | Next.js + TypeScript Example">
        <RestfulProvider base="https://dog.ceo/api">
            <App />
        </RestfulProvider>
    </Layout>
  )

    
);

export default IndexPage;
