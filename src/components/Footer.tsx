import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contato" className="footerRoot">
      <div className="footerContainer">
        <Link href="#inicio" className="footerLogoLink">
          <Image
            src="/alquimoon-logo.png"
            alt="Alquimoon"
            fill
            className="footerLogoImage"
            priority
            sizes="(max-width: 600px) 220px, 300px"
          />
        </Link>
        <div className="footerTopRow">
          <div className="footerBrandCol">
            <p className="footerBrandText">
              Incensária artesanal. Cada bastão é preparado com calma, plantas
              selecionadas e intenção — para o seu bem-estar e os seus rituais.
            </p>
          </div>
          <div className="footerContactCol">
            <span className="footerContactTitle">
              Contato
            </span>
            <a href="mailto:contato@alquimoon.com.br" className="footerContactMail">
              contato@alquimoon.com.br
            </a>
            <p className="footerContactNote">
              Redes sociais em breve — escreva-nos por email.
            </p>
          </div>
        </div>
        <div className="footerBottomRow">
          <p>© {new Date().getFullYear()} Alquimoon. Todos os direitos reservados.</p>
          <Link href="#inicio" className="footerBackToTop">
            Voltar ao topo
          </Link>
        </div>
      </div>
    </footer>
  );
}
