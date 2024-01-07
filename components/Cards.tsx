import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeadingText from "@/components/heading-text";

function Cards() {
  return (
    <>
      <div className="flex flex-grow flex-col justify-between gap-4 p-6 text-left bg-white dark:bg-secondary">
        {" "}
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/Big Icons(2).png"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>{" "}
        <CardTitle className="text-2xl text-black-600 text-center">
          Globally Accepted
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </div>
      <div className="flex flex-grow flex-col justify-between gap-4 p-6 text-left bg-white dark:bg-secondary">
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/Big Icons(1).png"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>{" "}
        <CardTitle className="text-2xl text-black-600 text-center">
          Biometric Integrated
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </div>
      <div className="flex flex-grow flex-col justify-between gap-4 p-6 text-left bg-white dark:bg-secondary">
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/Big Icons.png"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>{" "}
        <CardTitle className="text-2xl text-black-600 text-center">
          Fully Secured
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </div>
    </>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-white" id="features">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <HeadingText>Features</HeadingText>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
          <Cards />
        </div>
      </div>
    </section>
  );
}
