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
        <h1 className="text-white font-bold text-5xl font-['Mulish'] uppercase text-center">
          About Us
        </h1>
      </section>

      {/* Our Attorneys Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 md:py-15 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize text-center">
            Our attorneys
          </h2>
          <p className="text-black text-center font-normal text-base font-['Inter']">
            Varius quisque odio mauris lectus consequat sedretium purus feugiat
            volutpat pell
          </p>
        </div>

        {/* First Row of Attorney Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Attorney 1 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/7841799/pexels-photo-7841799.jpeg"
              alt="Jackson Bauer"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Jackson Bauer
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Finance Lawyer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Attorney 2 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg"
              alt="Stephanie Reilly"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Stephanie Reilly
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Criminal Defence Lawyer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Attorney 3 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"
              alt="Matthew Webb"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Matthew Webb
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Tax Lawyer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Attorney Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Attorney 4 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg"
              alt="Jackson Bauer"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Jackson Bauer
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Criminal Defence Lawyer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Attorney 5 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg"
              alt="Stephanie Reilly"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Stephanie Reilly
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Partner
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Attorney 6 */}
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/30483129/pexels-photo-30483129.jpeg"
              alt="Matthew Webb"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black font-bold text-2xl font-['Mulish'] text-center">
                  Matthew Webb
                </h3>
                <p className="text-lawfirm-brown font-bold text-base font-['Inter'] text-center">
                  Tax Lawyer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 7 14">
                    <path d="M4.25 13.0557V6.5271H6.05218L6.29101 4.2773H4.25L4.25306 3.15125C4.25306 2.56447 4.30881 2.25006 5.1516 2.25006H6.27826V0H4.47581C2.31079 0 1.54875 1.0914 1.54875 2.92678V4.27756H0.199219V6.52736H1.54875V13.0557H4.25Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-black" viewBox="0 0 16 16">
                    <path d="M8.00075 0C5.82806 0 5.55539 0.0095001 4.70205 0.0483338C3.85037 0.0873342 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865009 3.84987 0.0481672 4.70122C0.0100001 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966675 10.4446 0.0483338 11.2979C0.0875009 12.1496 0.222336 12.731 0.420004 13.2396C0.624506 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873342 11.2966 0.0483338C10.4433 0.0095001 10.1716 0 7.99825 0H8.00075Z" />
                  </svg>
                </div>
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 14 12">
                    <path d="M6.00292 7.44185L5.79875 10.5007C6.09875 10.5007 6.2313 10.3635 6.39875 10.2007L7.8401 8.79919L10.8387 11.0146C11.3906 11.3191 11.7889 11.1615 11.9263 10.5023L13.8948 1.22597C14.0964 0.417955 13.5868 0.0514747 13.0589 0.291155L1.49991 4.74825C0.710898 5.06472 0.715498 5.50491 1.35609 5.70105L4.32239 6.62688L11.1897 2.29438C11.5139 2.09779 11.8114 2.20349 11.5672 2.42022L6.00275 7.44172L6.00292 7.44185Z" />
                  </svg>
                </div>
              </div>
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
              We Provide Best Solutions
            </h2>
            <p className="text-white text-base font-normal font-['Inter']">
              Potenti porta mauris nec vulputate. Massa sagittis lectus montes
              vel sit
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              1200
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Satisfied Clients
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              98%
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Successful Cases
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              32
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lawfirm-brown font-black text-5xl font-['Mulish']">
              1800
            </span>
            <span className="text-black font-bold text-base font-['Inter']">
              Case Closed
            </span>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-10">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish']">
            Advocacy is a passion with proven results
          </h2>
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
            quisque odio mauris lectus consequat sed. Pretium purus feugiat
            volutpat pellentesque.Potenti porta mauris nec vulputate.
          </p>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4">
            Learn more
          </button>
        </div>
        <img
          className="w-full lg:w-1/2"
          src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg"
          alt="Legal advocacy"
        />
      </section>

      {/* Ideas Protection Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-8">
        <img
          className="w-full lg:w-1/2"
          src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg"
          alt="Ideas protection"
        />
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-10">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish']">
            You've got ideas. We protect them.
          </h2>
          <p className="text-black text-base font-normal leading-relaxed font-['Inter']">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
            quisque odio mauris lectus consequat sed. Pretium purus feugiat
            volutpat pellentesque.Potenti porta mauris nec vulputate.
          </p>

          {/* Progress Bars */}
          <div className="w-full space-y-4">
            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Successful Cases
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-200">
                  <div
                    className="h-full bg-lawfirm-brown"
                    style={{ width: "98%" }}
                  ></div>
                </div>
                <span className="text-lawfirm-brown font-bold text-xs font-['Mulish']">
                  98%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Criminal Law
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-200">
                  <div
                    className="h-full bg-lawfirm-brown"
                    style={{ width: "96%" }}
                  ></div>
                </div>
                <span className="text-lawfirm-brown font-bold text-xs font-['Mulish']">
                  96%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-black font-medium text-base font-['Inter']">
                Banking and Finance
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
          </div>
        </div>
      </section>

      {/* Our Blog Section */}
      <section className="bg-white py-16 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize">
            Our blog
          </h2>
          <p className="text-black text-xl font-normal leading-relaxed font-['Inter']">
            Adipiscing nam neque hendrerit nec pellentesque diamarius quisque
            odio
          </p>
        </div>

        {/* Blog Cards */}
        <div className="px-4 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Blog Card 1 */}
          <div className="flex flex-col">
            <img
              className="w-full h-70 object-cover"
              src="https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg"
              alt="Legal consultation"
            />
            <div className="p-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="text-black opacity-80 text-base font-normal font-['Inter']">
                  November 9, 2023
                </span>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Legal Consultation and Advice
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8L12 8"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33203L12.6667 7.9987L8 12.6654"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="flex flex-col">
            <img
              className="w-full h-70 object-cover"
              src="https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg"
              alt="Law and justice"
            />
            <div className="p-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="text-black opacity-80 text-base font-normal font-['Inter']">
                  November 9, 2023
                </span>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Law and Justice
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8L12 8"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33203L12.6667 7.9987L8 12.6654"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="flex flex-col">
            <img
              className="w-full h-70 object-cover"
              src="https://images.pexels.com/photos/30483129/pexels-photo-30483129.jpeg"
              alt="Crime and civil law"
            />
            <div className="p-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="text-black opacity-80 text-base font-normal font-['Inter']">
                  November 9, 2023
                </span>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Crime, civil law, justice and rights
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8L12 8"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33203L12.6667 7.9987L8 12.6654"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
