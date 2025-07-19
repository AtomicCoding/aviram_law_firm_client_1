import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const TruckAccident: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-red-900 to-red-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Truck Accident Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Specialized legal representation for commercial truck accident
            victims
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
                Expert Truck Accident Attorneys in Los Angeles
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Truck accidents are among the most devastating motor vehicle
                accidents, often resulting in catastrophic injuries or
                fatalities. The sheer size and weight of commercial trucks means
                that collisions with passenger vehicles can have life-changing
                consequences for victims and their families.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles truck accident lawyers
                understand the complexities involved in these cases. From
                federal trucking regulations to multiple liable parties, truck
                accident cases require specialized knowledge and extensive
                resources to pursue successfully.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Truck Accidents We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Jackknife Accidents
                  </h3>
                  <p className="text-gray-600">
                    When the trailer swings out from behind the cab, creating a
                    dangerous V-shape.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Rollover Accidents
                  </h3>
                  <p className="text-gray-600">
                    Large trucks rolling onto their sides or tops, often
                    involving multiple vehicles.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Underride Accidents
                  </h3>
                  <p className="text-gray-600">
                    Cars sliding under trucks, often resulting in severe head
                    and neck injuries.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Wide Turn Accidents
                  </h3>
                  <p className="text-gray-600">
                    Trucks making wide turns that crush or squeeze smaller
                    vehicles.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Multiple Parties May Be Liable
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Unlike car accidents, truck accidents often involve multiple
                responsible parties, which can complicate the legal process but
                also provide additional sources of compensation.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Truck Driver
                  </h3>
                  <p className="text-gray-600">
                    Driver negligence, fatigue, distraction, or impairment.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Trucking Company
                  </h3>
                  <p className="text-gray-600">
                    Inadequate training, pressure to violate safety regulations,
                    or poor maintenance.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Cargo Loading Company
                  </h3>
                  <p className="text-gray-600">
                    Improper loading, overloading, or unsecured cargo.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Maintenance Companies
                  </h3>
                  <p className="text-gray-600">
                    Failure to properly maintain brakes, tires, or other
                    critical systems.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Federal Trucking Regulations
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Commercial trucks are subject to strict federal regulations
                designed to keep our roads safe. When these regulations are
                violated, it can provide crucial evidence in your case.
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Key Regulations Include:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Hours of service limitations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Mandatory rest periods
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Electronic logging device requirements
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Regular vehicle inspections
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Driver qualification standards
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $3.2 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured a significant settlement for a family whose loved one
                  was killed in a truck accident caused by a fatigued driver who
                  had violated federal hours-of-service regulations.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $1.9 Million Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client who suffered spinal cord injuries in
                  a jackknife accident, proving that inadequate maintenance was
                  the primary cause.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Free Case Evaluation
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert legal advice about your truck accident case. No fees
                unless we win.
              </p>
              <Link
                to="/contact"
                className="block bg-red-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-red-600 text-red-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
              >
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Act Quickly
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Truck accident evidence can disappear quickly. Electronic logs,
                GPS data, and maintenance records may be destroyed if not
                preserved immediately.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Preserve electronic evidence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Interview witnesses
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Document the scene
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Secure maintenance records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Time Is Critical in Truck Accident Cases
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Trucking companies and their insurers have teams of lawyers working
            immediately to minimize their liability. You need experienced
            representation fighting for your rights from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
