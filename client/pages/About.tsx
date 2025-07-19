import React from "react";
import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout currentPage="about">
      {/* About Us Hero Section */}
      <section
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg')`,
        }}
      >
        <h1 className="text-white font-bold text-4xl md:text-5xl font-['Mulish'] text-center px-4">
          About Aviram Law, APLC – California's Leading Injury Attorneys
        </h1>
      </section>

      {/* About Aviram Law Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 md:py-15 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-4xl">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize text-center">
            About Aviram Law, APLC
          </h2>
          <div className="text-black text-center font-normal text-lg font-['Inter'] space-y-6">
            <p>
              Aviram Law, APLC is a leading Personal Injury law firm in
              California, representing injured clients throughout the state who
              are seeking justice for their injuries. Aviram Law is a litigation
              and trial firm focused on professionalism and optimal results.
            </p>
            <p>
              With years of experience handling auto accidents, premises
              liability, dog bites, slip and fall, wrongful death, and
              catastrophic injury, we have recovered millions for our clients.
            </p>
          </div>
        </div>

        {/* Roy Aviram Attorney Profile */}
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mt-16">
          <div className="w-full lg:w-1/3">
            <img
              className="w-full aspect-square object-cover rounded-lg"
              src="https://images.pexels.com/photos/7841799/pexels-photo-7841799.jpeg"
              alt="Roy Aviram"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lawfirm-brown font-bold text-4xl font-['Mulish']">
                Roy Aviram
              </h3>
              <p className="text-lawfirm-brown font-bold text-xl font-['Inter']">
                Founding Partner & Lead Trial Attorney
              </p>
            </div>
            <div className="text-black text-base font-normal leading-relaxed font-['Inter'] space-y-4">
              <p>
                Roy Aviram is the founding partner and lead trial attorney at
                Aviram Law, APLC. He graduated cum laude, earned his Master's in
                Business Administration from Cal Poly San Luis Obispo, and his
                Juris Doctor from Pepperdine University School of Law.
              </p>
              <p>
                He holds a Certificate in Dispute Resolution from the Straus
                Institute and is fluent in Spanish and Hebrew, allowing him to
                serve California's diverse communities with personalized legal
                representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16">
        <div
          className="relative h-96 bg-cover bg-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg')`,
          }}
        >
          {/* Play Button */}
          <div className="w-20 h-20 bg-lawfirm-brown rounded-full flex items-center justify-center mb-6">
            <svg className="w-7 h-8 fill-white ml-1" viewBox="0 0 29 35">
              <path d="M0.789062 34.2775L0.789062 0.976562L28.704 17.6277L0.789062 34.2775Z" />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-white font-bold text-4xl font-['Mulish'] capitalize mb-6">
              California's Leading Injury Attorneys
            </h2>
            <p className="text-white text-base font-normal font-['Inter']">
              Dedicated to achieving optimal results for our clients through
              professional litigation and trial advocacy
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              Millions
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Recovered for Clients
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              Years
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              of Experience
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              3
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Languages Spoken
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              Free
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Consultations
            </span>
          </div>
        </div>
      </section>

      {/* Why Choose Aviram Law Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-10">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish']">
            Why Choose Aviram Law, APLC
          </h2>
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            Our litigation and trial experience sets us apart. We focus on
            professionalism and optimal results, handling cases ranging from
            auto accidents to catastrophic injuries. With fluency in English,
            Spanish, and Hebrew, we serve California's diverse communities with
            personalized legal representation.
          </p>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4">
            Get Free Consultation
          </button>
        </div>
        <img
          className="w-full lg:w-1/2"
          src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg"
          alt="Legal representation"
        />
      </section>

      {/* Practice Areas Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-8">
        <img
          className="w-full lg:w-1/2"
          src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg"
          alt="Practice areas"
        />
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-10">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish']">
            Comprehensive Practice Areas
          </h2>
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            We handle a wide range of personal injury cases including car
            accidents, motorcycle accidents, truck accidents, slip and fall, dog
            bites, wrongful death, burn injuries, traumatic brain injury,
            products liability, and other negligence claims.
          </p>

          {/* Success Rates */}
          <div className="w-full space-y-4">
            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Client Success Rate
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-200">
                  <div
                    className="h-full bg-lawfirm-brown"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <span className="text-lawfirm-brown font-bold text-xs font-['Mulish']">
                  95%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Cases Settled Out of Court
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-200">
                  <div
                    className="h-full bg-lawfirm-brown"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="text-lawfirm-brown font-bold text-xs font-['Mulish']">
                  90%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Trial Win Rate
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-200">
                  <div
                    className="h-full bg-lawfirm-brown"
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <span className="text-lawfirm-brown font-bold text-xs font-['Mulish']">
                  88%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white py-16 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize">
            Ready to Get Started?
          </h2>
          <p className="text-black text-xl font-normal leading-relaxed font-['Inter']">
            Contact Aviram Law, APLC today for a free consultation. We're here
            to help you get the justice and compensation you deserve.
          </p>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4">
            Call (310) 388-3488
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
