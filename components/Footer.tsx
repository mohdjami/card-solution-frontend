import Image from "next/image";

export default function Component() {
  return (
    <footer className="bg-white text-white py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center text-center">
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/nuxtlogo.jpg"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/Miro.png"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              alt="Description"
              src="/LottieFiles_logo.svg.png"
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/Hero-Logo-Wise.webp"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/dribble.png"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/kinsta.webp"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/angellist-talent8890.jpg"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Description"
            src="/images.png"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </div>
    </footer>
  );
}
