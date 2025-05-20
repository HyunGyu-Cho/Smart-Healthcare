// src/components/Layout.jsx
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-section">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
