/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Form from "./components/Form";
import LegalModals from "./components/LegalModals";

export default function App() {
  const [activeModal, setActiveModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rek-gelb selection:text-gray-900">
      <Hero />
      <Form />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bürgerbrief Rhein-Erft-Kreis. Ein Projekt für mehr Bürgerbeteiligung.
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-sm font-medium">
            <button
              onClick={() => setActiveModal("impressum")}
              className="hover:text-rek-magenta transition-colors"
            >
              Impressum
            </button>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setActiveModal("datenschutz")}
              className="hover:text-rek-magenta transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </footer>

      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  );
}
