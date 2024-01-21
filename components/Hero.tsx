"use client";
import Link from "next/link";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const [button, setButton] = useState();
  useEffect(() => {
    const buttonName = async () => {
      const response = await fetch("/api/updateButton");
      const data = await response.json();
      setButton(data.name);
    };
    buttonName();
  }, []);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="mx-auto max-w-[700px] text-2xl md:text-3xl dark:text-gray-400"
              style={{ color: "#582066" }}
            >
              Seamless experience
            </h1>
            <div className="flex items-center justify-center">
              <p
                className="font-bold tracking-tighter text-center text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  lineHeight: "72px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Unleashing The Next Generation Of Card Solutions
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod eget lorem quis pharetra.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              style={{ backgroundColor: "#582066" }}
            >
              {button}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No credit card required
          </p>
        </div>
      </div>
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
function async() {
  throw new Error("Function not implemented.");
}
