import React from 'react';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">About Us</h1>
                <p className="text-gray-700">
                    Welcome to our About Us page. Here you will find more information about our company.
                </p>
            </div>
        </>
    );
}
