import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const TraumaticBrainInjury: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-teal-900 to-teal-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Traumatic Brain Injury Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Specialized legal representation for brain injury victims and their
            families
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
                Expert Traumatic Brain Injury Attorneys
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Traumatic brain injuries (TBI) are among the most serious and
                life-altering injuries a person can suffer. These invisible
                injuries can dramatically change a person's cognitive abilities,
                personality, and quality of life, affecting not just the victim
                but their entire family.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles traumatic brain injury
                lawyers understand the complex nature of TBI cases and the
                devastating impact these injuries have on victims and their
                families. We work with leading neurologists, neuropsychologists,
                and life care planners to build strong cases that secure the
                substantial compensation TBI victims need for a lifetime of
                care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Understanding Traumatic Brain Injuries
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                A traumatic brain injury occurs when an external force causes
                the brain to move inside the skull, damaging brain tissue. TBIs
                can range from mild concussions to severe injuries that result
                in permanent disability or death.
              </p>
              <div className="space-y-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Mild TBI (Concussion)
                  </h3>
                  <p className="text-gray-600">
                    Brief loss of consciousness or confusion. Symptoms may
                    include headaches, dizziness, memory problems, and mood
                    changes. Effects can last weeks to months.
                  </p>
                </div>
                <div className="bg-teal-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Moderate TBI
                  </h3>
                  <p className="text-gray-600">
                    Loss of consciousness for minutes to hours. More pronounced
                    cognitive, physical, and behavioral symptoms that can last
                    months to years.
                  </p>
                </div>
                <div className="bg-teal-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Severe TBI
                  </h3>
                  <p className="text-gray-600">
                    Extended unconsciousness or coma. Often results in permanent
                    disability, requiring lifelong care and rehabilitation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Causes of Traumatic Brain Injuries
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Motor Vehicle Accidents
                  </h3>
                  <p className="text-gray-600">
                    Car, truck, motorcycle, and pedestrian accidents are leading
                    causes of TBI.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Falls
                  </h3>
                  <p className="text-gray-600">
                    Slip and fall accidents, particularly dangerous for elderly
                    individuals and children.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Sports Injuries
                  </h3>
                  <p className="text-gray-600">
                    Football, boxing, hockey, and other contact sports can cause
                    both acute and cumulative brain injuries.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Workplace Accidents
                  </h3>
                  <p className="text-gray-600">
                    Construction site accidents, falling objects, and industrial
                    accidents.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Symptoms and Effects of TBI
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Brain injury symptoms can be immediate or may not appear for
                days or weeks after the injury. The effects can be temporary or
                permanent and may worsen over time.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Cognitive Effects
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Memory problems</li>
                    <li>• Difficulty concentrating</li>
                    <li>• Confusion</li>
                    <li>• Slowed thinking</li>
                    <li>• Trouble making decisions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Physical Effects
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Headaches</li>
                    <li>• Dizziness</li>
                    <li>• Nausea and vomiting</li>
                    <li>• Vision problems</li>
                    <li>• Sleep disturbances</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Emotional/Behavioral
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Depression</li>
                    <li>• Anxiety</li>
                    <li>• Personality changes</li>
                    <li>• Irritability</li>
                    <li>• Loss of impulse control</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The True Cost of Traumatic Brain Injury
              </h2>
              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Lifetime Care Costs Can Exceed $10 Million
                </h3>
                <p className="text-gray-600 mb-4">
                  Severe TBI often requires lifelong medical care,
                  rehabilitation, and support services. Our attorneys work with
                  life care planners to calculate the full extent of future
                  needs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Medical Expenses
                  </h3>
                  <p className="text-gray-600">
                    Emergency treatment, surgery, rehabilitation, medications,
                    and ongoing care.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Lost Earning Capacity
                  </h3>
                  <p className="text-gray-600">
                    Many TBI victims cannot return to their previous level of
                    employment or work at all.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Caregiver Costs
                  </h3>
                  <p className="text-gray-600">
                    Professional care or family members who must provide
                    round-the-clock assistance.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Home and Vehicle Modifications
                  </h3>
                  <p className="text-gray-600">
                    Wheelchair accessibility, safety modifications, and adaptive
                    equipment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $8.5 Million Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a young construction
                  worker who suffered severe TBI from a falling object,
                  requiring lifelong care and supervision.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $4.2 Million Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for a client who sustained TBI in a truck
                  accident, covering extensive rehabilitation and future medical
                  needs.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                TBI Legal Help
              </h3>
              <p className="text-gray-600 mb-4">
                Brain injury cases require specialized medical and legal
                expertise. Get the experienced representation you need.
              </p>
              <Link
                to="/contact"
                className="block bg-teal-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-teal-600 text-teal-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Warning Signs of TBI
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Seek immediate medical attention if you experience:
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Loss of consciousness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Persistent headache
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Vomiting or nausea
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Confusion or disorientation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Memory problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                  Changes in speech
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            Brain Injuries Require Specialized Legal Expertise
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            The effects of TBI can last a lifetime. You need attorneys who
            understand the medical complexities and can fight for the
            comprehensive compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Free Case Evaluation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
