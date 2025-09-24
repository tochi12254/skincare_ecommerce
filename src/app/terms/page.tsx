import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Care & Terms | Skincare Shop",
  description:
    "Read our customer care terms, privacy & safety guidelines, wholesale inquiries, and accepted payment methods for a smooth skincare shopping experience.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 space-y-12 leading-7 text-gray-800">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-900">
          Customer Care & Terms
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Your skin is our priority. Please take a moment to review our terms
          and care policies.
        </p>
      </header>

      {/* Customer Care Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
        <div className="space-y-4 text-justify">
          <p>
            Welcome to our skincare family 💚. We care about your experience and
            want you to enjoy every moment of shopping with us. By using our
            site, you agree to the following customer care terms:
          </p>
          <p>
            <strong>Our Promise to You:</strong> We are committed to offering
            safe, high-quality skincare products that help you look and feel
            your best. Every product is described as accurately as possible, but
            if something doesn’t seem right, please let us know.
          </p>
          <p>
            <strong>Your Well-Being Comes First:</strong> Our products are for
            external use only. Since everyone’s skin is unique, results may
            vary. We recommend a patch test before use. For sensitive or
            problem-prone skin, consult your dermatologist.
          </p>
          <p>
            <strong>Shopping With Us:</strong> Orders are secure and payments
            are processed safely using trusted methods.
          </p>
          <p>
            <strong>Shipping & Delivery:</strong> We work hard to deliver your
            order quickly. Delivery times vary by location. Tracking details are
            provided once your package ships.
          </p>
          <p>
            <strong>Returns & Refunds:</strong> Unopened and unused items may be
            returned within our return period. Refunds are processed promptly
            after we receive your return.
          </p>
          <p>
            <strong>We’re Here for You:</strong> Our care team is ready to
            assist with product advice, order issues, or general inquiries. You
            can reach us via email, phone, or our contact form.
          </p>
          <p>
            <strong>Privacy & Security:</strong> Your trust matters to us. We
            safeguard your personal information in line with our Privacy Policy.
          </p>
          <p>
            <strong>Updates:</strong> We may update these terms occasionally.
            Please check back for the latest version.
          </p>
        </div>
      </section>

      {/* Privacy & Safety */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy & Safety</h2>
        <p className="text-justify">
          We value your privacy and are committed to protecting your data. Any
          information shared with us is securely stored and used solely for
          improving your shopping experience. We do not share your personal
          details with third parties without consent, except as required by law.
        </p>
      </section>

      {/* Wholesale Inquiries */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Wholesale Inquiries</h2>
        <p className="text-justify">
          Interested in carrying our skincare products? We welcome wholesale
          partnerships and collaborations. Please contact our sales team for
          pricing, bulk orders, and partnership opportunities.
        </p>
      </section>

      {/* Payment Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Credit / Debit Cards</li>
          <li>PayPal</li>
          <li>Offline Payments (Bank Transfer / Cash on Delivery where available)</li>
        </ul>
      </section>
    </main>
  );
}
