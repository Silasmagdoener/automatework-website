import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <section className="py-24 px-4">
      <motion.div 
        className="max-w-3xl mx-auto prose prose-invert"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* English Version */}
        <h1>Privacy Policy</h1>

        <div className="mb-16">
          <h2>1. Introduction</h2>
          <p>
            I value your privacy and am committed to protecting your personal data. 
            This Privacy Policy outlines how I collect, use, and safeguard your information 
            when you use my website and services.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Silas Schüttel<br />
            Michaelstr. 11<br />
            76846 Hauenstein<br />
            Email: silas@automatework.de
          </p>

          <h2>3. Data Collection</h2>
          <p>I collect the following personal data through my contact form:</p>
          
          <h3>Mandatory Information:</h3>
          <ul>
            <li>First Name</li>
            <li>Company Name</li>
            <li>Email Address</li>
            <li>Details about the tasks you wish to automate</li>
          </ul>

          <h3>Optional Information:</h3>
          <ul>
            <li>Phone Number</li>
            <li>How you found me</li>
          </ul>

          <h2>4. Purpose of Data Processing</h2>
          <p>Your personal data is collected and processed for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide the requested services.</li>
            <li>To communicate with you regarding updates on automation trends, if you have given explicit consent.</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <p>The processing of your personal data is based on:</p>
          <ul>
            <li>Article 6(1)(a) GDPR: Your consent, which you provide by agreeing to the data processing terms in the contact form.</li>
            <li>Article 6(1)(b) GDPR: The necessity to process data for the performance of a contract or to take steps at your request prior to entering into a contract.</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            I retain your personal data only as long as necessary to fulfill the purposes 
            for which it was collected or as required by law. If you withdraw your consent 
            or request deletion, your data will be promptly removed, provided there are no 
            legal obligations to retain it.
          </p>

          <h2>7. Data Sharing</h2>
          <p>
            Your personal data will not be shared with third parties without your explicit 
            consent, unless required by law.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>Access: Request information about the data I hold about you.</li>
            <li>Rectification: Request correction of inaccurate or incomplete data.</li>
            <li>Erasure: Request deletion of your data under certain conditions.</li>
            <li>Restriction: Request restriction of processing under certain conditions.</li>
            <li>Data Portability: Receive your data in a structured, commonly used format.</li>
            <li>Objection: Object to the processing of your data under certain conditions.</li>
            <li>Withdrawal of Consent: Withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
          </ul>
          <p>To exercise these rights, please contact me at silas@automatework.de.</p>

          <h2>9. Data Security</h2>
          <p>
            I implement appropriate technical and organizational measures to protect your 
            personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will be posted 
            on this page with an updated revision date.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or my data 
            processing practices, please contact me at:
          </p>
          <p>
            Silas Schüttel<br />
            Michaelstr. 11<br />
            76846 Hauenstein<br />
            Email: silas@automatework.de
          </p>

          <p className="text-sm text-gray-400">Last updated: November 28, 2024</p>
        </div>

        <hr className="my-12 border-gray-700" />

        {/* German Version */}
        <h1>Datenschutzerklärung</h1>

        <div>
          <h2>1. Einführung</h2>
          <p>
            Ich lege großen Wert auf den Schutz Ihrer personenbezogenen Daten und verpflichte 
            mich, diese zu schützen. Diese Datenschutzerklärung erläutert, wie ich Ihre Daten 
            erhebe, verwende und schütze, wenn Sie meine Website und Dienstleistungen nutzen.
          </p>

          <h2>2. Verantwortlicher</h2>
          <p>
            Silas Schüttel<br />
            Michaelstr. 11<br />
            76846 Hauenstein<br />
            E-Mail: silas@automatework.de
          </p>

          <h2>3. Datenerhebung</h2>
          <p>Über mein Kontaktformular erhebe ich folgende personenbezogene Daten:</p>

          <h3>Pflichtangaben:</h3>
          <ul>
            <li>Vorname</li>
            <li>Firmenname</li>
            <li>E-Mail-Adresse</li>
            <li>Details zu den Aufgaben, die Sie automatisieren möchten</li>
          </ul>

          <h3>Optionale Angaben:</h3>
          <ul>
            <li>Telefonnummer</li>
            <li>Wie Sie auf mich aufmerksam geworden sind</li>
          </ul>

          <h2>4. Zweck der Datenverarbeitung</h2>
          <p>Ihre personenbezogenen Daten werden zu folgenden Zwecken erhoben und verarbeitet:</p>
          <ul>
            <li>Beantwortung Ihrer Anfragen und Bereitstellung der gewünschten Dienstleistungen.</li>
            <li>Kommunikation mit Ihnen über Updates zu Automatisierungstrends, sofern Sie ausdrücklich zugestimmt haben.</li>
          </ul>

          <h2>5. Rechtsgrundlage für die Verarbeitung</h2>
          <p>Die Verarbeitung Ihrer personenbezogenen Daten basiert auf:</p>
          <ul>
            <li>Artikel 6 Absatz 1 Buchstabe a DSGVO: Ihrer Einwilligung, die Sie durch Zustimmung zu den Datenverarbeitungsbedingungen im Kontaktformular erteilen.</li>
            <li>Artikel 6 Absatz 1 Buchstabe b DSGVO: Der Notwendigkeit der Datenverarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin.</li>
          </ul>

          <h2>6. Speicherdauer</h2>
          <p>
            Ich speichere Ihre personenbezogenen Daten nur so lange, wie es zur Erfüllung der 
            Zwecke, für die sie erhoben wurden, erforderlich ist oder gesetzlich vorgeschrieben 
            wird. Wenn Sie Ihre Einwilligung widerrufen oder die Löschung Ihrer Daten verlangen, 
            werden diese umgehend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>

          <h2>7. Datenweitergabe</h2>
          <p>
            Ihre personenbezogenen Daten werden nicht ohne Ihre ausdrückliche Zustimmung an 
            Dritte weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben.
          </p>

          <h2>8. Ihre Rechte</h2>
          <p>Sie haben in Bezug auf Ihre personenbezogenen Daten folgende Rechte:</p>
          <ul>
            <li>Auskunft: Sie können Informationen über die von mir gespeicherten Daten anfordern.</li>
            <li>Berichtigung: Sie können die Korrektur unrichtiger oder unvollständiger Daten verlangen.</li>
            <li>Löschung: Sie können unter bestimmten Voraussetzungen die Löschung Ihrer Daten verlangen.</li>
            <li>Einschränkung der Verarbeitung: Sie können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
            <li>Datenübertragbarkeit: Sie können Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten.</li>
            <li>Widerspruch: Sie können unter bestimmten Voraussetzungen der Verarbeitung Ihrer Daten widersprechen.</li>
            <li>Widerruf der Einwilligung: Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.</li>
          </ul>
          <p>Zur Ausübung dieser Rechte kontaktieren Sie mich bitte unter silas@automatework.de.</p>

          <h2>9. Datensicherheit</h2>
          <p>
            Ich treffe geeignete technische und organisatorische Maßnahmen, um Ihre 
            personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung 
            oder Zerstörung zu schützen.
          </p>

          <h2>10. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung gelegentlich zu aktualisieren. 
            Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum 
            veröffentlicht.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Wenn Sie Fragen oder Bedenken bezüglich dieser Datenschutzerklärung oder 
            meiner Datenverarbeitungspraktiken haben, kontaktieren Sie mich bitte unter:
          </p>
          <p>
            Silas Schüttel<br />
            Michaelstr. 11<br />
            76846 Hauenstein<br />
            E-Mail: silas@automatework.de
          </p>

          <p className="text-sm text-gray-400 mt-8">
            Letzte Aktualisierung: 28. November 2024
          </p>

          <p className="text-sm text-gray-400 mt-4">
            Hinweis: Diese Datenschutzerklärung ist in Deutsch und Englisch verfügbar. 
            Im Falle von rechtlichen Angelegenheiten hat die deutsche Version Vorrang.
          </p>
        </div>
      </motion.div>
    </section>
  );
}