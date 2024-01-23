"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { JSX, SVGProps, SetStateAction, useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { toast } from "./ui/use-toast";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import { Icons } from "./icons";

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, isLoading] = useState(true);
  const [filteredEmails, setFilteredEmails] = useState<{ email: string }[]>([]);
  const [buttonText, setButtonText] = useState("");
  const [buttonLoading, isbuttonLoading] = useState(false);
  const [emails, setEmails] = useState([]);

  const updateButton = async () => {
    try {
      isbuttonLoading(true);
      const res = await fetch("/api/updateButton", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ buttonText }),
      });
      toast({
        title: "Button text updated",
      });
      if (res.ok) {
        isbuttonLoading(false);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  // Assuming you have a list of emails
  // const emails = ["test1@test.com", "example2@gmail.com", "example3@gmail.com"];
  useEffect(() => {
    isLoading(true);
    const getEmails = async () => {
      const res = await fetch("/api/email/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm }),
      });

      const { data } = await res.json();
      console.log(data[0].email);

      const filteredEmails = data.filter((item: { email: string }) =>
        item.email.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      console.log("filtered", filteredEmails);
      setFilteredEmails(filteredEmails);
      isLoading(false);
      // console.log(filteredEmails.map((item: { email: any }) => item.email));
    };

    getEmails();
  }, [searchTerm]);
  return (
    <main className="flex flex-col items-center justify-center ">
      <section className="w-full h-screen sm:h-auto bg-purple-100 md:block hidden dark:bg-white-800">
        <div className="flex h-screen sm:h-auto dark:bg-purple-900">
          <div className="flex flex-col w-full md:w-64 border-r border-purple-200 dark:border-purple-800 md:block hidden">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link
                className="flex items-center gap-2 font-semibold text-white"
                href="#"
              >
                <Package2Icon className="h-6 w-6 text-purple-500" />
                <span className="text-black">DIGI LABS</span>
              </Link>
              <Button
                className="ml-auto h-8 w-8 text-white"
                size="icon"
                variant="secondary"
              >
                <BellIcon className="h-4 w-4 text-purple-500" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2 ">
              <nav className="grid items-start px-4 text-sm font-medium ">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg bg-purple-100 px-3 py-2 text-purple-900  transition-all hover:text-purple-900 dark:bg-purple-800 dark:text-purple-50 dark:hover:text-purple-50"
                  href="#"
                >
                  <PackageIcon className="h-4 w-4" />
                  Products
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <UsersIcon className="h-4 w-4" />
                  Customers
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <LineChartIcon className="h-4 w-4" />
                  Analytics
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-purple-100/40 px-6 dark:bg-purple-800/40">
              <Link className="lg:hidden" href="#">
                <Package2Icon className="h-6 w-6 text-white" />
                <span className="sr-only">Home</span>
              </Link>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                      placeholder="Search by Email..."
                      type="search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border border-purple-200 w-8 h-8 lg:hidden dark:border-purple-800"
                    size="icon"
                    variant="ghost"
                  >
                    <Badge />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel> Home</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem> Products</DropdownMenuItem>
                  <DropdownMenuItem>Customers</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col-2 gap-4 p-4 md:gap-8 md:p-6">
              <section className="w-full h-full flex flex-col sm:h-screen lg:flex-row gap-6 p-6">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Registered Emails</h2>
                  <div className="border rounded-lg w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Email Address</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          {filteredEmails.map((item: { email: any }) => (
                            <TableRow key={item.email}>
                              <TableCell>{item.email}</TableCell>
                            </TableRow>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Upload New Logo</h2>
                  <div className="border rounded-lg w-full p-4">
                    <Label htmlFor="logo-upload">Select Logo</Label>
                    <ImageUpload />
                  </div>
                  <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Update Button Text
                    </h2>
                    <div className="border rounded-lg w-full p-4">
                      <Label htmlFor="button-text">Button Text</Label>
                      <Input
                        className="mt-2"
                        id="button-text"
                        placeholder="Enter new button text"
                        type="text"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                      />
                      <div className="mt-4">
                        <Button className="w-full" onClick={updateButton}>
                          {buttonLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <></>
                          )}
                          Update Button Text
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
      <section className="w-screen min-h-screen overflow-auto bg-purple-100 lg:hidden dark:bg-white-800">
        {" "}
        <div className="flex h-screen sm:h-auto dark:bg-purple-900">
          <div className="flex flex-col w-full md:w-64 border-r border-purple-200 dark:border-purple-800 md:block hidden">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link
                className="flex items-center gap-2 font-semibold text-white"
                href="#"
              >
                <Package2Icon className="h-6 w-6 text-purple-500" />
                <span className="text-black">DIGI LABS</span>
              </Link>
              <Button
                className="ml-auto h-8 w-8 text-white"
                size="icon"
                variant="secondary"
              >
                <BellIcon className="h-4 w-4 text-purple-500" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2 ">
              <nav className="grid items-start px-4 text-sm font-medium ">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg bg-purple-100 px-3 py-2 text-purple-900  transition-all hover:text-purple-900 dark:bg-purple-800 dark:text-purple-50 dark:hover:text-purple-50"
                  href="#"
                >
                  <PackageIcon className="h-4 w-4" />
                  Products
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <UsersIcon className="h-4 w-4" />
                  Customers
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-50"
                  href="#"
                >
                  <LineChartIcon className="h-4 w-4" />
                  Analytics
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-purple-100/40 px-6 dark:bg-purple-800/40">
              <Link className="lg:hidden" href="#">
                <Package2Icon className="h-6 w-6 text-white" />
                <span className="sr-only">Home</span>
              </Link>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                      placeholder="Search by Email..."
                      type="search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border border-purple-200 w-8 h-8 lg:hidden dark:border-purple-800"
                    size="icon"
                    variant="ghost"
                  >
                    <Badge />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel> Home</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem> Products</DropdownMenuItem>
                  <DropdownMenuItem>Customers</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col-2 gap-4 p-4 md:gap-8 md:p-6">
              <section className="w-full h-full flex flex-col sm:h-screen lg:flex-row gap-6 p-6">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Registered Emails</h2>
                  <div className="border rounded-lg w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Email Address</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          {filteredEmails.map((item: { email: any }) => (
                            <TableRow key={item.email}>
                              <TableCell>{item.email}</TableCell>
                            </TableRow>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Upload New Logo</h2>
                  <div className="border rounded-lg w-full p-4">
                    <Label htmlFor="logo-upload">Select Logo</Label>
                    <ImageUpload />
                  </div>
                  <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Update Button Text
                    </h2>
                    <div className="border rounded-lg w-full p-4">
                      <Label htmlFor="button-text">Button Text</Label>
                      <Input
                        className="mt-2"
                        id="button-text"
                        placeholder="Enter new button text"
                        type="text"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                      />
                      <div className="mt-4">
                        <Button className="w-full" onClick={updateButton}>
                          {buttonLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <></>
                          )}
                          Update Button Text
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
