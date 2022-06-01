import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jarvis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;
