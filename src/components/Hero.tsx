import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="heroSection">
      <div className="heroGlowLeft" aria-hidden />
      <div className="heroGlowRight" aria-hidden />
      <div className="heroContainer">
        <div className="heroGrid">
          <div className="heroCopyCol">
            <p className="heroKicker">
              Incensária artesanal
            </p>
            <h1 className="heroTitle">
              Fumo que sobe devagar.
              <span className="heroTitleAccent">
                Intenção que fica.
              </span>
            </h1>
            <p className="heroDescription">
              Na Alquimoon, cada incenso nasce do encontro entre plantas, resinas
              naturais e o trabalho das mãos — para momentos de calma, foco e
              ritual, sem artifícios industriais.
            </p>
            <div className="heroActions">
              <Link href="#colecoes" className="btnPrimary">
                Ver coleções
              </Link>
              <Link href="#sobre" className="btnSecondary">
                A nossa alquimia vegetal
              </Link>
            </div>
            <div className="heroQuoteWrap">
              <span className="heroStar" aria-hidden>
                ✦
              </span>
              <p className="heroQuote">
                &ldquo;O cheiro da lavanda encontra o verde das folhas — e o bege da
                terra onde tudo cresce.&rdquo;
              </p>
            </div>
          </div>

          <div className="heroImageCol">
            <div className="heroImageFrame">
              <div className="heroImageGlow" />
              <div className="heroImageBorder" />
              <div className="heroImageBox">
                <Image
                  src="/images/criadora-alquimoon.png"
                  alt="Alquimoon — Incensos naturais artesanais"
                  fill
                  className="heroImage"
                  priority
                  sizes="(max-width: 768px) 92vw, 680px"
                />
                <div className="heroImageOverlay" />
              </div>
              <div className="heroImageRing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
