import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page!</h1>
      <p>This is an Inertia-powered React component.</p>
    </>
  );
}

Home.layout = page => <Layout children={page} title="Home" />; // Use PersistentLayout if you want the persistent layout

export default Home;
