import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="py-20">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: January 3, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By installing and using MyCampaigner ("the Service"), you agree
                to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 leading-relaxed">
                MyCampaigner is a Shopify application that enables merchants to
                create automated discount campaigns using rule-based conditions
                and Shopify Functions. The Service allows you to configure,
                manage, and execute discount campaigns on your Shopify store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use the Service, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Have a valid Shopify store</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Subscription and Billing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>4.1 Plans:</strong> We offer multiple subscription plans
                with different features and limits. Current pricing is available
                on our Pricing page.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>4.2 Billing:</strong> Subscriptions are billed through
                Shopify's billing system. You authorize Shopify to charge your
                payment method for the subscription fees.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>4.3 Free Trial:</strong> We may offer a free trial
                period. After the trial, you will be charged unless you cancel
                before the trial ends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>4.4 Refunds:</strong> We offer a 30-day money-back
                guarantee. Refund requests must be submitted within 30 days of
                payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Acceptable Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Interfere with or disrupt the Service</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Service
                </li>
                <li>
                  Use the Service to harm, harass, or discriminate against
                  others
                </li>
                <li>Transmit viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Service and its original content, features, and
                functionality are owned by MyCampaigner and are protected by
                international copyright, trademark, and other intellectual
                property laws. You may not copy, modify, distribute, or create
                derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Data and Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy.
                By using the Service, you consent to the collection and use of
                information as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Disclaimers and Limitations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>8.1 No Warranty:</strong> The Service is provided "as
                is" without warranties of any kind, either express or implied.
                We do not guarantee that the Service will be error-free or
                uninterrupted.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>8.2 Limitation of Liability:</strong> To the maximum
                extent permitted by law, MyCampaigner shall not be liable for
                any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your access to the Service
                immediately, without prior notice, for any reason, including
                breach of these Terms. Upon termination, your right to use the
                Service will cease immediately. You may cancel your subscription
                at any time through the Shopify admin panel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page.
                Your continued use of the Service after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which MyCampaigner
                operates, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Shopify Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As a Shopify app, you must also comply with Shopify's Terms of
                Service and Acceptable Use Policy. In the event of a conflict
                between these Terms and Shopify's terms, Shopify's terms shall
                prevail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                Email:{" "}
                <a
                  href="mailto:legal@mycampaigner.com"
                  className="text-primary-600 hover:underline"
                >
                  legal@mycampaigner.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
