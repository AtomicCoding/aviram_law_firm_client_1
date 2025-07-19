import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export const DogBite: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] mb-4">
            Los Angeles Dog Bite Lawyers
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Experienced legal representation for dog bite and animal attack
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
                California Dog Bite Law Experts
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Dog bite injuries can be devastating, both physically and
                emotionally. Children are particularly vulnerable to serious
                injuries from dog attacks, often suffering facial injuries,
                scarring, and psychological trauma that can last a lifetime.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                At Aviram Law, APLC, our Los Angeles dog bite lawyers understand
                the serious nature of these cases and the impact they have on
                victims and their families. California has strict liability laws
                that protect dog bite victims, and we use our extensive
                knowledge of these laws to secure maximum compensation for our
                clients.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                California's Strict Liability Dog Bite Law
              </h2>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  Civil Code Section 3342
                </h3>
                <p className="text-gray-600 mb-4">
                  California Civil Code Section 3342 makes dog owners strictly
                  liable for injuries caused by their dogs, regardless of
                  whether the dog has bitten anyone before or whether the owner
                  knew the dog was dangerous.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-green-600">
                  <p className="text-gray-700 font-medium">
                    "The owner of any dog is liable for the damages suffered by
                    any person who is bitten by the dog while in a public place
                    or lawfully in a private place..."
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Dog Bite Injuries
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Facial Injuries
                  </h3>
                  <p className="text-gray-600">
                    Children often suffer facial bites that can cause permanent
                    scarring and disfigurement.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Nerve Damage
                  </h3>
                  <p className="text-gray-600">
                    Deep bites can sever nerves, causing permanent loss of
                    sensation or function.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Infection
                  </h3>
                  <p className="text-gray-600">
                    Dog bites carry a high risk of infection, including rabies
                    and other serious diseases.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    Psychological Trauma
                  </h3>
                  <p className="text-gray-600">
                    Many victims develop lasting phobias and require ongoing
                    therapy.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Proving Your Dog Bite Case
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Document the Attack
                    </h3>
                    <p className="text-gray-600">
                      Photograph injuries, the scene, and the dog if possible.
                      Get witness contact information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Seek Medical Treatment
                    </h3>
                    <p className="text-gray-600">
                      Get immediate medical attention and follow all treatment
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Report the Incident
                    </h3>
                    <p className="text-gray-600">
                      Report the bite to local animal control and police
                      departments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">
                      Identify the Owner
                    </h3>
                    <p className="text-gray-600">
                      Obtain the dog owner's information and insurance details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Compensation for Dog Bite Victims
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Medical Expenses
                  </h3>
                  <p className="text-gray-600">
                    Emergency treatment, surgery, plastic surgery, and ongoing
                    medical care.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Lost Wages
                  </h3>
                  <p className="text-gray-600">
                    Time off work for treatment and recovery.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Pain and Suffering
                  </h3>
                  <p className="text-gray-600">
                    Physical pain, emotional distress, and psychological trauma.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Scarring and Disfigurement
                  </h3>
                  <p className="text-gray-600">
                    Permanent scarring, especially facial injuries in children.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Recent Success Stories
              </h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $650,000 Settlement
                </h3>
                <p className="text-gray-600 mb-4">
                  Secured substantial compensation for a 7-year-old child who
                  suffered facial scarring from a dog attack, covering plastic
                  surgery and future medical needs.
                </p>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  $425,000 Verdict
                </h3>
                <p className="text-gray-600">
                  Won at trial for an adult victim who suffered severe hand
                  injuries requiring multiple surgeries and resulting in
                  permanent disability.
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
                Get expert legal advice about your dog bite case. No fees unless
                we win.
              </p>
              <Link
                to="/contact"
                className="block bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 mb-4"
              >
                Call (310) 388-3488
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-green-600 text-green-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition duration-300"
              >
                Online Consultation
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Immediate Steps After a Dog Bite
              </h3>
              <ol className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    1
                  </span>
                  Seek immediate medical attention
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    2
                  </span>
                  Report to animal control
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    3
                  </span>
                  Document everything
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    4
                  </span>
                  Contact an attorney
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            California Law Protects Dog Bite Victims
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let insurance companies minimize your claim. California's
            strict liability law means you may be entitled to full compensation
            regardless of the dog's history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:3103883488"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition duration-300"
            >
              Call (310) 388-3488
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
