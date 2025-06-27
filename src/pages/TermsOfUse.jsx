// src/pages/TermsOfUse.jsx
import { motion as Motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <Motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:py-12"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
          Terms of Use
        </h1>
        <p className="text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the E-Learning platform, you agree to be bound
            by these Terms of Use. If you do not agree, you may not use our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate registration information</li>
            <li>Maintain the confidentiality of your account</li>
            <li>Not share your login credentials with others</li>
            <li>Use the platform only for lawful purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Intellectual Property
          </h2>
          <p>
            All course materials, content, and trademarks are the property of
            E-Learning or its licensors. You may not reproduce, distribute, or
            create derivative works without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Payment Terms
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All fees are non-refundable unless otherwise stated</li>
            <li>We reserve the right to change pricing with 30 days notice</li>
            <li>
              You are responsible for any taxes associated with your purchases
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Termination
          </h2>
          <p>
            We may suspend or terminate your account if you violate these terms.
            You may terminate your account at any time by contacting support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            E-Learning shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Governing Law
          </h2>
          <p>
            These terms shall be governed by the laws of [Your Country/State]
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Contact Information
          </h2>
          <p>
            For questions about these terms, contact us at:
            <br />
            <a
              href="mailto:legal@elearning.com"
              className="text-orange-500 hover:underline"
            >
              legal@elearning.com
            </a>
          </p>
        </section>
      </div>
    </Motion.main>
  );
};

export default TermsOfUse;
