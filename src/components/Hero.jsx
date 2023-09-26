import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
export default function Hero() {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 md:col-span-6">
            <div className="py-[50px]">
              <h2 className="font-bold text-[70px] leading-[80px] text-gray-900">
                We boost <br /> growth for your <br /> statup business
              </h2>
              <p className="text-[22px] text-gray-700 font-semibold pt-[16px]">
                Our goal is top at the heart of creativity services industry as
                a digital creator. In has a after comment
              </p>

              <div className="block mt-[60px] ">
                <div className="flex items-center gap-[30px]">
                  <div>
                    <Link
                      href="#"
                      className=" py-[14px] px-[30px] bg-[#FE8A3C] rounded-lg font-semibold text-white hover:bg-[#FF6600] transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className=" py-[14px] px-[30px] rounded-lg flex items-center gap-[10px] font-semibold text-white"
                    >
                      <span>
                        <img src="/images/Learn More icon.png" alt="" />
                      </span>
                      <span className="text-gray-700 font-medium text-[18px]">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <div>
                <img
                  src="/images/profile.png"
                  alt=""
                  className="object-cover ml-auto w-full"
                />
              </div>
              {/* shape -1 */}
              <div className="absolute top-[200px] md:top-[130px] left-0 bg-white drop-shadow-lg p-[20px] rounded-xl">
                <div className="flex items-center gap-[20px]">
                  <div>
                    <img src="/images/Activity.png" alt="" />
                  </div>
                  <div>
                    <p>100% Business Growth</p>
                    <div className="flex gap-[10px] items-center">
                      <span>
                        <FaStar className="text-[#FEBB43]" />
                      </span>
                      <span>4.9</span>
                      <span className="text-[16px] font-medium">
                        (1520 Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* shape -2 */}
              <div className="absolute bottom-[220px] left-[360px] md:left-[-95px] bg-white drop-shadow-lg p-[20px] rounded-xl">
                <div className="flex items-center gap-[20px]">
                  <div>
                    <p>1000,000 Happy Clients</p>
                    <div className="flex gap-[10px] items-center">
                      <span>
                        <FaStar className="text-[#FEBB43]" />
                      </span>
                      <span>4.9</span>
                      <span className="text-[16px] font-medium">
                        (15k Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
