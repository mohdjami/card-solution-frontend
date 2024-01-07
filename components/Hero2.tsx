import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeadingText from "@/components/heading-text";
import Cards from "./Cards";

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
            <CardTitle className="text-4xl text-purple-600 text-center">
              2 Million
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">Customers</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle className="text-4xl text-purple-600 text-center">
              1K
            </CardTitle>
            <p className="text-center text-black font-bold">Downloads</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle className="text-4xl text-purple-600 text-center">
              $73 Million
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">Transaction</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 text-left dark:bg-secondary">
            <CardTitle className="text-4xl text-purple-600 text-center">
              2.0
            </CardTitle>{" "}
            <p className="text-center text-black font-bold">Latest Version</p>{" "}
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </CardDescription>
          </div>
        </div>
      </>
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
