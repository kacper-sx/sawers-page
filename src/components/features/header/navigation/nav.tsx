import { mobileNavAtom } from "@/atoms/mobileNav";
import Logo from "@/components/ui/assets/logo";
import { Typography } from "@/components/ui/typography/typography";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useAtom } from "jotai";
import Link from "next/link";
import { RemoveScroll } from "react-remove-scroll";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { navListDataApp } from "../../../../data/nav-list-data";
import { Navigation } from "./mobile-nav";
export default function NavBar() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(mobileNavAtom);
  const isClient = useIsClient();
  return (
    <>
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Logo className="flex lg:w-64 w-40" />
          <div className="sr-only">Sawers LOGO</div>
        </Link>
        <div className="hidden md:flex gap-4 py-3">
          {navListDataApp.map(({ name, href }, index) => (
            <Link
              key={index}
              href={href}
              className="px-4 py-3 hover:bg-dark-foreground-10 rounded-32 "
            >
              <Typography
                variant={"h4"}
                as="span"
                className="text-sawers-blue active:text-sawers-red"
              >
                {name}
              </Typography>
            </Link>
          ))}
        </div>
        {isClient && isMobile && (
          <Hamburger
            label="open navigation"
            toggled={isMenuOpen}
            toggle={() => setMenuOpen((p) => ({ open: !p.open }))}
            duration={0.5}
            color="#242AE0"
          />
        )}
      </nav>
      <RemoveScroll enabled={isMenuOpen}>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <Navigation />
            </>
          )}
        </AnimatePresence>
      </RemoveScroll>
    </>
  );
}
