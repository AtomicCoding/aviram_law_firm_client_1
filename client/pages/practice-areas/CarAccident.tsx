import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const CarAccident: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Car Accident Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Expert legal representation for victims of car accidents in
            California
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
                Experienced Car Accident Attorneys in Los Angeles
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Car accidents can happen in an instant, but their effects can
                last a lifetime. At Aviram Law, APLC, we understand the
                physical, emotional, and financial toll that car accidents take
                on victims and their families. Our experienced Los Angeles car
                accident lawyers are dedicated to fighting for the compensation
                you deserve.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                With years of experience handling car accident cases throughout
                California, we have secured millions of dollars in settlements
                and verdicts for our clients. We know how to investigate
                accidents, gather evidence, negotiate with insurance companies,
                and when necessary, take cases to trial.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Types of Car Accidents We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Rear-End Collisions
                  </h3>
                  <p className="text-gray-600">
                    Often caused by distracted driving, following too closely,
                    or sudden stops.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Head-On Collisions
                  </h3>
                  <p className="text-gray-600">
                    Typically the most severe type of accident with devastating
                    consequences.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Side-Impact Crashes
                  </h3>
                  <p className="text-gray-600">
                    T-bone accidents often occurring at intersections.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Multi-Vehicle Accidents
                  </h3>
                  <p className="text-gray-600">
                    Complex cases involving multiple parties and insurance
                    companies.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Approach to Car Accident Cases
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Immediate Investigation
                    </h3>
                    <p className="text-gray-600">
                      We act quickly to preserve evidence, interview witnesses,
                      and document the accident scene.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Medical Documentation
                    </h3>
                    <p className="text-gray-600">
                      We work with medical professionals to fully document your
                      injuries and treatment needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Insurance Negotiations
                    </h3>
                    <p className="text-gray-600">
                      We handle all communications with insurance companies to
                      protect your interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Trial Preparation
                    </h3>
                    <p className="text-gray-600">
                      If necessary, we're prepared to take your case to trial
                      for maximum compensation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $2.1 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured a significant settlement for a client who suffered
                  severe back injuries in a multi-vehicle collision on the 405
                  freeway. The settlement covered ongoing medical treatment,
                  lost wages, and pain and suffering.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $850,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client who sustained traumatic brain injury
                  in a head-on collision caused by a drunk driver. The verdict
                  included compensation for lifetime care needs.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Free Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert legal advice about your car accident case. No fees
                unless we win.
              </p>
              <Link
                to="/contact"
                className="block bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                What You Can Recover
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Medical expenses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lost wages and income
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pain and suffering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Property damage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Future medical care
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Rehabilitation costs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Don't Wait - Contact Our Car Accident Lawyers Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Time is critical in car accident cases. Evidence can disappear,
            witnesses can forget details, and California's statute of
            limitations limits how long you have to file a claim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
