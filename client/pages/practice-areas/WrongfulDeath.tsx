import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const WrongfulDeath: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Wrongful Death Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Compassionate legal representation for families who have lost loved
            ones
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
                Compassionate Wrongful Death Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The loss of a loved one due to someone else's negligence is one
                of life's most devastating experiences. While no amount of money
                can bring back your loved one, pursuing a wrongful death claim
                can provide financial security for surviving family members and
                hold responsible parties accountable for their actions.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles wrongful death lawyers
                understand the profound grief and overwhelming challenges that
                families face during this difficult time. We handle these cases
                with the sensitivity and dedication they deserve while
                aggressively pursuing maximum compensation for our clients.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What Constitutes Wrongful Death?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Under California law, a wrongful death occurs when someone dies
                as a result of another party's negligent, reckless, or
                intentional conduct. Common causes include:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Motor Vehicle Accidents
                  </h3>
                  <p className="text-gray-600">
                    Car, truck, motorcycle, and other traffic accidents caused
                    by negligent drivers.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Medical Malpractice
                  </h3>
                  <p className="text-gray-600">
                    Misdiagnosis, surgical errors, medication mistakes, and
                    other medical negligence.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Workplace Accidents
                  </h3>
                  <p className="text-gray-600">
                    Construction accidents, industrial accidents, and unsafe
                    working conditions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Defective Products
                  </h3>
                  <p className="text-gray-600">
                    Dangerous products that cause fatal injuries due to design
                    or manufacturing defects.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Who Can File a Wrongful Death Claim?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                California law specifies who has the right to file a wrongful
                death lawsuit. These individuals are prioritized in the
                following order:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Surviving Spouse
                    </h3>
                    <p className="text-gray-600">
                      The deceased's husband or wife has the primary right to
                      file a wrongful death claim.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Children
                    </h3>
                    <p className="text-gray-600">
                      All children of the deceased, including adopted children,
                      can file claims.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Domestic Partners
                    </h3>
                    <p className="text-gray-600">
                      Registered domestic partners have the same rights as
                      spouses under California law.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Other Dependents
                    </h3>
                    <p className="text-gray-600">
                      Parents, siblings, or others who were financially
                      dependent on the deceased.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Damages in Wrongful Death Cases
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Economic Damages
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Lost future earnings and benefits
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Medical expenses before death
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Funeral and burial costs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Household services the deceased provided
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Non-Economic Damages
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Loss of love, companionship, and affection
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Loss of moral support and guidance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Loss of consortium for spouses
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    Mental anguish and emotional distress
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $2.8 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a family whose father was
                  killed in a construction accident due to inadequate safety
                  measures by the general contractor.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $2.1 Million Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for the family of a mother killed by a drunk
                  driver, ensuring financial security for her three young
                  children.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Compassionate Support
              </h3>
              <p className="text-gray-600 mb-4">
                We understand this is an incredibly difficult time. Our
                attorneys provide compassionate guidance throughout the legal
                process.
              </p>
              <Link
                to="/contact"
                className="block bg-gray-700 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-gray-700 text-gray-700 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Important Deadlines
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Two-Year Limit
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Wrongful death claims must be filed within two years of the
                    date of death.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Evidence Preservation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Critical evidence can be lost quickly. Early legal action is
                    essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Honor Your Loved One's Memory with Justice
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            While nothing can replace your loss, holding responsible parties
            accountable can provide closure and financial security for your
            family. We're here to help during this difficult time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-700 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-700 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
