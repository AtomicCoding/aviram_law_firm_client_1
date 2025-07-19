import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const BurnInjuries: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-orange-900 to-orange-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Burn Injury Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Experienced legal representation for severe burn injury victims
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
                Specialized Burn Injury Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Burn injuries are among the most painful and devastating
                injuries a person can suffer. They often require extensive
                medical treatment, multiple surgeries, and long-term
                rehabilitation. The physical pain is matched by the emotional
                trauma and financial burden that burn victims and their families
                face.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles burn injury lawyers
                understand the unique challenges that burn victims face. We have
                extensive experience handling complex burn injury cases and work
                with medical experts, economists, and life care planners to
                ensure our clients receive the maximum compensation they
                deserve.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types and Degrees of Burn Injuries
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    First-Degree Burns
                  </h3>
                  <p className="text-gray-600">
                    Affect only the outer layer of skin, causing redness and
                    pain. Usually heal within a week without scarring.
                  </p>
                </div>
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Second-Degree Burns
                  </h3>
                  <p className="text-gray-600">
                    Damage the outer and underlying layer of skin, causing
                    blisters, severe pain, and potential scarring.
                  </p>
                </div>
                <div className="bg-orange-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Third-Degree Burns
                  </h3>
                  <p className="text-gray-600">
                    Destroy all layers of skin and may damage underlying
                    tissues. Require immediate medical attention and often skin
                    grafts.
                  </p>
                </div>
                <div className="bg-red-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Fourth-Degree Burns
                  </h3>
                  <p className="text-gray-600">
                    The most severe burns, extending through skin and fat to
                    underlying muscle and bone. Often life-threatening.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Causes of Burn Injuries
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Workplace Accidents
                  </h3>
                  <p className="text-gray-600">
                    Chemical spills, electrical accidents, and industrial fires
                    in factories and construction sites.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Vehicle Accidents
                  </h3>
                  <p className="text-gray-600">
                    Car fires, explosions, and contact with hot surfaces
                    following traffic accidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Defective Products
                  </h3>
                  <p className="text-gray-600">
                    Faulty appliances, electronics, or other products that
                    overheat or malfunction.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Premises Liability
                  </h3>
                  <p className="text-gray-600">
                    Burns occurring on someone else's property due to unsafe
                    conditions or negligent maintenance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Long-Term Consequences of Burn Injuries
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Permanent Scarring and Disfigurement
                  </h3>
                  <p className="text-gray-600">
                    Severe burns often leave permanent scars that can
                    significantly impact a person's appearance and self-esteem.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Limited Mobility and Function
                  </h3>
                  <p className="text-gray-600">
                    Scar tissue can restrict movement and require ongoing
                    physical therapy and rehabilitation.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Psychological Trauma
                  </h3>
                  <p className="text-gray-600">
                    Depression, anxiety, and PTSD are common among burn
                    survivors, requiring ongoing mental health treatment.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Ongoing Medical Needs
                  </h3>
                  <p className="text-gray-600">
                    Multiple surgeries, skin grafts, and reconstructive
                    procedures may be needed throughout the victim's lifetime.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comprehensive Damage Recovery
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  We Fight for Full Compensation
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Emergency medical treatment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Surgery and skin grafts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Reconstructive surgery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Physical therapy
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Mental health counseling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Lost wages and earning capacity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Pain and suffering
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Disfigurement and scarring
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $3.5 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a construction worker who
                  suffered third-degree burns over 40% of his body in an
                  electrical accident due to inadequate safety protocols.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.8 Million Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client who suffered severe facial burns
                  from a defective appliance, covering extensive reconstructive
                  surgery and future medical needs.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Expert Legal Help
              </h3>
              <p className="text-gray-600 mb-4">
                Burn injury cases require specialized knowledge and resources.
                Get experienced legal representation.
              </p>
              <Link
                to="/contact"
                className="block bg-orange-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-orange-600 text-orange-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Why Choose Our Firm?
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Extensive burn injury experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Network of medical experts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Proven track record of success
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  No fees unless we win
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Compassionate representation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Get the Compensation You Deserve for Your Burn Injuries
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Burn injuries require specialized legal expertise and medical
            knowledge. Don't let insurance companies minimize your claim when
            your future depends on proper compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Case Review
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
