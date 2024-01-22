import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <div>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Product</h3>
          <div>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#">Figma design system</Link>
              </li>
              <li>
                <Link href="#">Ios kit</Link>
              </li>
              <li>
                <Link href="#">Android kit</Link>
              </li>
              <li>
                <Link href="#">Wireframe</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <div>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#">Templates</Link>
              </li>
              <li>
                <Link href="#">Landing pages</Link>
              </li>
              <li>
                <Link href="#">Documentation</Link>
              </li>
              <li>
                <Link href="#">Comp library</Link>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div>
          <h3 className="font-bold text-lg mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Disclaimer</Link>
            </li>
            <li>
              <Link href="#">Affiliate programme</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Raise a Ticket</Link>
            </li>
            <li>
              <Link href="#">Report</Link>
            </li>
            <li>
              <Link href="#">Refund Information</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center space-x-4">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
        </div>
        © 2023 Mode UI Inc. All Rights Reserved.{" "}
      </div>
    </footer>
  );
}
