import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const SlipAndFall: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Slip and Fall Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Expert legal representation for premises liability injuries
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
                Experienced Slip and Fall Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Slip and fall accidents are more serious than many people
                realize. What might seem like a minor incident can result in
                broken bones, head injuries, spinal cord damage, and other
                severe injuries that require extensive medical treatment and can
                impact your ability to work and enjoy life.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles slip and fall lawyers
                understand that property owners have a legal duty to maintain
                safe conditions for visitors. When they fail in this duty and
                someone gets hurt, we hold them accountable and fight for the
                compensation our clients deserve.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Causes of Slip and Fall Accidents
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Wet or Slippery Floors
                  </h3>
                  <p className="text-gray-600">
                    Spills, recently mopped floors, or tracked-in water without
                    proper warning signs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Uneven Surfaces
                  </h3>
                  <p className="text-gray-600">
                    Cracked sidewalks, potholes, loose floorboards, or uneven
                    transitions between surfaces.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Poor Lighting
                  </h3>
                  <p className="text-gray-600">
                    Inadequate lighting in stairwells, parking lots, or walkways
                    that obscure hazards.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Defective Stairs
                  </h3>
                  <p className="text-gray-600">
                    Broken handrails, loose steps, uneven risers, or inadequate
                    non-slip surfaces.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Where Slip and Fall Accidents Occur
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Retail Stores and Shopping Centers
                  </h3>
                  <p className="text-gray-600">
                    Grocery stores, department stores, and malls where spills
                    and crowded conditions create hazards.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Restaurants and Hotels
                  </h3>
                  <p className="text-gray-600">
                    Kitchens, bathrooms, lobbies, and dining areas where water
                    and food spills are common.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Office Buildings and Workplaces
                  </h3>
                  <p className="text-gray-600">
                    Lobbies, stairwells, parking garages, and common areas in
                    commercial buildings.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Apartment Complexes and Condos
                  </h3>
                  <p className="text-gray-600">
                    Common areas, pool decks, laundry rooms, and parking areas
                    in residential properties.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Proving Your Slip and Fall Case
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                To win a slip and fall case in California, we must prove that
                the property owner was negligent in maintaining safe conditions.
                This requires establishing several key elements:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Duty of Care
                    </h3>
                    <p className="text-gray-600">
                      The property owner owed you a duty to maintain reasonably
                      safe conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Breach of Duty
                    </h3>
                    <p className="text-gray-600">
                      The owner failed to maintain safe conditions or warn of
                      known hazards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Causation
                    </h3>
                    <p className="text-gray-600">
                      The dangerous condition directly caused your fall and
                      injuries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Damages
                    </h3>
                    <p className="text-gray-600">
                      You suffered actual injuries and damages as a result of
                      the fall.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Slip and Fall Injuries
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Broken bones and fractures
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Head and brain injuries
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Spinal cord injuries
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Hip fractures
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Knee and ankle injuries
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Shoulder dislocations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Back and neck injuries
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Cuts and lacerations
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $875,000 Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a client who suffered a
                  hip fracture after slipping on a wet floor in a grocery store
                  that lacked proper warning signs.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $520,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for an elderly client who fell on uneven pavement
                  outside a shopping center, resulting in a broken wrist and
                  ongoing complications.
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
                Don't let property owners escape responsibility for unsafe
                conditions. Get expert legal advice.
              </p>
              <Link
                to="/contact"
                className="block bg-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-purple-600 text-purple-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
              >
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Important Steps After a Fall
              </h3>
              <ol className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    1
                  </span>
                  Seek medical attention immediately
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    2
                  </span>
                  Report the incident to management
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    3
                  </span>
                  Document the scene and hazard
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    4
                  </span>
                  Get witness contact information
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    5
                  </span>
                  Contact an experienced attorney
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Property Owners Must Be Held Accountable
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let a property owner's negligence leave you with medical bills
            and lost income. We know how to prove these cases and get the
            compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
