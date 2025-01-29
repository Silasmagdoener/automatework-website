import React from 'react';
import { motion } from 'framer-motion';

export default function Imprint() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-3xl mx-auto prose prose-invert"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* English Version */}
        <h1>Legal Notice (Impressum)</h1>

        <div className="mb-16">
          <h2>Information pursuant to § 5 TMG:</h2>
          <p>
            Silas Schüttel
            <br />
            Michaelstr. 11
            <br />
            76846 Hauenstein
            <br />
            Germany
          </p>

          <h2>Contact:</h2>
          <p>Email: silas@automatework.de</p>

          <h2>VAT Identification Number:</h2>
          <p>DE340355252</p>

          <h2>Disclaimer:</h2>
          <p>
            Despite careful content control, I assume no liability for the
            content of external links. The operators of the linked pages are
            solely responsible for their content.
          </p>

          <h2>Online Dispute Resolution:</h2>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . I am neither willing nor obliged to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>

          <p className="text-sm text-gray-400">
            Note: This legal notice is provided in English for informational
            purposes. In case of legal matters, the German version shall
            prevail.
          </p>
        </div>

        <hr className="my-12 border-gray-700" />

        {/* German Version */}
        <h1>Impressum</h1>

        <div>
          <h2>Angaben gemäß § 5 TMG:</h2>
          <p>
            Silas Schüttel
            <br />
            Michaelstr. 11
            <br />
            76846 Hauenstein
            <br />
            Deutschland
          </p>

          <h2>Kontakt:</h2>
          <p>E-Mail: silas@automatework.de</p>

          <h2>Umsatzsteuer-Identifikationsnummer:</h2>
          <p>DE340355252</p>

          <h2>Haftungsausschluss:</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>

          <h2>Online-Streitbeilegung:</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Ich bin weder bereit noch verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p className="text-sm text-gray-400 mt-8">
            Hinweis: Dieses Impressum ist in Deutsch und Englisch verfasst. Im
            Falle rechtlicher Angelegenheiten hat die deutsche Version Vorrang.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
