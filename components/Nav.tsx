"use client";
import Link from "next/link";
import * as React from "react";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { JSX, SVGProps, useEffect, useState } from "react";
import { EmailButton } from "./EmailButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Loader2Icon, Menu } from "lucide-react";
import { ContactDrawer } from "./ContactDrawer";
import { useSession } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { Icons } from "./icons";
const routes = [
  {
    href: "/#content",
    label: "Content",
  },
  {
    href: "/#banking",
    label: "Banking",
  },
  {
    href: "/#processing",
    label: "Processing",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#career",
    label: "Career",
  },
];
export default function Navbar() {
  const { data: session } = useSession();
  const [loading, isLoading] = useState(true);
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    isLoading(true);
    async function fetchLogoUrl() {
      const data = await fetch("api/updateLogo");
      if (!data.ok) throw new Error(await data.text());
      const url = await data.json();
      setLogoUrl(url.url);
      isLoading(false);
    }

    fetchLogoUrl();
  }, []);

  return (
    <main>
      {" "}
      <div className="flex items-center ">
        <Sheet>
          <SheetTrigger className="flex flex-row items-center w-full md:hidden">
            <div className="flex justify-between w-full">
              <Menu className="md:hidden" />
              {loading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Link href="/">
                  <Image src={logoUrl} alt="Logo" width={50} height={50} />
                </Link>
              )}
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  className="block px-2 py-1 text-lg"
                >
                  {route.label}
                </Link>
              ))}{" "}
              {session?.user.role === "admin" ? (
                <Link href="/admin" className="block px-2 py-1 text-lg">
                  Admin{" "}
                </Link>
              ) : (
                <></>
              )}
              {session?.user ? (
                <UserAccountNav />
              ) : (
                <Link
                  className={buttonVariants({ variant: "secondary" })}
                  href="/signin"
                >
                  Sign in
                </Link>
              )}
              <EmailButton />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <header className="flex h-5 sm:h-20 w-full shrink-0 items-center px-4 md:px-6">
        {" "}
        <div className="w-[150px]">
          {loading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Link className="mr-6 hidden lg:flex" href="/">
              <Image src={logoUrl} alt="Logo" width={100} height={100} />{" "}
            </Link>
          )}
        </div>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  style={{ opacity: 0.5 }}
                  href="#"
                >
                  <MoonIcon className="h-4 w-4 mr-2" />
                  Mode UI
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <TextIcon className="h-4 w-4 mr-2" />
                  Content
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Banking
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Processing
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  About
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Career
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                {session?.user.role === "admin" ? (
                  <Link
                    href="/admin"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  >
                    Admin{" "}
                  </Link>
                ) : (
                  <></>
                )}
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <ContactDrawer />
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex p-5 md:hidden lg:flex hidden">
          <EmailButton />
          &nbsp; &nbsp;
          {session?.user ? (
            <UserAccountNav />
          ) : (
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/signin"
            >
              Sign in
            </Link>
          )}
        </div>
      </header>
    </main>
  );
}

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function LogoutIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 17l5-5-5-5M19.8 12H9M11 3h6a2 2 0 0 1 2 2v6m-6 0V3" />
    </svg>
  );
}

function TextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
