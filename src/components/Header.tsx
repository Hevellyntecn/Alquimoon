import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#colecoes", label: "Coleções" },
  { href: "#ritual", label: "Ritual" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="headerRoot">
      <div className="headerContainer">
        <Link href="#inicio" className="headerLogoLink">
          <Image
            src="/alquimoon-logo.png"
            alt="Alquimoon"
            fill
            className="headerLogoImage"
            priority
            sizes="(max-width: 768px) 220px, 300px"
          />
        </Link>
        <nav className="headerDesktopNav" aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="headerDesktopLink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="headerActions">
          <Link href="#contato" className="headerOrderButton">
            Encomendar
          </Link>
          <details className="headerMobileMenu">
            <summary className="headerMobileSummary">
              Menu
            </summary>
            <div className="headerMobilePanel">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="headerMobileLink">
                  {item.label}
                </Link>
              ))}
              <Link href="#contato" className="headerMobileOrderLink">
                Encomendar
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
