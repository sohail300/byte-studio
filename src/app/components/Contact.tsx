import React from "react";
import Image from "next/image";
import { Mail, Twitter } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div className="w-full relative" id="contact">
      <p className="w-full text-center font-raleway text-primary mb-24 font-light">
        Still have more questions? Contact us Below
      </p>

      <p
        className="uppercase text-nowrap text-center leading-[0.7] text-accent select-none font-monigue"
        style={{ fontSize: "min(27vw, 510px)" }}
      >
        Contact Us
      </p>

      <div className="w-full flex justify-center items-center bg-primary text-black py-10">
        <div className="max-w-screen-2xl w-full px-4 sm:px-12 flex flex-col relative mx-auto overflow-clip md:flex-row justify-between items-center">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start select-none">
            <a
              href="https://links.heysohail.xyz/byte-studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 text-lg font-raleway font-black rounded-full bg-accent uppercase hover:text-white transition-all cursor-pointer">
                Book free call
              </button>
            </a>

            <div className="mt-6 flex flex-col justify-start items-center w-2/3">
              <Image
                alt=""
                src="/arrow.webp"
                width={48}
                height={147}
                style={{ filter: "hue-rotate(120deg)" }}
              />

              <div className="flex items-center gap-4 h-16">
                <Image
                  alt="Logo"
                  src="/brand-transparent.png"
                  width={3285}
                  height={399}
                  className="w-fit invert"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <p className="text-center md:text-right font-raleway font-bold w-3/5 italic">
              &quot;We don&apos;t just write code → we tame bugs and perfect
              pixels.&quot;
            </p>

            <div className="font-anton text-center md:text-right text-xl gap-1 flex flex-col mt-4">
              <a href="#work" className="hover:text-accent transition-colors">
                Work
              </a>
              <a
                href="#services"
                className="hover:text-accent transition-colors"
              >
                Services
              </a>
              <a href="#faq" className="hover:text-accent transition-colors">
                FAQs
              </a>
              <a
                href="https://links.heysohail.xyz/byte-studio"
                className="hover:text-accent transition-colors "
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="mailto:bytestudioagency@gmail.com"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
                aria-label="Send email to dotprolabs@gmail.com"
              >
                <Mail width={32} height={32} strokeWidth={2} />
              </a>

              <a
                href="https://x.com/bytestudioagcy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter width={32} height={32} strokeWidth={2} />
              </a>

              <a target="_blank" rel="noopener noreferrer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
