import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Skillz</h1>
            <nav className="flex gap-2">
              <Button variant="ghost" asChild>
                <Link href="/">Players</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">Developers</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/posts">About Us</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/contact">Careers</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/investors">Investors</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/games">Games</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm ">&copy; 2025 Skillz. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm  hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm  hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm  hover:text-foreground">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
