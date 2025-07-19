import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const BusAccident: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-yellow-800 to-orange-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Bus Accident Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Legal representation for victims of city bus, school bus, and tour
            bus accidents
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
                Experienced Bus Accident Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Bus accidents can be particularly complex legal cases due to the
                various types of buses involved and the different liability
                issues that arise. Whether you were injured as a passenger on a
                city bus, hurt in a collision with a school bus, or involved in
                a tour bus accident, Aviram Law, APLC has the experience to
                handle your case.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our Los Angeles bus accident lawyers understand the unique
                challenges these cases present, from dealing with government
                entities to navigating complex insurance coverage issues. We
                have successfully represented clients in cases involving all
                types of bus accidents throughout California.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Bus Accidents We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    City Bus Accidents
                  </h3>
                  <p className="text-gray-600">
                    Metro buses, municipal transit systems, and public
                    transportation accidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    School Bus Accidents
                  </h3>
                  <p className="text-gray-600">
                    Accidents involving school district buses and private school
                    transportation.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Charter Bus Accidents
                  </h3>
                  <p className="text-gray-600">
                    Tour buses, charter services, and long-distance bus travel
                    accidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Shuttle Bus Accidents
                  </h3>
                  <p className="text-gray-600">
                    Airport shuttles, hotel shuttles, and corporate
                    transportation accidents.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Causes of Bus Accidents
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Driver Fatigue
                  </h3>
                  <p className="text-gray-600">
                    Long shifts and demanding schedules can lead to drowsy
                    driving incidents.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Mechanical Failures
                  </h3>
                  <p className="text-gray-600">
                    Brake failures, tire blowouts, and other mechanical issues
                    due to poor maintenance.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Weather Conditions
                  </h3>
                  <p className="text-gray-600">
                    Difficulty controlling large vehicles in rain, fog, or other
                    adverse weather.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Other Driver Negligence
                  </h3>
                  <p className="text-gray-600">
                    Cars cutting off buses, failing to yield, or other dangerous
                    behaviors around buses.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Special Considerations for Bus Accidents
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Government Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  When public buses are involved, special rules apply for filing
                  claims against government entities, including shorter
                  deadlines and specific notice requirements.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Shorter Filing Deadlines
                    </h3>
                    <p className="text-gray-600">
                      Claims against government entities often have much shorter
                      deadlines than standard personal injury cases.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Complex Insurance Coverage
                    </h3>
                    <p className="text-gray-600">
                      Multiple insurance policies may apply, including
                      commercial, municipal, and umbrella policies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Multiple Victims
                    </h3>
                    <p className="text-gray-600">
                      Bus accidents often involve multiple passengers, requiring
                      careful coordination of claims.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.4 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a passenger injured when
                  a city bus made an abrupt stop, resulting in serious back and
                  neck injuries.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $750,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a pedestrian struck by a school bus, proving
                  that the driver failed to follow proper safety protocols at a
                  crosswalk.
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
                Get expert legal advice about your bus accident case. No fees
                unless we win.
              </p>
              <Link
                to="/contact"
                className="block bg-yellow-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-yellow-600 text-yellow-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Passenger Rights
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                  Right to safe transportation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                  Right to proper vehicle maintenance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                  Right to qualified drivers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                  Right to compensation for injuries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Don't Delay - Bus Accident Claims Have Special Deadlines
          </h2>
          <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
            Government entities and transportation companies have strict notice
            requirements. Contact us immediately to protect your right to
            compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-yellow-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
