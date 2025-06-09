import React from 'react';
import { Head } from '@inertiajs/react';
import PersistentLayout from '../Layouts/PersistentLayout';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page!</h1>
      <p>This is an Inertia-powered React component.</p>
    </>
  );
}

Home.layout = PersistentLayout;
