import React from "react";
import Layout from "../components/Layout";

const Contact: React.FC = () => {
  return (
    <Layout currentPage="contact">
      {/* Contact Us Hero Section */}
      <section
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg')`,
        }}
      >
        <h1 className="text-white font-bold text-5xl font-['Mulish'] uppercase text-center">
          Get In Touch With Us
        </h1>
      </section>

      {/* Contact Section */}
      <section
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg')`,
        }}
      >
        <div className="px-4 md:px-16 lg:px-20 flex flex-col lg:flex-row items-start gap-6">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-white font-bold text-5xl font-['Mulish'] capitalize">
                Have legal questions? Contact Aviram Law, APLC!
              </h2>
              <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                Call (310) 388-3488 or complete the form below for a free
                consultation! We're here to help you get the justice and
                compensation you deserve.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Phone Numbers */}
              <div className="flex items-start gap-5">
                <div className="w-9 h-9 bg-lawfirm-brown rounded flex items-center justify-center">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 36 36">
                    <path d="M35.9632 26.9529V32.3724C35.9653 32.8755 35.8622 33.3735 35.6606 33.8344C35.4591 34.2954 35.1635 34.7092 34.7927 35.0493C34.422 35.3895 33.9843 35.6484 33.5077 35.8096C33.0311 35.9708 32.5261 36.0306 32.0251 35.9853C26.4662 35.3813 21.1266 33.4818 16.4351 30.4394C12.0703 27.6659 8.36977 23.9653 5.59621 19.6005C2.54322 14.8878 0.643273 9.52214 0.0503072 3.93831C0.0051641 3.43876 0.0645331 2.93528 0.224634 2.45993C0.384734 1.98458 0.642059 1.54777 0.980224 1.17732C1.31839 0.806866 1.72998 0.510885 2.18881 0.30822C2.64763 0.105556 3.14362 0.000647501 3.64521 0.000175143H9.06466C9.94136 -0.00845343 10.7913 0.302 11.456 0.873669C12.1207 1.44534 12.5549 2.23922 12.6776 3.10733C12.9064 4.84167 13.3306 6.54457 13.9422 8.18355C14.1852 8.83013 14.2378 9.53284 14.0937 10.2084C13.9497 10.884 13.6149 11.5041 13.1293 11.9952L10.835 14.2895C13.4066 18.8121 17.1513 22.5567 21.6739 25.1284L23.9682 22.8341C24.4593 22.3484 25.0794 22.0137 25.755 21.8696C26.4305 21.7256 27.1333 21.7782 27.7798 22.0212C29.4188 22.6328 31.1217 23.057 32.8561 23.2858C33.7336 23.4096 34.535 23.8516 35.1079 24.5277C35.6808 25.2038 35.9852 26.067 35.9632 26.9529Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-2xl font-['Mulish']">
                    Phone Numbers
                  </h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      (257) 388-6895
                    </span>
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      (257) 388-6895
                    </span>
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-5">
                <div className="w-9 h-9 bg-lawfirm-brown rounded flex items-center justify-center">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 36 36">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 36C18 36 32.7273 26.1818 32.7273 14.7273C32.7273 10.8214 31.1756 7.07542 28.4137 4.31352C25.6518 1.55162 21.9059 0 18 0C14.0941 0 10.3481 1.55162 7.58622 4.31352C4.82432 7.07542 3.27271 10.8214 3.27271 14.7273C3.27271 26.1818 18 36 18 36ZM22.9091 14.7273C22.9091 17.4385 20.7112 19.6364 18 19.6364C15.2888 19.6364 13.0909 17.4385 13.0909 14.7273C13.0909 12.0161 15.2888 9.81818 18 9.81818C20.7112 9.81818 22.9091 12.0161 22.9091 14.7273Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-2xl font-['Mulish']">
                    Physical Address
                  </h3>
                  <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                    43 W. Wellington Road <br />
                    Fairhope AL 36532
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-5">
                <div className="w-9 h-9 bg-lawfirm-brown rounded flex items-center justify-center">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 38 36">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.3598 3.55997L4.55995 3.64013C3.07987 3.64425 1.80348 4.55302 1.25559 5.8387C1.44232 5.8766 1.62455 5.95241 1.7909 6.06816L18.9985 18.0423L36.1392 5.97256C36.3058 5.85528 36.4886 5.77827 36.6761 5.73953C36.121 4.45723 34.8397 3.55585 33.3598 3.55997ZM36.9747 8.90658L19.8325 20.9774C19.3376 21.3258 18.6777 21.3277 18.1809 20.982L0.974875 9.00899L1.0301 28.85C1.03561 30.83 2.66011 32.4455 4.6401 32.44L33.44 32.3599C35.42 32.3543 37.0355 30.7298 37.03 28.7499L36.9747 8.90658Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-2xl font-['Mulish']">
                    Email Address
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      temmink@outlook.com
                    </span>
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      mallanmba@msn.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-5">
                <div className="w-9 h-9 bg-lawfirm-brown rounded flex items-center justify-center">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 36 36">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM17.64 9.36C17.64 8.76353 17.1565 8.28 16.56 8.28C15.9635 8.28 15.48 8.76353 15.48 9.36V20.16C15.48 20.5691 15.7111 20.943 16.077 21.126L23.277 24.726C23.8105 24.9927 24.4592 24.7765 24.726 24.243C24.9927 23.7095 24.7765 23.0608 24.243 22.794L17.64 19.4925V9.36Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-2xl font-['Mulish']">
                    Opening Hours
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      Mon-Fri 08:00AM - 08:00PM
                    </span>
                    <span className="text-white text-base font-normal leading-relaxed font-['Inter']">
                      Sat-Sun 10:00 AM - 02:00PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-lawfirm-cream p-10 flex flex-col gap-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-base font-['Inter']">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-base font-['Inter']">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none"
                  />
                </div>
              </div>

              {/* Email and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-base font-['Inter']">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-base font-['Inter']">
                    Service
                  </label>
                  <div className="relative">
                    <select className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none appearance-none">
                      <option>Civil Law</option>
                      <option>Criminal Law</option>
                      <option>Corporate Law</option>
                      <option>Family Law</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 fill-black"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.13081 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label className="text-black font-bold text-base font-['Inter']">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-black font-bold text-base font-['Inter']">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full p-4 bg-white text-gray-500 text-base font-['Inter'] border-none outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] py-4 px-8">
                Request consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="w-full h-80 bg-gray-300 relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg"
            alt="Map placeholder"
          />

          {/* Map Markers */}
          <div className="absolute top-16 left-1/4">
            <div className="w-15 h-15 bg-lawfirm-brown rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="absolute top-24 right-1/3">
            <div className="w-15 h-15 bg-lawfirm-brown rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-16 right-1/4">
            <div className="w-15 h-15 bg-lawfirm-brown rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-lawfirm-brown py-10 px-4 md:px-16 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-8">
        <img
          className="w-48 h-42"
          src="https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg"
          alt="Legal questions banner"
        />

        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h2 className="text-white font-bold text-4xl font-['Mulish'] capitalize">
            Have legal questions? Ask our experts!
          </h2>
          <p className="text-white text-base font-normal font-['Mulish']">
            Lectus eget nisl orci elit malesuada id ipsum at velit.
          </p>
        </div>

        <button className="bg-white text-lawfirm-brown font-bold text-xl font-['Mulish'] py-4 px-8">
          Ask an expert
        </button>
      </section>
    </Layout>
  );
};

export default Contact;
