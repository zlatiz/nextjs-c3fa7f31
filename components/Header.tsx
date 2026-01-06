import Image from "next/image";

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/lock-status", label: "Lock Status" },
  { href: "/vessels", label: "Vessels" },
  { href: "/barges", label: "Barges" },
  { href: "/websites/garberbrosinc/images/application.pdf", label: "Employment" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header(): JSX.Element {
  const logo = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeLogo = encodeURI(logo);
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="header-grid">
          <div className="flex items-center gap-4">
            <a href="/" aria-label="Home">
              <Image src={safeLogo} alt="Garber Bros logo" width={160} height={50} unoptimized />
            </a>
          </div>

          <nav className="header-nav" aria-label="Main navigation">
            {(Array.isArray(NAV) ? NAV : []).map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-800">{item.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
