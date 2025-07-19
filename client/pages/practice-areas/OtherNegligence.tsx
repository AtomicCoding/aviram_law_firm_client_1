import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const OtherNegligence: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles General Negligence Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive legal representation for all types of personal injury
            cases
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
                Experienced Personal Injury Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Personal injury law covers a wide range of situations where
                someone is hurt due to another person's or entity's negligence.
                At Aviram Law, APLC, we handle all types of personal injury
                cases, from common accidents to unique situations that require
                specialized legal expertise.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our Los Angeles personal injury lawyers have the experience and
                resources to handle complex negligence cases across all areas of
                personal injury law. We understand that every case is unique,
                and we provide personalized attention to ensure our clients
                receive the compensation they deserve.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Additional Areas of Practice
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Pedestrian Accidents
                  </h3>
                  <p className="text-gray-600">
                    Representing pedestrians injured by negligent drivers,
                    unsafe crosswalks, or dangerous road conditions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Bicycle Accidents
                  </h3>
                  <p className="text-gray-600">
                    Fighting for cyclists injured by cars, poor road
                    maintenance, or defective bicycle equipment.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Rideshare Accidents
                  </h3>
                  <p className="text-gray-600">
                    Complex cases involving Uber, Lyft, and other rideshare
                    companies with multiple insurance policies.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Public Transportation
                  </h3>
                  <p className="text-gray-600">
                    Accidents involving trains, subways, and other public
                    transit systems with government liability issues.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Nursing Home Negligence
                  </h3>
                  <p className="text-gray-600">
                    Protecting elderly residents from abuse, neglect, and
                    substandard care in nursing facilities.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Swimming Pool Accidents
                  </h3>
                  <p className="text-gray-600">
                    Drowning incidents, slip and falls, and other injuries at
                    pools due to inadequate safety measures.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Four Elements of Negligence
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                To succeed in a negligence case, we must prove four essential
                elements. Our experienced attorneys know how to gather evidence
                and build strong cases that establish each element.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Duty of Care
                    </h3>
                    <p className="text-gray-600">
                      The defendant owed you a legal duty to act with reasonable
                      care under the circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Breach of Duty
                    </h3>
                    <p className="text-gray-600">
                      The defendant failed to meet the standard of care that a
                      reasonable person would have exercised.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Causation
                    </h3>
                    <p className="text-gray-600">
                      The defendant's breach of duty was both the actual and
                      proximate cause of your injuries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Damages
                    </h3>
                    <p className="text-gray-600">
                      You suffered actual harm, whether physical, emotional, or
                      financial, as a result of the defendant's negligence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Damages We Recover
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Economic Damages
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Medical expenses (past and future)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Lost wages and income
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Reduced earning capacity
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Property damage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Rehabilitation costs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Home modifications
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Non-Economic Damages
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Pain and suffering
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Emotional distress
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Loss of enjoyment of life
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Loss of consortium
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Disfigurement and scarring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                      Mental anguish
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Aviram Law, APLC?
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    Millions of dollars recovered for clients across all types
                    of personal injury cases.
                  </p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    No Fees Unless We Win
                  </h3>
                  <p className="text-gray-600">
                    We work on a contingency fee basis, so you pay nothing
                    unless we secure compensation for you.
                  </p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Personalized Attention
                  </h3>
                  <p className="text-gray-600">
                    Every client receives individual attention and direct access
                    to their attorney.
                  </p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Comprehensive Resources
                  </h3>
                  <p className="text-gray-600">
                    We work with top medical experts, accident
                    reconstructionists, and other professionals.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.2 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a pedestrian struck by a
                  commercial vehicle while crossing in a marked crosswalk,
                  resulting in multiple fractures and ongoing pain.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $750,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client injured in a bicycle accident caused
                  by a city's failure to properly maintain bike lane markings
                  and signage.
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
                Discuss your case with an experienced personal injury attorney.
                No fees unless we win.
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
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Statute of Limitations
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Two-Year Deadline
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Most personal injury claims in California must be filed
                    within two years of the injury.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Government Claims
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Claims against government entities have much shorter
                    deadlines, often just six months.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Act Quickly</h4>
                  <p className="text-gray-600 text-sm">
                    Evidence can disappear and witnesses' memories fade. Contact
                    us immediately.
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
            When Negligence Causes Injury, We Fight for Justice
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Every personal injury case is unique, but our commitment remains the
            same: holding negligent parties accountable and securing maximum
            compensation for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-700 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Case Review
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
