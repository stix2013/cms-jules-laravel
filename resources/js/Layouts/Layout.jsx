import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Layout({ children }) {
  return (
    <div id="persistent-layout" className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-xl font-bold">My Inertia App</h1>
        </div>
      </header>

      <Navbar /> // Use the new component

      <main className="container mx-auto p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
