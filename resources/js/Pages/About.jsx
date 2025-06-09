import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

const About = () => {
    return (
        <>
            <Head title="About Us" />
            <h1 className="text-3xl font-bold mb-6 text-gray-700">About Us</h1>
            <p className="text-gray-700">
                Welcome to our About Us page. Here you will find more information about our company.
            </p>
        </>
    );
}

About.layout = page => <Layout children={page} title="About Us" />;  // Use PersistentLayout if you want the persistent layout

export default About;