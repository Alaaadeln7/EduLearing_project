import { motion as Motion } from "framer-motion";

export default function Policy() {
  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Privacy Policy
      </h1>

      <div className="prose prose-lg text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide directly when you register for an
            account, including your name, email address, and other contact
            details.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account registration details</li>
            <li>Course progress and completion data</li>
            <li>
              Payment information (processed securely by our payment provider)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Your information helps us provide and improve our services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your learning experience</li>
            <li>To process transactions securely</li>
            <li>To communicate with you about your account</li>
            <li>To improve our platform and develop new features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data, including encryption and secure servers. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. We'll notify you of
            significant changes by email or through our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            For questions about this policy, please contact us at:
            <br />
            <a
              href="mailto:privacy@elearning.com"
              className="text-orange-500 hover:underline"
            >
              privacy@elearning.com
            </a>
          </p>
        </section>
      </div>
    </Motion.main>
  );
}
