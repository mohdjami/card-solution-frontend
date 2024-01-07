import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";

import { CardDescription, CardTitle } from "@/components/ui/card";
import Cards from "./Cards";
import { Button } from "./ui/button";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="mx-auto max-w-[700px] text-4xl md:text-4xl dark:text-gray-400"
              style={{ color: "#000000", fontFamily: "Arial, sans-serif" }}
            >
              Elevating Card Programs with Cutting-Edge Technology
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              style={{ backgroundColor: "#FFFFFF", color: "#582066" }}
              href="#"
            >
              Compare All pro features
              <ArrowRightIcon
                className="ml-2 h-5 w-5"
                style={{ color: "#582066" }}
              />
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No credit card required
          </p>
        </div>
      </div>
      <div>
        {" "}
        <Cards />
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="mx-auto max-w-[700px] text-4xl md:text-4xl dark:text-gray-400"
                style={{ color: "#000000", fontFamily: "Arial, sans-serif" }}
              >
                Elevating Card Programs with Cutting-Edge Technology
              </h1>

              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                style={{ backgroundColor: "#FFFFFF", color: "#582066" }}
                href="#"
              >
                Compare All pro features
                <ArrowRightIcon
                  className="ml-2 h-5 w-5"
                  style={{ color: "#582066" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Image
              alt="Description"
              src="/Scene 3-2 _ Matte (1) 1(1).png"
              width={592}
              height={490}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              alt="Description"
              src="/Image ( 592_490 ).png"
              width={592}
              height={490}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle
              className="text-purple-600 text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "56px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              2 Million
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">Customers</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle
              className="text-purple-600 text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "56px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              {" "}
              1K
            </CardTitle>
            <p className="text-center text-black font-bold">Downloads</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle
              className="text-purple-600 text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "56px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              {" "}
              $73 Million
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">Transaction</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle
              className="text-purple-600 text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "56px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              {" "}
              2.0
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">
              Latest Version
            </p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
        </div>
      </>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex flex-col items-center">
                <Image
                  alt="Description"
                  src="/Hero-Logo-Wise.webp"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <h1
                className="mx-auto max-w-[700px] dark:text-gray-400"
                style={{
                  color: "#000000",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  width: "864px",
                  height: "160px",
                }}
              >
                I had the pleasure of experiencing the next generation of card
                solutions with this incredible product. It's refreshing to see
                such innovation in the financial industry.{" "}
              </h1>
              <div className="flex flex-col items-center">
                <Image
                  alt="Description"
                  src="/Base avatars.png"
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Nick Babich
              </p>
              <p className="mx-auto max-w-[700px] text-black-500 md:text-xl dark:text-white-400">
                Leading Designer
              </p>
              <div className="flex flex-col items-center">
                <Image
                  alt="Description"
                  src="/Frame 744.png"
                  width={100}
                  height={50}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="mx-auto max-w-[700px] dark:text-gray-400"
                style={{
                  color: "#000000",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "48px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Unlock Limitless Possibilities with Our New Card Solutions{" "}
              </h1>
            </div>
            <div className="space-x-4">
              <UnlockCard />
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800">
        <div className="container px-4 md:px-6 flex justify-center items-center ">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="container px-4 md:px-6 flex justify-center items-center ">
              <div className="flex flex-col items-center text-center w-[512px] h-[124px] space-y-4">
                <div className="space-y-2">
                  <h1
                    className="mx-auto max-w-[700px] text-4xl md:text-4xl dark:text-gray-400"
                    style={{
                      color: "#000000",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Mode UI{" "}
                  </h1>
                </div>
                <div className="space-x-4 p-4 bg-white shadow">
                  Mode UI is a comprehensive design system that empowers
                  designers and developers to create cohesive and visually
                  stunning user interfaces across various platforms and devices{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function UnlockCard() {
  return (
    <div className="flex gap-4">
      <Button className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 rounded-md">
        <UnlockIcon className="h-4 w-4" />
        Unlock Your Card
      </Button>
      <Button className="bg-gray-300 text-black flex items-center gap-2 px-4 py-2 rounded-md">
        <HelpCircleIcon className="h-4 w-4" />
        Customer Support
      </Button>
    </div>
  );
}
function HelpCircleIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function UnlockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}
