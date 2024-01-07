import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeadingText from "@/components/heading-text";

function Cards() {
  return (
    <>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-6 text-left dark:bg-secondary">
        <RxActivityLog className="text-3xl" />
        <CardTitle>Globally Accepted</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-6 text-left dark:bg-secondary">
        <BsFire className="text-3xl" />
        <CardTitle>Biometric Integrated</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-6 text-left dark:bg-secondary">
        <TbDeviceAnalytics className="text-3xl" />
        <CardTitle>Fully Secured</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardDescription>
      </Card>
    </>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-secondary" id="features">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <HeadingText>Features</HeadingText>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
          <Cards />
        </div>
      </div>
    </section>
  );
}
