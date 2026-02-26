/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Form from "./components/Form";

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rek-gelb selection:text-gray-900">
      <Hero />
      <Form />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bürgerbrief Rhein-Erft-Kreis. Ein Projekt für mehr Bürgerbeteiligung.
          </p>
        </div>
      </footer>
    </main>
  );
}
