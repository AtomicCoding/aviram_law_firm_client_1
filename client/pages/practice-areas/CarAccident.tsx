import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const CarAccident: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Car Accident Attorney in California
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <p className="text-gray-600 text-lg mb-8">
                Rear-end collisions, intersection accidents, hit & runs, and
                uninsured drivers. We understand California's comparative fault
                laws and fight for full compensation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Aviram Law
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our team has recovered millions in auto accident cases. We build
                strong claims backed by evidence, accident reconstructions, and
                legal expertise.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What You May Be Entitled To
              </h2>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Vehicle repair or replacement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Medical bills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Lost wages
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Pain and suffering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Long-term care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What to Do After an Accident
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Call 911 and get medical attention
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Photograph the scene and damage
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">Do not admit fault</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Contact Aviram Law immediately
                    </p>
                  </div>
                </div>
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
              <a
                href="tel:3103883488"
                className="block bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </a>
              <Link
                to="/contact"
                className="block border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Request a Free Case Evaluation
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact Aviram Law today for a free consultation. No fees unless we
            win your case.
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
