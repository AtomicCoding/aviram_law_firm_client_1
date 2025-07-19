import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const MotorcycleAccident: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-orange-900 to-red-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Motorcycle Accident Representation
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
                Riders often face bias and severe injuries. We fight to ensure
                their rights are protected and compensation is maximized.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Aviram Law
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We understand the physics and bias involved in motorcycle
                crashes and are skilled in demonstrating liability to insurers
                and juries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What You May Be Entitled To
              </h2>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Emergency care
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Surgery/rehabilitation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Bike replacement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Loss of income
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Emotional distress
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What to Do After a Crash
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">Seek immediate care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Get witness statements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Save helmet and gear
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">
                      Don't speak with adjusters alone
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Motorcycle Accident Injuries
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Traumatic Brain Injuries
                  </h3>
                  <p className="text-gray-600">
                    Even with helmets, head injuries are common and can have
                    lifelong consequences.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Spinal Cord Injuries
                  </h3>
                  <p className="text-gray-600">
                    Can result in partial or complete paralysis requiring
                    extensive medical care.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Road Rash and Burns
                  </h3>
                  <p className="text-gray-600">
                    Severe skin damage requiring multiple surgeries and skin
                    grafts.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Broken Bones
                  </h3>
                  <p className="text-gray-600">
                    Multiple fractures, particularly to arms, legs, and ribs.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.8 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Obtained substantial compensation for a motorcyclist who
                  suffered multiple fractures and internal injuries when a
                  driver made an illegal left turn at a busy Los Angeles
                  intersection.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $950,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client who sustained severe road rash and
                  orthopedic injuries in a lane-splitting accident, overcoming
                  the defense's attempts to blame the motorcyclist.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Free Case Review
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with an experienced motorcycle accident attorney. No fees
                unless we win your case.
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
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                California Motorcycle Laws
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Helmet required for all riders
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Lane splitting is legal when done safely
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Motorcycles have same road rights as cars
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                  Two-year statute of limitations for personal injury claims
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
            Protect Your Rights After a Motorcycle Accident
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let insurance companies take advantage of you. Get an
            experienced motorcycle accident lawyer who will fight for your
            rights and the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
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
