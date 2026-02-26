import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="ansprechpartner" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}alexander-rheindorf.jpg`}
                alt="Alexander Rheindorf"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rek-gelb rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-rek-magenta rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-rek-magenta uppercase mb-3">
              Ihr Ansprechpartner
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Alexander Rheindorf
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Als engagierter Kommunalpolitiker im Rhein-Erft-Kreis setze ich mich für Ihre Belange ein. Ob Infrastruktur, Bildung oder Umweltschutz – Ihre Themen sind mein Antrieb.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Büro Rhein-Erft-Kreis</h4>
                  <p className="mt-1 text-gray-600">Willy-Brandt-Platz 1<br />50126 Bergheim</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-50 text-rek-magenta">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">E-Mail</h4>
                  <p className="mt-1 text-gray-600">kontakt@alexander-rheindorf.de</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-600">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Telefon</h4>
                  <p className="mt-1 text-gray-600">+49 (0) 2271 83-0</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
