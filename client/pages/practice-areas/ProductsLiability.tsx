import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const ProductsLiability: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-indigo-900 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Product Liability Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Holding manufacturers accountable for dangerous and defective
            products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Expert Product Liability Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                When products that should be safe cause serious injuries,
                manufacturers, distributors, and retailers must be held
                accountable. Product liability law exists to protect consumers
                from dangerous products and ensure that companies prioritize
                safety in their design and manufacturing processes.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles product liability lawyers
                have extensive experience handling complex cases involving
                defective products. We work with engineers, safety experts, and
                industry professionals to prove that products were unreasonably
                dangerous and that manufacturers failed in their duty to protect
                consumers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Product Defects
              </h2>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Design Defects
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Flaws in the product's design that make it inherently unsafe
                    before it's even manufactured. The entire product line is
                    dangerous due to poor design choices.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Example: A car model with a high center of gravity that
                    makes it prone to rollover accidents.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Manufacturing Defects
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Errors that occur during the manufacturing process that make
                    individual products dangerous, even though the design may be
                    safe.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Example: A batch of contaminated food products or a car with
                    improperly installed brakes.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Failure to Warn (Marketing Defects)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Inadequate instructions, warnings, or labels that fail to
                    inform consumers of potential dangers or proper usage.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Example: Prescription drugs without adequate warnings about
                    serious side effects or dangerous interactions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Defective Products We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Automotive Products
                  </h3>
                  <p className="text-gray-600">
                    Defective airbags, faulty brakes, tire defects, and steering
                    problems that cause accidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Medical Devices
                  </h3>
                  <p className="text-gray-600">
                    Dangerous implants, faulty pacemakers, and defective
                    surgical instruments.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Consumer Electronics
                  </h3>
                  <p className="text-gray-600">
                    Overheating phones, exploding batteries, and electrical
                    devices that cause fires.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Pharmaceutical Products
                  </h3>
                  <p className="text-gray-600">
                    Dangerous drugs with undisclosed side effects or
                    contaminated medications.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Children's Products
                  </h3>
                  <p className="text-gray-600">
                    Unsafe toys, defective car seats, and dangerous playground
                    equipment.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Household Products
                  </h3>
                  <p className="text-gray-600">
                    Defective appliances, dangerous tools, and toxic cleaning
                    products.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Strict Liability in California
              </h2>
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  No Need to Prove Negligence
                </h3>
                <p className="text-gray-600 mb-4">
                  California follows the doctrine of strict liability for
                  defective products. This means you don't need to prove that
                  the manufacturer was negligent - only that the product was
                  defective and caused your injuries.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Product Was Defective
                    </h3>
                    <p className="text-gray-600">
                      The product had a design, manufacturing, or warning defect
                      that made it unreasonably dangerous.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Used as Intended
                    </h3>
                    <p className="text-gray-600">
                      The product was being used for its intended purpose or in
                      a reasonably foreseeable manner.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Substantially Unchanged
                    </h3>
                    <p className="text-gray-600">
                      The product hadn't been substantially altered from its
                      original condition when it left the manufacturer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Caused Injuries
                    </h3>
                    <p className="text-gray-600">
                      The defective product was a substantial factor in causing
                      your injuries and damages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Liable Parties in Product Liability Cases
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Manufacturers
                  </h3>
                  <p className="text-gray-600">
                    Companies that design and produce the defective product.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Distributors
                  </h3>
                  <p className="text-gray-600">
                    Companies in the chain of distribution who brought the
                    product to market.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Retailers
                  </h3>
                  <p className="text-gray-600">
                    Stores and sellers who put the defective product in the
                    hands of consumers.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Component Manufacturers
                  </h3>
                  <p className="text-gray-600">
                    Companies that made defective parts used in the final
                    product.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $2.3 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a client who suffered
                  severe burns from a defective lithium battery that exploded in
                  an electronic device, causing third-degree burns.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.6 Million Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a family whose child was injured by a
                  defective toy that posed a choking hazard despite meeting
                  industry standards.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Product Injury?
              </h3>
              <p className="text-gray-600 mb-4">
                Don't let manufacturers escape responsibility. Get expert legal
                representation for your product liability case.
              </p>
              <Link
                to="/contact"
                className="block bg-indigo-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-indigo-600 text-indigo-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Preserve Evidence
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                In product liability cases, preserving the defective product and
                related evidence is crucial.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                  Keep the defective product
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                  Save packaging and instructions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                  Document the scene
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                  Get medical attention
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                  Contact an attorney immediately
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Manufacturers Must Be Held Accountable for Dangerous Products
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            When companies put profits over safety, innocent people get hurt.
            Our experienced product liability lawyers have the resources and
            expertise to take on big corporations and win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Case Review
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
