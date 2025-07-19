import React from "react";
import Layout from "./Layout";

const Homepage: React.FC = () => {
  return (
    <Layout currentPage="home">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/3f946920f2063b3a25bb25c8c34dbe3ddcc2591a?width=2880')`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 px-4 md:px-8 max-w-6xl text-center">
          <h1 className="text-white font-bold text-5xl font-['Mulish'] uppercase leading-tight max-w-4xl">
            Legal solutions for business and individual needs
          </h1>
          <p className="text-white font-bold text-base font-['Inter'] max-w-xl">
            Pretium purus feugiat volutpat pellenteotenti porta mauris nec
            vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut
            massa in integer ultrices lacus est. Tempus ultrices placerat tellus
            morbi.
          </p>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4 mt-5">
            Make enquiry
          </button>
        </div>
      </section>

      {/* Trusted Legal Partnerships Section */}
      <section className="bg-white px-4 md:px-16 lg:px-20 py-16 md:py-21 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-5 max-w-2xl">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize">
            Trusted legal partnerships
          </h2>
          <p className="text-black text-xl font-normal leading-relaxed font-['Inter']">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
            quisque odio mauris lectus consequat sed. Pretium purus feugiat
            volutpat pellentesque.
            <br />
            Potenti porta mauris nec vulputate.
          </p>
          <img
            className="w-60 h-11"
            src="https://api.builder.io/api/v1/image/assets/TEMP/7013d9d00a9d5309f974668c6d05d1dc11a29f97?width=482"
            alt="Partnership logos"
          />
        </div>
        <div
          className="w-110 h-80 p-6 flex items-end bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/d7c28bbabfd266464616fbc149bf72223c77487e?width=880')`,
          }}
        >
          <span className="text-lawfirm-text-light font-bold text-base font-['Mulish']">
            Julio Jefferson
          </span>
        </div>
      </section>

      {/* Practice Areas Icons Section */}
      <section className="px-4 md:px-16 lg:px-20 py-16 md:py-24 bg-lawfirm-cream">
        <div className="max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-28">
            {/* Banking and Finance */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.40938 44.0003H41.5934C42.0334 44.0003 42.3934 43.6403 42.3934 43.2003V39.1203C42.3934 38.6803 42.0334 38.3203 41.5934 38.3203H6.40938C5.96937 38.3203 5.60938 38.6803 5.60938 39.1203V43.2003C5.60938 43.6403 5.96937 44.0003 6.40938 44.0003Z"
                  fill="black"
                />
                <path
                  d="M6.40938 18.2796H41.5934C42.0334 18.2796 42.3934 17.9276 42.3934 17.4796V13.3996C42.3934 12.9596 42.0334 12.5996 41.5934 12.5996H6.40938C5.96937 12.5996 5.60938 12.9596 5.60938 13.3996V17.4796C5.60938 17.9276 5.96937 18.2796 6.40938 18.2796Z"
                  fill="black"
                />
                <path
                  d="M38.496 11L24.352 4.07995C24.128 3.97595 23.872 3.97595 23.648 4.07995L9.50403 11H38.496Z"
                  fill="black"
                />
                <path
                  d="M16.0327 21.2069C16.4727 21.2069 16.8327 20.8469 16.8327 20.4069V19.8789H8.30469V20.4069C8.30469 20.8469 8.65669 21.2069 9.10469 21.2069H9.68869V35.3909H9.10469C8.65669 35.3909 8.30469 35.7509 8.30469 36.1909V36.7189H16.8327V36.1909C16.8327 35.7509 16.4727 35.3909 16.0327 35.3909H15.4487V21.2069H16.0327Z"
                  fill="black"
                />
                <path
                  d="M27.4624 21.2069C27.9024 21.2069 28.2624 20.8469 28.2624 20.4069V19.8789H19.7344V20.4069C19.7344 20.8469 20.0944 21.2069 20.5344 21.2069H21.1184V35.3909H20.5344C20.0944 35.3909 19.7344 35.7509 19.7344 36.1909V36.7189H28.2624V36.1909C28.2624 35.7509 27.9024 35.3909 27.4624 35.3909H26.8784V21.2069H27.4624Z"
                  fill="black"
                />
                <path
                  d="M38.896 21.2089C39.336 21.2089 39.696 20.8489 39.696 20.4089V19.8809H31.168V20.4089C31.168 20.8489 31.528 21.2089 31.968 21.2089H32.552V35.3929H31.968C31.528 35.3929 31.168 35.7529 31.168 36.1929V36.7209H39.696V36.1929C39.696 35.7529 39.336 35.3929 38.896 35.3929H38.312V21.2089H38.896Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Banking and Finance
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>

            {/* Family Law */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3203 21.9836H31.1923C30.4883 19.8076 28.8483 18.0396 26.7523 17.1676C27.9683 16.2556 28.7603 14.8076 28.7603 13.1756C28.7603 10.4236 26.5203 8.18359 23.7603 8.18359C21.0083 8.18359 18.7683 10.4236 18.7683 13.1756C18.7683 14.8076 19.5603 16.2556 20.7763 17.1676C18.6643 18.0316 17.0243 19.7996 16.3203 21.9836Z"
                  fill="black"
                />
                <path
                  d="M32.4464 18.824C32.1744 18.952 31.9104 19.104 31.6624 19.272C32.1024 19.952 32.4624 20.688 32.7184 21.488L32.8784 21.984H40.7424C40.1504 20.592 39.0624 19.472 37.7024 18.824C38.5344 18.088 39.0704 17.032 39.0704 15.832C39.0704 13.624 37.2784 11.832 35.0704 11.832C32.8624 11.832 31.0704 13.624 31.0704 15.832C31.0624 17.024 31.6064 18.088 32.4464 18.824Z"
                  fill="black"
                />
                <path
                  d="M14.801 21.488C15.057 20.688 15.417 19.952 15.857 19.272C15.609 19.104 15.345 18.952 15.073 18.824C15.905 18.088 16.449 17.024 16.449 15.832C16.449 13.624 14.657 11.832 12.449 11.832C10.241 11.832 8.44897 13.624 8.44897 15.832C8.44897 17.032 8.98497 18.088 9.82497 18.824C8.46497 19.472 7.37697 20.592 6.79297 21.984H14.649L14.801 21.488Z"
                  fill="black"
                />
                <path
                  d="M4.8 38.216C4.36 38.216 4 38.576 4 39.016C4 39.456 4.36 39.816 4.8 39.816H6.272H6.28H41.24H41.248H43.2C43.64 39.816 44 39.456 44 39.016C44 38.576 43.64 38.216 43.2 38.216H42.032V25.184H43.2C43.64 25.184 44 24.824 44 24.384C44 23.944 43.64 23.584 43.2 23.584H41.248C41.24 23.584 41.24 23.584 41.232 23.584H6.272C6.264 23.584 6.264 23.584 6.256 23.584H4.8C4.36 23.584 4 23.944 4 24.384C4 24.824 4.36 25.184 4.8 25.184H5.472V38.216H4.8ZM10.928 33.552H36.592C37.032 33.552 37.392 33.912 37.392 34.352C37.392 34.792 37.032 35.152 36.592 35.152H10.928C10.488 35.152 10.128 34.792 10.128 34.352C10.128 33.912 10.488 33.552 10.928 33.552ZM10.128 29.048C10.128 28.608 10.488 28.248 10.928 28.248H36.592C37.032 28.248 37.392 28.608 37.392 29.048C37.392 29.488 37.032 29.848 36.592 29.848H10.928C10.488 29.848 10.128 29.488 10.128 29.048Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Family Law
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>

            {/* Business Law */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8698 22.1122L25.8057 13.0482C25.5097 12.7522 24.9738 12.7522 24.6778 13.0482L21.0777 16.6482C20.7657 16.9602 20.7657 17.4722 21.0777 17.7842L30.1417 26.8402C30.2857 26.9922 30.4938 27.0802 30.7018 27.0802C30.9178 27.0802 31.1177 26.9922 31.2697 26.8402L34.8698 23.2482C35.1817 22.9282 35.1817 22.4242 34.8698 22.1122Z"
                  fill="black"
                />
                <path
                  d="M43.7421 12.9592C43.8861 12.8072 43.9741 12.6072 43.9741 12.3912C43.9741 12.1832 43.8861 11.9832 43.7421 11.8312L36.0941 4.18322C35.7741 3.87122 35.2701 3.87122 34.9581 4.18322L27.0781 12.0632L35.8541 20.8392L43.7421 12.9592Z"
                  fill="black"
                />
                <path
                  d="M31.8572 43.1438C31.8572 42.7038 31.4972 42.3438 31.0572 42.3438H21.4172C20.9772 42.3438 20.6172 42.7038 20.6172 43.1438C20.6172 43.5838 20.9772 43.9438 21.4172 43.9438H31.0572C31.4972 43.9438 31.8572 43.5838 31.8572 43.1438Z"
                  fill="black"
                />
                <path
                  d="M16.9346 32.6808C17.3986 32.2088 17.3986 31.4488 16.9346 30.9848C16.7026 30.7528 16.3906 30.6328 16.0866 30.6328C15.7826 30.6328 15.4706 30.7528 15.2386 30.9848C14.7746 31.4488 14.7746 32.2168 15.2386 32.6808C15.7026 33.1528 16.4626 33.1528 16.9346 32.6808Z"
                  fill="black"
                />
                <path
                  d="M13.6393 33.1601C13.0633 32.0961 13.2153 30.7521 14.1113 29.8561C15.1993 28.7681 16.9753 28.7681 18.0713 29.8561C19.1593 30.9441 19.1593 32.7201 18.0713 33.8161C17.5273 34.3601 16.8073 34.6321 16.0953 34.6321C15.6393 34.6321 15.1913 34.5121 14.7753 34.2881L5.48725 43.7041C5.99125 43.4721 6.49525 43.2481 6.99125 43.0481C6.97525 43.1201 6.95125 43.1841 6.95125 43.2561C6.95925 43.6961 7.31125 44.0481 7.75125 44.0481H7.75925L18.0953 43.9441C18.5353 43.9361 18.8953 43.5761 18.8873 43.1361C18.8793 42.6961 18.5273 42.3441 18.0873 42.3441H18.0793L8.59925 42.4401C15.5913 40.0001 21.3673 40.4961 21.4393 40.4961C21.8393 40.5281 22.1913 40.2881 22.2873 39.9041C23.5913 34.9681 26.4953 29.9521 28.2553 27.2001L20.7113 19.6641C17.9593 21.4161 12.9513 24.3201 8.01525 25.6241C7.63925 25.7281 7.38325 26.0881 7.42325 26.4721C7.43125 26.5521 8.11925 34.3441 4.06325 42.7921C4.04725 42.8321 4.03925 42.8721 4.03125 42.9121L13.6393 33.1601Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Business Law
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Real Estate */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3191 21.1928C25.2791 21.0248 24.4951 20.4968 23.9991 20.0488C23.4951 20.5048 22.7191 21.0248 21.6791 21.1928C20.4151 21.3928 19.0951 21.0408 17.7431 20.1368L15.8711 22.4808C16.6951 23.1928 17.8951 24.5928 17.7111 26.6088C17.6711 27.0888 17.5191 27.6248 17.3671 28.1848C16.9751 29.5928 16.5351 31.1848 17.3991 32.6888C18.2951 34.2568 20.5191 35.5288 24.0071 36.4808C27.4951 35.5288 29.7191 34.2568 30.6151 32.6888C31.4791 31.1848 31.0391 29.5928 30.6471 28.1848C30.4951 27.6168 30.3431 27.0888 30.3031 26.6088C30.1191 24.5928 31.3191 23.1928 32.1431 22.4808L30.2711 20.1368C28.9111 21.0408 27.5831 21.3928 26.3191 21.1928Z"
                  fill="black"
                />
                <path
                  d="M24.4966 27.168L24.0006 26.168L23.5126 27.168C23.3926 27.4 23.1686 27.568 22.9126 27.608L21.8086 27.768L22.6086 28.544C22.7926 28.728 22.8806 28.992 22.8406 29.256L22.6566 30.352L23.6406 29.832C23.7526 29.768 23.8886 29.744 24.0086 29.744C24.1366 29.744 24.2646 29.776 24.3846 29.832L25.3686 30.352L25.1766 29.256C25.1366 29 25.2166 28.728 25.4086 28.544L26.2086 27.768L25.1046 27.608C24.8326 27.568 24.6086 27.4 24.4966 27.168Z"
                  fill="black"
                />
                <path
                  d="M42.7123 24.312C42.9203 24.312 43.1203 24.232 43.2803 24.08C43.5923 23.76 43.5923 23.2561 43.2803 22.944L41.1203 20.784L36.7923 16.456V4.80005C36.7923 4.35205 36.4323 4.00005 35.9923 4.00005H30.5043C30.0643 4.00005 29.7043 4.35205 29.7043 4.80005V9.36805L24.5683 4.23205C24.2563 3.92005 23.7443 3.92005 23.4323 4.23205L6.91228 20.752C6.89628 20.776 6.87228 20.8 6.84828 20.816L4.72828 22.944C4.40828 23.2561 4.40828 23.76 4.72828 24.08C5.04028 24.392 5.54428 24.392 5.85628 24.08L6.64828 23.288V38.376C6.64828 41.48 9.16828 44 12.2723 44H35.7363C38.8323 44 41.3523 41.48 41.3523 38.376V23.288L42.1443 24.08C42.3043 24.232 42.5043 24.312 42.7123 24.312ZM33.6803 23.32C33.6003 23.368 31.7123 24.5201 31.8883 26.4641C31.9203 26.8001 32.0483 27.2721 32.1843 27.76C32.6083 29.2961 33.1923 31.408 32.0003 33.488C30.8483 35.496 28.2963 37 24.2083 38.0881C24.1443 38.104 24.0723 38.112 24.0003 38.112C23.9283 38.112 23.8643 38.104 23.7923 38.0881C19.7043 37 17.1523 35.496 16.0003 33.488C14.8083 31.408 15.3843 29.3041 15.8163 27.76C15.9523 27.264 16.0803 26.8001 16.1123 26.4641C16.2883 24.5121 14.4003 23.36 14.3203 23.312C14.1203 23.192 13.9843 22.992 13.9443 22.768C13.9043 22.544 13.9603 22.304 14.1043 22.128L16.9683 18.536C17.2403 18.192 17.7443 18.136 18.0883 18.408C19.3043 19.368 20.4243 19.768 21.4243 19.608C22.6483 19.408 23.3283 18.424 23.3363 18.416C23.6323 17.968 24.3763 17.968 24.6723 18.416C24.6723 18.424 25.3683 19.424 26.6003 19.616C27.6003 19.768 28.7123 19.36 29.9203 18.408C30.2643 18.136 30.7683 18.192 31.0403 18.536L33.9043 22.128C34.0483 22.312 34.1043 22.544 34.0643 22.776C34.0163 23.008 33.8803 23.208 33.6803 23.32Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Real Estate
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>

            {/* Civil Law */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7208 19.5684L30.4648 23.8644H34.9768L32.7208 19.5684Z"
                  fill="black"
                />
                <path
                  d="M15.281 27.4408C16.537 27.4408 17.601 26.6088 17.945 25.4648H12.625C12.969 26.6088 14.033 27.4408 15.281 27.4408Z"
                  fill="black"
                />
                <path
                  d="M32.7185 27.4408C33.9745 27.4408 35.0385 26.6088 35.3825 25.4648H30.0625C30.3985 26.6088 31.4625 27.4408 32.7185 27.4408Z"
                  fill="black"
                />
                <path
                  d="M13.0312 23.8644H17.5352L15.2792 19.5684L13.0312 23.8644Z"
                  fill="black"
                />
                <path
                  d="M40.7272 12.424C31.6392 11.728 24.6552 4.328 24.5832 4.256C24.4312 4.088 24.2232 4 23.9992 4C23.7752 4 23.5672 4.088 23.4152 4.256C23.3432 4.328 16.3832 11.728 7.27116 12.424C6.85516 12.456 6.53516 12.808 6.53516 13.224V19.232C6.53516 27.456 9.96716 34.952 15.9432 39.808C18.3672 41.776 20.9992 43.168 23.7832 43.968C23.8552 43.992 23.9272 44 23.9992 44C24.0712 44 24.1512 43.992 24.2232 43.968C26.9992 43.168 29.6312 41.776 32.0552 39.808C38.0312 34.952 41.4632 27.456 41.4632 19.232V13.224C41.4632 12.808 41.1432 12.456 40.7272 12.424ZM19.6632 24.664C19.6632 24.656 19.6632 24.656 19.6632 24.648C19.6552 24.656 19.6632 24.664 19.6632 24.664ZM37.0952 24.68V24.696C37.0792 27.096 35.1192 29.04 32.7192 29.04C30.3192 29.04 28.3592 27.096 28.3432 24.696C28.3432 24.688 28.3432 24.688 28.3432 24.68C28.3432 24.664 28.3432 24.656 28.3432 24.64C28.3432 24.552 28.3672 24.472 28.3912 24.392C28.3992 24.368 28.4072 24.352 28.4152 24.328C28.4232 24.312 28.4232 24.304 28.4312 24.288L31.3912 18.648H24.7992V30.64H27.0392C27.4792 30.64 27.8392 31 27.8392 31.44C27.8392 31.88 27.4792 32.24 27.0392 32.24H23.9992H20.9592C20.5192 32.24 20.1592 31.88 20.1592 31.44C20.1592 31 20.5192 30.64 20.9592 30.64H23.1992V18.648H16.6072L19.5672 24.288C19.5752 24.304 19.5752 24.312 19.5832 24.328C19.5912 24.344 19.5992 24.368 19.6072 24.392C19.6392 24.472 19.6552 24.552 19.6552 24.64V24.68V24.696C19.6392 27.096 17.6792 29.04 15.2792 29.04C12.8792 29.04 10.9192 27.096 10.9032 24.696C10.9032 24.688 10.9032 24.688 10.9032 24.68C10.9032 24.664 10.9032 24.656 10.9032 24.64C10.9032 24.552 10.9272 24.472 10.9512 24.392C10.9592 24.368 10.9672 24.352 10.9752 24.328C10.9832 24.312 10.9832 24.304 10.9912 24.288L14.5672 17.472C14.5992 17.408 14.6472 17.352 14.6952 17.296C14.8392 17.144 15.0472 17.04 15.2712 17.04H23.1992V15.784C23.1992 15.344 23.5592 14.984 23.9992 14.984C24.4392 14.984 24.7992 15.344 24.7992 15.784V17.04H32.7192C32.9512 17.04 33.1592 17.144 33.3112 17.312C33.3592 17.36 33.3992 17.408 33.4312 17.472L37.0072 24.288C37.0152 24.304 37.0152 24.312 37.0232 24.328C37.0312 24.344 37.0392 24.368 37.0472 24.392C37.0792 24.472 37.0952 24.552 37.0952 24.64C37.0952 24.648 37.1032 24.656 37.1032 24.664C37.0952 24.672 37.0952 24.68 37.0952 24.68Z"
                  fill="black"
                />
                <path
                  d="M37.0939 24.6806C37.0939 24.6726 37.0939 24.6646 37.0939 24.6646C37.0939 24.6566 37.0859 24.6486 37.0859 24.6406C37.0939 24.6566 37.0939 24.6726 37.0939 24.6806Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Civil Law
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>

            {/* Corporate Law */}
            <div className="flex flex-col items-center gap-3 text-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4094 34.5996C24.9694 34.5996 24.6094 34.9516 24.6094 35.3996C24.6094 38.3756 27.0334 40.7996 30.0174 40.7996C32.9934 40.7996 35.4174 38.3756 35.4174 35.3996C35.4174 34.9516 35.0574 34.5996 34.6174 34.5996H25.4094Z"
                  fill="black"
                />
                <path
                  d="M9.4 40.7996H25.56C24 39.5116 23.008 37.5676 23.008 35.3996C23.008 35.1196 23.064 34.8476 23.152 34.5996H4.8C4.352 34.5996 4 34.9516 4 35.3996C4 38.3756 6.416 40.7996 9.4 40.7996Z"
                  fill="black"
                />
                <path
                  d="M35.4141 13.1352H43.1981C43.6381 13.1352 43.9981 12.7752 43.9981 12.3272C43.9981 9.50322 41.7181 7.19922 38.9101 7.19922C38.7341 7.19922 38.5581 7.20722 38.3901 7.22322H16.0221C12.9341 7.22322 10.4141 9.73522 10.4141 12.8232V32.9992H35.4141V13.1352ZM38.9101 8.80722C40.5581 8.80722 41.9421 9.96722 42.3021 11.5272H35.5101C35.8701 9.96722 37.2541 8.80722 38.9101 8.80722ZM22.9181 29.9912H15.6381C15.1901 29.9912 14.8381 29.6312 14.8381 29.1912C14.8381 28.7432 15.1901 28.3912 15.6381 28.3912H22.9181C23.3581 28.3912 23.7181 28.7432 23.7181 29.1912C23.7181 29.6312 23.3581 29.9912 22.9181 29.9912ZM30.1981 24.9512H15.6381C15.1901 24.9512 14.8381 24.5912 14.8381 24.1512C14.8381 23.7112 15.1901 23.3512 15.6381 23.3512H30.1981C30.6381 23.3512 30.9981 23.7112 30.9981 24.1512C30.9981 24.5912 30.6381 24.9512 30.1981 24.9512ZM30.1981 19.9112H15.6381C15.1901 19.9112 14.8381 19.5512 14.8381 19.1112C14.8381 18.6712 15.1901 18.3112 15.6381 18.3112H30.1981C30.6381 18.3112 30.9981 18.6712 30.9981 19.1112C30.9981 19.5512 30.6381 19.9112 30.1981 19.9112ZM30.1981 14.8712H15.6381C15.1901 14.8712 14.8381 14.5112 14.8381 14.0712C14.8381 13.6312 15.1901 13.2712 15.6381 13.2712H30.1981C30.6381 13.2712 30.9981 13.6312 30.9981 14.0712C30.9981 14.5112 30.6381 14.8712 30.1981 14.8712Z"
                  fill="black"
                />
              </svg>
              <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                Corporate Law
              </h3>
              <p className="text-black text-base font-normal font-['Inter'] leading-normal">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat pellentesque. Potenti porta mauris nec vulputate. Massa
                sagittis lectus montes vel sit. Faucibus odio in ut massa in
                integer ultrices lacus est. Tempus ultrices placerat tellus
                morbi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section
        className="relative h-65 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/b581531e1783737280045335ed467c30e6095145?width=2880')`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <h2 className="text-white font-bold text-4xl font-['Mulish'] capitalize">
            Have legal questions? Ask our experts!
          </h2>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] px-8 py-4">
            Ask an expert
          </button>
        </div>
      </section>

      {/* Legal Excellence Section */}
      <section className="px-4 md:px-16 lg:px-20 py-12 md:py-15 flex flex-col lg:flex-row items-center gap-6">
        <img
          className="w-full lg:w-1/2 max-w-2xl"
          src="https://api.builder.io/api/v1/image/assets/TEMP/d1f6b8c35230859c7d359713f3bf9f4680be6aa1?width=1052"
          alt="Legal team"
        />
        <div className="flex flex-col items-center justify-center gap-10 text-center lg:w-1/2">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish']">
            Legal Excellence, Personalized Care
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
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-25 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-6 max-w-159">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize text-center">
            What our client says
          </h2>
          <p className="text-black text-base font-normal font-['Inter'] text-center">
            Our Testimonials
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-16 lg:px-20 w-full gap-8">
          <div className="flex flex-col gap-5 w-full lg:w-1/2 px-4 lg:px-16">
            <p className="text-black text-xl font-normal leading-relaxed font-['Inter']">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
              quisque odio mauris lectus consequat sed. Pretium purus feugiat
              volutpat pellentesque.Potenti porta mauris nec vulputate.
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-black font-bold text-2xl font-['Mulish']">
                Kirsten Gutierrez
              </h3>
              <p className="text-lawfirm-brown-light font-bold text-base font-['Inter']">
                Founder K&G Company
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-0 h-48 bg-lawfirm-brown-light absolute left-5 top-0"></div>
            <svg
              className="w-10 h-10 absolute left-0 top-10"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M25.6738 23.5814C25.6738 24.2946 25.4409 24.8837 24.9749 25.3488C24.54 25.7829 23.9654 26 23.2509 26C22.5364 26 21.9462 25.7519 21.4803 25.2558C21.0143 24.7597 20.7814 24.031 20.7814 23.0698C20.7814 21.8605 21.1541 20.4496 21.8996 18.8372C22.6762 17.2248 23.7168 15.6124 25.0215 14L26 14.8837C25.037 16.155 24.3381 17.3023 23.9032 18.3256C23.4683 19.3178 23.2198 20.2636 23.1577 21.1628H23.2509C23.9654 21.1628 24.54 21.3953 24.9749 21.8605C25.4409 22.2946 25.6738 22.8682 25.6738 23.5814ZM17.8459 23.5814C17.8459 24.2946 17.6284 24.8837 17.1935 25.3488C16.7587 25.7829 16.184 26 15.4695 26C14.7551 26 14.1649 25.7519 13.6989 25.2558C13.233 24.7597 13 24.031 13 23.0698C13 21.8605 13.3728 20.4496 14.1183 18.8372C14.8638 17.2248 15.8889 15.6124 17.1935 14L18.2186 14.8837C17.2557 16.155 16.5412 17.3023 16.0753 18.3256C15.6404 19.3178 15.3919 20.2636 15.3297 21.1628H15.4695C16.184 21.1628 16.7587 21.3953 17.1935 21.8605C17.6284 22.2946 17.8459 22.8682 17.8459 23.5814Z"
                fill="#94744E"
              />
            </svg>
          </div>
          <div
            className="h-62 bg-cover bg-center flex items-end p-9"
            style={{
              backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/f58516f4c1b6e3b8fbb9280c0acb47b0bce0f565?width=612')`,
            }}
          >
            <span className="text-lawfirm-text-light font-bold text-xl font-['Inter']">
              Julio Jefferson
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="relative py-16 md:py-30 px-4 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/bf58f53e62571d2363c7deca4166f6aeba808ee8?width=2880')`,
        }}
      >
        <div className="flex flex-col items-center gap-10 py-16 lg:py-30">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white font-bold text-xl font-['Inter']">
              Lawyer
            </span>
            <div className="w-18 h-18 relative">
              <svg
                className="w-15 h-17 absolute left-2 top-0.5 fill-white"
                viewBox="0 0 62 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.0011 70.0922L14.0736 59.6859C5.71391 54.4828 0.730469 46.1925 0.730469 37.4628V6.9725L31.0011 0.3125L61.2717 6.9725V37.4628C61.2717 46.1925 56.2883 54.4828 47.9286 59.6397L31.0011 70.0922ZM5.35547 10.7188V37.4628C5.35547 44.5738 9.51797 51.3378 16.5133 55.7084L31.0011 64.6578L45.4889 55.7084C52.4264 51.3956 56.6467 44.5738 56.6467 37.4628V10.7188L31.0011 4.99531L5.35547 10.7188Z"
                  fill="white"
                />
              </svg>
              <svg
                className="w-10 h-10 absolute left-4 top-3"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_contact)">
                  <path
                    d="M0.265625 19.3736C0.265625 22.5613 2.85909 25.1548 6.04688 25.1548C9.23466 25.1548 11.8281 22.5613 11.8281 19.3736C11.8281 19.2062 11.7918 19.041 11.7217 18.889L7.84376 10.4868C9.6607 10.3821 11.4586 9.90527 13.0856 9.09165L13.2146 9.02721C14.6243 8.32236 16.128 7.84437 17.6865 7.60418V27.0819H22.3115V7.60418C23.87 7.84445 25.3737 8.32244 26.7832 9.02713L26.9122 9.09158C28.5394 9.90519 30.3373 10.382 32.1542 10.4868L28.2762 18.889C28.2061 19.041 28.1698 19.2062 28.1698 19.3736C28.1698 22.5613 30.7633 25.1548 33.951 25.1548C37.1388 25.1548 39.7323 22.5613 39.7323 19.3736C39.7323 19.2062 39.696 19.041 39.6258 18.889L35.5757 10.1137C36.9733 9.6862 38.2538 8.92053 39.3166 7.85778C39.7681 7.4063 39.7681 6.67417 39.3166 6.22261C38.8651 5.77113 38.133 5.77113 37.6814 6.22261C36.4085 7.49549 34.7162 8.19648 32.9161 8.19648C31.1999 8.19648 29.4814 7.79079 27.9465 7.02328L27.8175 6.95876C26.1359 6.11809 24.3386 5.55669 22.4753 5.29006C22.421 5.28227 22.3663 5.27842 22.3115 5.27842V2.64648C22.3115 1.36929 21.2762 0.333984 19.999 0.333984C18.7218 0.333984 17.6865 1.36929 17.6865 2.64648V5.27842C17.6317 5.27842 17.5769 5.28235 17.5227 5.29006C15.6594 5.55661 13.862 6.11809 12.1806 6.95876L12.0515 7.02328C10.5166 7.79079 8.79806 8.19648 7.0818 8.19648C5.28167 8.19648 3.58938 7.49549 2.3165 6.22269C1.86503 5.77121 1.13289 5.77121 0.681335 6.22269C0.229781 6.67417 0.229781 7.4063 0.681335 7.85786C1.74408 8.92061 3.02459 9.68627 4.42219 10.1138L0.372077 18.889C0.301931 19.041 0.265625 19.2062 0.265625 19.3736ZM31.1332 18.2173L33.951 12.1119L36.7689 18.2173H31.1332ZM6.04688 12.1119L8.86473 18.2173H3.22902L6.04688 12.1119Z"
                    fill="white"
                  />
                  <path
                    d="M38.576 37.4882H31.7542C31.7542 36.211 30.7189 35.1757 29.4417 35.1757H10.5563C9.27906 35.1757 8.24375 36.211 8.24375 37.4882H1.42188C0.783317 37.4882 0.265625 38.0059 0.265625 38.6444C0.265625 39.283 0.783317 39.8007 1.42188 39.8007H38.576C39.2146 39.8007 39.7323 39.283 39.7323 38.6444C39.7323 38.0059 39.2146 37.4882 38.576 37.4882Z"
                    fill="white"
                  />
                  <path
                    d="M24.8151 29.3945H15.1797C13.9025 29.3945 12.8672 30.4298 12.8672 31.707V32.8633H27.1276V31.707C27.1276 30.4298 26.0923 29.3945 24.8151 29.3945Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_contact">
                    <rect
                      width="39.4667"
                      height="39.4667"
                      fill="white"
                      transform="translate(0.265625 0.333984)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <h2 className="text-white font-bold text-5xl font-['Mulish'] capitalize text-center max-w-104">
            Request a free consultation
          </h2>
          <p className="text-white text-base font-normal leading-relaxed font-['Inter'] text-center max-w-104">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
            quisque odio mauris lectus consequat sed. Pretium purus feugiat
            volutpat pellentesque.Potenti porta mauris nec vulputate.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-lawfirm-cream-dark p-6 md:p-10 flex flex-col gap-6 w-full lg:w-auto lg:min-w-96">
          <div className="flex gap-6">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-black font-bold text-base font-['Inter']">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white p-3.5 text-base font-['Inter'] text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-black font-bold text-base font-['Inter']">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="bg-white p-3.5 text-base font-['Inter'] text-gray-500"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-black font-bold text-base font-['Inter']">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white p-3.5 text-base font-['Inter'] text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-black font-bold text-base font-['Inter']">
                Service
              </label>
              <div className="relative">
                <select className="bg-white p-3.5 text-base font-['Inter'] text-gray-500 w-full appearance-none">
                  <option>Civil Law</option>
                  <option>Business Law</option>
                  <option>Family Law</option>
                  <option>Real Estate</option>
                </select>
                <svg
                  className="w-4 h-4 absolute right-3.5 top-1/2 transform -translate-y-1/2"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.64604 4.64601C1.69249 4.59945 1.74766 4.5625 1.80841 4.5373C1.86915 4.51209 1.93427 4.49911 2.00004 4.49911C2.06581 4.49911 2.13093 4.51209 2.19167 4.5373C2.25242 4.5625 2.30759 4.59945 2.35404 4.64601L8.00004 10.293L13.646 4.64601C13.6925 4.59952 13.7477 4.56264 13.8085 4.53749C13.8692 4.51233 13.9343 4.49938 14 4.49938C14.0658 4.49938 14.1309 4.51233 14.1916 4.53749C14.2524 4.56264 14.3076 4.59952 14.354 4.64601C14.4005 4.6925 14.4374 4.74769 14.4626 4.80842C14.4877 4.86916 14.5007 4.93426 14.5007 5.00001C14.5007 5.06575 14.4877 5.13085 14.4626 5.19159C14.4374 5.25233 14.4005 5.30752 14.354 5.35401L8.35404 11.354C8.30759 11.4006 8.25242 11.4375 8.19167 11.4627C8.13093 11.4879 8.06581 11.5009 8.00004 11.5009C7.93427 11.5009 7.86915 11.4879 7.80841 11.4627C7.74766 11.4375 7.69248 11.4006 7.64604 11.354L1.64604 5.35401C1.59948 5.30756 1.56253 5.25239 1.53733 5.19164C1.51212 5.1309 1.49915 5.06578 1.49915 5.00001C1.49915 4.93424 1.51212 4.86912 1.53733 4.80837C1.56253 4.74763 1.59948 4.69245 1.64604 4.64601Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-black font-bold text-base font-['Inter']">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="bg-white p-3.5 text-base font-['Inter'] text-gray-500"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-black font-bold text-base font-['Inter']">
              Message
            </label>
            <textarea
              placeholder="Message"
              rows={8}
              className="bg-white p-3.5 text-base font-['Inter'] text-gray-500 resize-none"
            ></textarea>
          </div>
          <button className="bg-lawfirm-brown text-white font-bold text-xl font-['Mulish'] py-4 px-8 w-full">
            Request consultation
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-lawfirm-cream py-12 md:py-15 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-159">
          <h2 className="text-lawfirm-brown font-bold text-5xl font-['Mulish'] capitalize text-center">
            Our blog
          </h2>
          <p className="text-black text-xl font-normal leading-relaxed font-['Inter'] text-center">
            Adipiscing nam neque hendrerit nec pellentesque diamarius quisque
            odio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 lg:px-20">
          {/* Blog Card 1 */}
          <div className="flex flex-col">
            <img
              className="h-70 w-full object-cover"
              src="https://api.builder.io/api/v1/image/assets/TEMP/5173ba20672b19417617d1b8cb67b018f4ddc211?width=832"
              alt="Legal consultation"
            />
            <div className="flex flex-col gap-5 py-2">
              <div className="flex flex-col gap-3">
                <p className="text-black opacity-80 text-base font-['Inter']">
                  November 9,2023
                </p>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Legal Consultation and Advice
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              className="h-70 w-full object-cover"
              src="https://api.builder.io/api/v1/image/assets/TEMP/4e065f2c64342218bff4530c0e47d1bba7f73c21?width=832"
              alt="Law and justice"
            />
            <div className="flex flex-col gap-5 py-2">
              <div className="flex flex-col gap-3">
                <p className="text-black opacity-80 text-base font-['Inter']">
                  November 9,2023
                </p>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Law and Justice
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              className="h-70 w-full object-cover"
              src="https://api.builder.io/api/v1/image/assets/TEMP/6f14742603a957e1f9b0a6a3f7fd256e6f8fb917?width=832"
              alt="Crime and civil law"
            />
            <div className="flex flex-col gap-5 py-2">
              <div className="flex flex-col gap-3">
                <p className="text-black opacity-80 text-base font-['Inter']">
                  November 9,2023
                </p>
                <h3 className="text-lawfirm-brown font-bold text-xl font-['Mulish']">
                  Crime, civil law, justice and rights
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold text-xs font-['Inter'] uppercase">
                  Read more
                </span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

export default Homepage;
