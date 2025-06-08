import React from 'react';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page!</h1>
        <p>This is an Inertia-powered React component.</p>
      </div>
    </>
  );
}
