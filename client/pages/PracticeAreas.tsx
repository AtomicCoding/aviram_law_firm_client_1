import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const PracticeAreas: React.FC = () => {
  return (
    <Layout currentPage="practice-areas">
      {/* Practice Areas Hero Section */}
      <section
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg')`,
        }}
      >
        <h1 className="text-white font-bold text-5xl font-['Mulish'] uppercase">
          Practice Areas
        </h1>
      </section>

      {/* Practice Areas Introduction */}
      <section className="px-4 md:px-16 lg:px-20 py-12 md:py-15 flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize">
            Comprehensive Personal Injury Legal Services
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            Aviram Law, APLC specializes in personal injury law throughout
            California. Our experienced litigation and trial attorneys are
            dedicated to achieving optimal results for our clients who have been
            injured due to others' negligence.
          </p>
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            With years of experience and millions recovered for our clients, we
            provide personalized legal representation in English, Spanish, and
            Hebrew.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="px-4 md:px-16 lg:px-20 py-12 bg-lawfirm-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lawfirm-brown font-bold text-4xl font-['Mulish'] text-center mb-12">
            Our Areas of Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Accidents */}
            <Link
              to="/practice-areas/car-accident"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Car Accidents
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Rear-end collisions, intersection accidents, hit & run, and
                uninsured drivers. We understand California's comparative fault
                laws.
              </p>
            </Link>

            {/* Motorcycle Accidents */}
            <Link
              to="/practice-areas/motorcycle-accident"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13M5 13C3.34 13 2 14.34 2 16C2 17.66 3.34 19 5 19C6.66 19 8 17.66 8 16C8 14.34 6.66 13 5 13Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Motorcycle Accidents
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Serious injuries and bias against riders require experienced
                representation. We fight for maximum compensation.
              </p>
            </Link>

            {/* Truck Accidents */}
            <Link
              to="/practice-areas/truck-accident"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Truck Accidents
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Commercial trucks, freight carriers, federal regulations, and
                complex insurance issues require specialized expertise.
              </p>
            </Link>

            {/* Bus Accidents */}
            <Link
              to="/practice-areas/bus-accident"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Bus Accidents
              </h3>
              <p className="text-black text-sm font-['Inter']">
                School buses, charter, and public transport accidents. We
                understand public entity claims and timing deadlines.
              </p>
            </Link>

            {/* Dog Bites */}
            <Link
              to="/practice-areas/dog-bite"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M4.5 9.5C3.12 9.5 2 8.38 2 7S3.12 4.5 4.5 4.5 7 5.62 7 7 5.88 9.5 4.5 9.5M9 10L7.5 8.5C7.1 8.9 6.6 9.1 6 9.1S4.9 8.9 4.5 8.5L3 10C2.4 10.6 2 11.4 2 12.2V16H7V12.2C7 11.4 8.6 10.6 9 10M19.5 9.5C18.12 9.5 17 8.38 17 7S18.12 4.5 19.5 4.5 22 5.62 22 7 20.88 9.5 19.5 9.5M15 10L16.5 8.5C16.9 8.9 17.4 9.1 18 9.1S19.1 8.9 19.5 8.5L21 10C21.6 10.6 22 11.4 22 12.2V16H17V12.2C17 11.4 15.4 10.6 15 10M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Dog Bites
              </h3>
              <p className="text-black text-sm font-['Inter']">
                California's strict liability law protects victims. We handle
                long-term trauma and infection risks.
              </p>
            </Link>

            {/* Wrongful Death */}
            <Link
              to="/practice-areas/wrongful-death"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 13.5C14.8 13.8 14.4 14 14 14H10V16H14C14.4 16 14.8 16.2 15 16.5L21 23H23V21L17.5 15.5L21 9M1 9H7V15H9V9H15V7H1V9Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Wrongful Death
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Compassionate representation for families seeking justice. We
                handle loss of consortium, funeral expenses, and future income.
              </p>
            </Link>

            {/* Burn Injuries */}
            <Link
              to="/practice-areas/burn-injuries"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M13.5 0.5C13.5 0.5 14.5 0.5 16.5 2.5C18.5 4.5 18.5 6.5 16.5 8.5C14.5 6.5 13.5 4.5 13.5 0.5M9.5 3C7.5 5 7.5 7 9.5 9C11.5 7 11.5 5 9.5 3M6.5 6.5C4.5 8.5 4.5 10.5 6.5 12.5C8.5 10.5 8.5 8.5 6.5 6.5M10 15C8 17 8 19 10 21C12 19 12 17 10 15Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Burn Injuries
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Workplace accidents, electrical burns, and defective product
                burns requiring specialized medical care.
              </p>
            </Link>

            {/* Slip and Fall */}
            <Link
              to="/practice-areas/slip-and-fall"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M15.5 14H17L19 16V18H17.5L15.5 16V14M9.5 14H11L13 16V18H11.5L9.5 16V14M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M5.5 7H18.5L17.5 9.5H6.5L5.5 7Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Slip and Fall
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Premises liability cases involving unsafe conditions at stores,
                restaurants, and public places.
              </p>
            </Link>

            {/* Products Liability */}
            <Link
              to="/practice-areas/products-liability"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 5.64 21.36 12 22C18.36 21.36 22 16 22 10V7L12 2M11 7H13V9H11V7M11 11H13V17H11V11Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Products Liability
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Defective products, dangerous drugs, and faulty medical devices
                that cause serious injuries.
              </p>
            </Link>

            {/* Traumatic Brain Injury */}
            <Link
              to="/practice-areas/traumatic-brain-injury"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Traumatic Brain Injury
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Concussions, severe head trauma, and cognitive injuries
                requiring lifelong care and treatment.
              </p>
            </Link>

            {/* Other Negligence */}
            <Link
              to="/practice-areas/other-negligence"
              className="bg-white p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M17 12H7V10H17V12M15 16H7V14H15V16M17 8H7V6H17V8Z" />
                </svg>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Other Negligence
              </h3>
              <p className="text-black text-sm font-['Inter']">
                Pedestrian accidents, bicycle injuries, nursing home neglect,
                and other personal injury claims.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 px-4 md:px-16 lg:px-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg')`,
        }}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-white font-bold text-4xl font-['Mulish'] capitalize">
            Injured? Call Aviram Law, APLC Today
          </h2>
          <p className="text-white text-xl font-['Inter'] max-w-2xl">
            Free consultation available. No fee unless we win your case. Call
            (310) 388-3488 or contact us online.
          </p>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Why Choose Aviram Law */}
      <section className="px-4 md:px-16 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lawfirm-brown font-bold text-4xl font-['Mulish'] mb-8">
            Why Choose Aviram Law, APLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Experience
              </h3>
              <p className="text-black text-base font-['Inter']">
                Years of litigation and trial experience with millions recovered
                for clients
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Personalized Service
              </h3>
              <p className="text-black text-base font-['Inter']">
                Dedicated attention in English, Spanish, and Hebrew with free
                consultations
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-lawfirm-brown rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                No Fee Unless We Win
              </h3>
              <p className="text-black text-base font-['Inter']">
                We work on contingency - you pay nothing unless we recover
                compensation for you
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
