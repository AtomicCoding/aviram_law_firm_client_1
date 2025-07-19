import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: "home" | "services" | "about" | "contact";
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage = "home" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-lawfirm-cream">
      {/* Header */}
      <header className="relative">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-4 md:px-16 lg:px-20 py-5">
          <div className="flex justify-center items-center gap-1">
            {/* Logo */}
            <div className="w-9 h-9 relative">
              <svg
                className="w-7 h-8 absolute left-1 top-0.5 fill-white"
                viewBox="0 0 30 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9997 34.0719L6.76469 29.0094C2.69781 26.4781 0.273438 22.445 0.273438 18.1981V3.365L14.9997 0.125L29.7259 3.365V18.1981C29.7259 22.445 27.3016 26.4781 23.2347 28.9869L14.9997 34.0719ZM2.52344 5.1875V18.1981C2.52344 21.6575 4.54844 24.9481 7.95156 27.0744L14.9997 31.4281L22.0478 27.0744C25.4228 24.9762 27.4759 21.6575 27.4759 18.1981V5.1875L14.9997 2.40313L2.52344 5.1875Z"
                  fill="white"
                />
              </svg>
              <svg
                className="w-5 h-5 absolute left-2 top-1.5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_19)">
                  <path
                    d="M0.398438 9.2625C0.398438 10.8133 1.66013 12.075 3.21094 12.075C4.76175 12.075 6.02344 10.8133 6.02344 9.2625C6.02344 9.18109 6.00578 9.10069 5.97165 9.02678L4.0851 4.9392C4.96901 4.88828 5.84366 4.6563 6.63518 4.26049L6.69795 4.22914C7.38375 3.88624 8.11526 3.6537 8.87344 3.53685V13.0125H11.1234V3.53685C11.8817 3.65374 12.6132 3.88628 13.2989 4.2291L13.3616 4.26045C14.1533 4.65626 15.0279 4.88824 15.9118 4.9392L14.0252 9.02678C13.9911 9.10069 13.9734 9.18109 13.9734 9.2625C13.9734 10.8133 15.2351 12.075 16.7859 12.075C18.3368 12.075 19.5984 10.8133 19.5984 9.2625C19.5984 9.18109 19.5808 9.10069 19.5466 9.02678L17.5763 4.7577C18.2562 4.54973 18.8792 4.17724 19.3962 3.66023C19.6158 3.44059 19.6158 3.08441 19.3962 2.86474C19.1766 2.6451 18.8204 2.6451 18.6007 2.86474C17.9815 3.48398 17.1582 3.825 16.2825 3.825C15.4475 3.825 14.6115 3.62764 13.8648 3.25425L13.8021 3.22286C12.984 2.81389 12.1096 2.54078 11.2031 2.41106C11.1767 2.40727 11.1501 2.4054 11.1234 2.4054V1.125C11.1234 0.503663 10.6198 0 9.99844 0C9.3771 0 8.87344 0.503663 8.87344 1.125V2.4054C8.84678 2.4054 8.82015 2.40731 8.79375 2.41106C7.8873 2.54074 7.01288 2.81389 6.19489 3.22286L6.13211 3.25425C5.38538 3.62764 4.54935 3.825 3.71441 3.825C2.83868 3.825 2.0154 3.48397 1.39616 2.86477C1.17653 2.64514 0.82035 2.64514 0.600675 2.86477C0.381 3.08441 0.381 3.44059 0.600675 3.66026C1.11769 4.17728 1.74064 4.54976 2.42055 4.75774L0.450225 9.02678C0.4161 9.10069 0.398438 9.18109 0.398438 9.2625ZM15.4151 8.7L16.7859 5.72981L18.1568 8.7H15.4151ZM3.21094 5.72981L4.58179 8.7H1.84009L3.21094 5.72981Z"
                    fill="white"
                  />
                  <path
                    d="M19.0359 18.0742H15.7172C15.7172 17.4529 15.2135 16.9492 14.5922 16.9492H5.40469C4.78335 16.9492 4.27969 17.4529 4.27969 18.0742H0.960938C0.650288 18.0742 0.398438 18.3261 0.398438 18.6367C0.398438 18.9474 0.650288 19.1992 0.960938 19.1992H19.0359C19.3466 19.1992 19.5984 18.9474 19.5984 18.6367C19.5984 18.3261 19.3466 18.0742 19.0359 18.0742Z"
                    fill="white"
                  />
                  <path
                    d="M12.3438 14.1367H7.65625C7.03491 14.1367 6.53125 14.6404 6.53125 15.2617V15.8242H13.4688V15.2617C13.4688 14.6404 12.9651 14.1367 12.3438 14.1367Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_19">
                    <rect
                      width="19.2"
                      height="19.2"
                      fill="white"
                      transform="translate(0.398438)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-white font-bold text-base font-['Inter']">
              Law Firm
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`font-['Mulish'] text-base font-bold ${
                currentPage === "home" ? "text-lawfirm-brown" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-['Mulish'] text-base font-bold ${
                currentPage === "services" ? "text-lawfirm-brown" : "text-white"
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`font-['Mulish'] text-base font-bold ${
                currentPage === "about" ? "text-lawfirm-brown" : "text-white"
              }`}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={`font-['Mulish'] text-base font-bold ${
                currentPage === "contact" ? "text-lawfirm-brown" : "text-white"
              }`}
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-3">
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3351 14.0994V16.5994C18.3361 16.8315 18.2886 17.0612 18.1956 17.2739C18.1026 17.4865 17.9662 17.6774 17.7952 17.8343C17.6242 17.9912 17.4223 18.1107 17.2024 18.185C16.9826 18.2594 16.7496 18.287 16.5185 18.2661C13.9542 17.9875 11.491 17.1112 9.32682 15.7078C7.31334 14.4283 5.60626 12.7212 4.32682 10.7078C2.91846 8.53377 2.04202 6.05859 1.76848 3.48276C1.74766 3.25232 1.77505 3.02006 1.8489 2.80078C1.92275 2.5815 2.04146 2.38 2.19745 2.20911C2.35345 2.03822 2.54332 1.90169 2.75498 1.8082C2.96663 1.71471 3.19543 1.66631 3.42682 1.6661H5.92682C6.33124 1.66212 6.72331 1.80533 7.02995 2.06904C7.33659 2.33275 7.53688 2.69897 7.59348 3.09943C7.699 3.89949 7.89469 4.68504 8.17682 5.4411C8.28894 5.73937 8.3132 6.06353 8.24674 6.37516C8.18027 6.6868 8.02587 6.97286 7.80182 7.19943L6.74348 8.25776C7.92978 10.3441 9.65719 12.0715 11.7435 13.2578L12.8018 12.1994C13.0284 11.9754 13.3144 11.821 13.6261 11.7545C13.9377 11.688 14.2619 11.7123 14.5601 11.8244C15.3162 12.1066 16.1018 12.3022 16.9018 12.4078C17.3066 12.4649 17.6763 12.6688 17.9406 12.9807C18.2049 13.2926 18.3453 13.6907 18.3351 14.0994Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-bold text-base font-['Inter']">
              (257) 388-6895
            </span>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 z-40 p-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-['Mulish'] text-base font-bold ${
                  currentPage === "home" ? "text-lawfirm-brown" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-['Mulish'] text-base font-bold ${
                  currentPage === "services"
                    ? "text-lawfirm-brown"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`font-['Mulish'] text-base font-bold ${
                  currentPage === "about" ? "text-lawfirm-brown" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className={`font-['Mulish'] text-base font-bold ${
                  currentPage === "contact"
                    ? "text-lawfirm-brown"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3351 14.0994V16.5994C18.3361 16.8315 18.2886 17.0612 18.1956 17.2739C18.1026 17.4865 17.9662 17.6774 17.7952 17.8343C17.6242 17.9912 17.4223 18.1107 17.2024 18.185C16.9826 18.2594 16.7496 18.287 16.5185 18.2661C13.9542 17.9875 11.491 17.1112 9.32682 15.7078C7.31334 14.4283 5.60626 12.7212 4.32682 10.7078C2.91846 8.53377 2.04202 6.05859 1.76848 3.48276C1.74766 3.25232 1.77505 3.02006 1.8489 2.80078C1.92275 2.5815 2.04146 2.38 2.19745 2.20911C2.35345 2.03822 2.54332 1.90169 2.75498 1.8082C2.96663 1.71471 3.19543 1.66631 3.42682 1.6661H5.92682C6.33124 1.66212 6.72331 1.80533 7.02995 2.06904C7.33659 2.33275 7.53688 2.69897 7.59348 3.09943C7.699 3.89949 7.89469 4.68504 8.17682 5.4411C8.28894 5.73937 8.3132 6.06353 8.24674 6.37516C8.18027 6.6868 8.02587 6.97286 7.80182 7.19943L6.74348 8.25776C7.92978 10.3441 9.65719 12.0715 11.7435 13.2578L12.8018 12.1994C13.0284 11.9754 13.3144 11.821 13.6261 11.7545C13.9377 11.688 14.2619 11.7123 14.5601 11.8244C15.3162 12.1066 16.1018 12.3022 16.9018 12.4078C17.3066 12.4649 17.6763 12.6688 17.9406 12.9807C18.2049 13.2926 18.3453 13.6907 18.3351 14.0994Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white font-bold text-base font-['Inter']">
                  (257) 388-6895
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.90) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/9df1f6cfdc2c3c5d6e10426136e5bfc5709812c1?width=2880')`,
        }}
      >
        <div className="w-full px-4 md:px-16 lg:px-20 py-12 md:py-15 flex flex-col items-center gap-16">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-32 w-full">
            {/* Left Column - Logo and Description */}
            <div className="flex flex-col items-start gap-6 w-76">
              <div className="flex justify-center items-center gap-1">
                <div className="w-9 h-9 relative">
                  <svg
                    className="w-7 h-8 absolute left-1 top-0.5 fill-white"
                    viewBox="0 0 30 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9997 34.0719L6.76469 29.0094C2.69781 26.4781 0.273438 22.445 0.273438 18.1981V3.365L14.9997 0.125L29.7259 3.365V18.1981C29.7259 22.445 27.3016 26.4781 23.2347 28.9869L14.9997 34.0719ZM2.52344 5.1875V18.1981C2.52344 21.6575 4.54844 24.9481 7.95156 27.0744L14.9997 31.4281L22.0478 27.0744C25.4228 24.9762 27.4759 21.6575 27.4759 18.1981V5.1875L14.9997 2.40313L2.52344 5.1875Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 absolute left-2 top-1.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_footer)">
                      <path
                        d="M0.398438 9.2625C0.398438 10.8133 1.66013 12.075 3.21094 12.075C4.76175 12.075 6.02344 10.8133 6.02344 9.2625C6.02344 9.18109 6.00578 9.10069 5.97165 9.02678L4.0851 4.9392C4.96901 4.88828 5.84366 4.6563 6.63518 4.26049L6.69795 4.22914C7.38375 3.88624 8.11526 3.6537 8.87344 3.53685V13.0125H11.1234V3.53685C11.8817 3.65374 12.6132 3.88628 13.2989 4.2291L13.3616 4.26045C14.1533 4.65626 15.0279 4.88824 15.9118 4.9392L14.0252 9.02678C13.9911 9.10069 13.9734 9.18109 13.9734 9.2625C13.9734 10.8133 15.2351 12.075 16.7859 12.075C18.3368 12.075 19.5984 10.8133 19.5984 9.2625C19.5984 9.18109 19.5808 9.10069 19.5466 9.02678L17.5763 4.7577C18.2562 4.54973 18.8792 4.17724 19.3962 3.66023C19.6158 3.44059 19.6158 3.08441 19.3962 2.86474C19.1766 2.6451 18.8204 2.6451 18.6007 2.86474C17.9815 3.48398 17.1582 3.825 16.2825 3.825C15.4475 3.825 14.6115 3.62764 13.8648 3.25425L13.8021 3.22286C12.984 2.81389 12.1096 2.54078 11.2031 2.41106C11.1767 2.40727 11.1501 2.4054 11.1234 2.4054V1.125C11.1234 0.503663 10.6198 0 9.99844 0C9.3771 0 8.87344 0.503663 8.87344 1.125V2.4054C8.84678 2.4054 8.82015 2.40731 8.79375 2.41106C7.8873 2.54074 7.01288 2.81389 6.19489 3.22286L6.13211 3.25425C5.38538 3.62764 4.54935 3.825 3.71441 3.825C2.83868 3.825 2.0154 3.48397 1.39616 2.86477C1.17653 2.64514 0.82035 2.64514 0.600675 2.86477C0.381 3.08441 0.381 3.44059 0.600675 3.66026C1.11769 4.17728 1.74064 4.54976 2.42055 4.75774L0.450225 9.02678C0.4161 9.10069 0.398438 9.18109 0.398438 9.2625ZM15.4151 8.7L16.7859 5.72981L18.1568 8.7H15.4151ZM3.21094 5.72981L4.58179 8.7H1.84009L3.21094 5.72981Z"
                        fill="white"
                      />
                      <path
                        d="M19.0359 18.0742H15.7172C15.7172 17.4529 15.2135 16.9492 14.5922 16.9492H5.40469C4.78335 16.9492 4.27969 17.4529 4.27969 18.0742H0.960938C0.650288 18.0742 0.398438 18.3261 0.398438 18.6367C0.398438 18.9474 0.650288 19.1992 0.960938 19.1992H19.0359C19.3466 19.1992 19.5984 18.9474 19.5984 18.6367C19.5984 18.3261 19.3466 18.0742 19.0359 18.0742Z"
                        fill="white"
                      />
                      <path
                        d="M12.3438 14.1367H7.65625C7.03491 14.1367 6.53125 14.6404 6.53125 15.2617V15.8242H13.4688V15.2617C13.4688 14.6404 12.9651 14.1367 12.3438 14.1367Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_footer">
                        <rect
                          width="19.2"
                          height="19.2"
                          fill="white"
                          transform="translate(0.398438)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-white font-bold text-base font-['Inter']">
                  Law Firm
                </span>
              </div>
              <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed.
              </p>
              <div className="flex items-start gap-3">
                {/* Social Icons */}
                <div className="w-5 h-5 p-1 bg-white rounded-full flex justify-center items-center">
                  <svg
                    className="w-1 h-3 fill-black"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.83732 11.4398V5.99931H5.33914L5.53817 4.12448H3.83732L3.83987 3.1861C3.83987 2.69712 3.88633 2.43511 4.58865 2.43511H5.52753V0.560059H4.0255C2.22131 0.560059 1.58628 1.46956 1.58628 2.99904V4.12469H0.46167V5.99952H1.58628V11.4398H3.83732Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-5 h-5 bg-white rounded flex justify-center items-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.82275 6.4587L4.6526 9.00777C4.9026 9.00777 5.01306 8.89343 5.1526 8.75777L6.35373 7.58982L8.8526 9.43602C9.31248 9.68976 9.64439 9.55838 9.75894 9.00906L11.3994 1.27881C11.5673 0.605457 11.1427 0.300057 10.7027 0.49979L1.07024 4.21404C0.412728 4.47777 0.416561 4.84459 0.950386 5.00804L3.4223 5.77957L9.14505 2.16915C9.41521 2.00532 9.66316 2.0934 9.45965 2.27402L4.8226 6.4586L4.82275 6.4587Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-5 h-5 p-1 bg-white rounded-full flex justify-center items-center">
                  <svg
                    className="w-3 h-3 fill-black"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00054 0.333374C5.18997 0.333374 4.96274 0.341291 4.25163 0.373652C3.5419 0.406153 3.05745 0.518515 2.63355 0.683378C2.19508 0.853657 1.82313 1.08144 1.45257 1.45214C1.08173 1.82269 0.853952 2.19464 0.683117 2.63298C0.517837 3.05701 0.405336 3.5416 0.373391 4.25105C0.341585 4.96217 0.333252 5.18954 0.333252 7.00011C0.333252 8.81068 0.341308 9.03721 0.37353 9.74833C0.406169 10.4581 0.518532 10.9425 0.683256 11.3664C0.853674 11.8049 1.08145 12.1768 1.45215 12.5474C1.82257 12.9182 2.19452 13.1466 2.63272 13.3168C3.05689 13.4817 3.54148 13.5941 4.25107 13.6266C4.96219 13.6589 5.18927 13.6668 6.99971 13.6668C8.81042 13.6668 9.03695 13.6589 9.74807 13.6266C10.4578 13.5941 10.9428 13.4817 11.367 13.3168C11.8053 13.1466 12.1767 12.9182 12.5471 12.5474C12.918 12.1768 13.1457 11.8049 13.3166 11.3665C13.4805 10.9425 13.593 10.4579 13.6263 9.74847C13.6583 9.03735 13.6666 8.81068 13.6666 7.00011C13.6666 5.18954 13.6583 4.96231 13.6263 4.25119C13.593 3.54146 13.4805 3.05701 13.3166 2.63312C13.1457 2.19464 12.918 1.82269 12.5471 1.45214C12.1763 1.0813 11.8055 0.853518 11.3666 0.683378C10.9416 0.518515 10.4568 0.406153 9.7471 0.373652C9.03598 0.341291 8.80959 0.333374 6.99846 0.333374H7.00054Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-white font-bold text-xl font-['Mulish']">
                Links
              </h3>
              <div className="flex flex-col gap-6">
                <Link
                  to="/"
                  className="text-white text-base font-normal leading-relaxed font-['Inter']"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-white text-base font-normal leading-relaxed font-['Inter']"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-white text-base font-normal leading-relaxed font-['Inter']"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-white text-base font-normal leading-relaxed font-['Inter']"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Find Us Column */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-white font-bold text-xl font-['Mulish']">
                Find Us
              </h3>
              <div className="flex flex-col gap-6">
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  43 W. Wellington Road Fairhope
                  <br />
                  AL 36532
                </p>
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  (257) 388-6895
                </p>
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  temmink@outlook.com
                </p>
              </div>
            </div>

            {/* Practice Areas Column */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-white font-bold text-xl font-['Mulish']">
                Practice Areas
              </h3>
              <div className="flex flex-col gap-6">
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  Banking and Finance
                </p>
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  Business Law
                </p>
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  Real Estate
                </p>
                <p className="text-white text-base font-normal leading-relaxed font-['Inter']">
                  Family Law
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white text-center text-base font-normal font-['Inter'] opacity-50">
            ©Copyright Law Firm 2025. Designed by MJ Website Design
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
