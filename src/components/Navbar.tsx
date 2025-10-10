"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname);
    return (
      <nav className="w-full bg-gray-700 text-white px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">Next Js</Link>
        </div>
        <div className="flex space-x-6">
          <Link
            href="/about"
            className={`
            ${
              pathname === "/about"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`
            ${
              pathname === "/gallery"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            Gallery
          </Link>
          <Link
            href="/products"
            className={`
            ${
              pathname === "/products"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            products
          </Link>
          <Link
            href="/contact"
            className={`
            ${
              pathname === "/contact"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className={`
            ${
              pathname === "/dashboard"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className={`
            ${
              pathname === "/login"
                ? "text-blue-700 font-semibold underline"
                : "text-white hover:underline"
            }
            `}
          >
            Login
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;