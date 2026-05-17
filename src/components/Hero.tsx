import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="heroSection">
      <div className="heroGlowLeft" aria-hidden />
      <div className="heroGlowRight" aria-hidden />
      <div className="heroContainer">
        <div className="heroGrid">
          
          {/* COLUNA DE TEXTOS */}
          <div className="heroCopyCol">
            <p className="heroKicker">
              Incensária artesanal
            </p>
            <h1 className="heroTitle">
              Transforme pequenos momentos em rituais de presença
            </h1>
            <p className="heroDescription">
              Alquimias naturais para o ambiente e para o seu estado interno — rituais simples para respirar, limpar e voltar para si.
            </p>
            <div className="heroActions">
              <Link href="#colecoes" className="btnPrimary">
                Explorar Alquimias
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

          {/* COLUNA DA IMAGEM */}
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