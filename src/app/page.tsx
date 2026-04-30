import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const colecoes = [
  {
    titulo: "Terapêuticos",
    desc: "Misturas suaves com ervas e óleos essenciais para respirar com mais calma, dormir melhor ou clarear o ambiente do dia a dia.",
    tag: "Bem-estar",
  },
  {
    titulo: "Ritualísticos",
    desc: "Resinas, madeiras sagradas e notas profundas — pensados para marcar transições, meditação e espaços de intenção.",
    tag: "Ritual",
  },
  {
    titulo: "Naturais",
    desc: "Ingredientes de origem vegetal, colagem manual e secagem lenta. Sem fragrâncias sintéticas nem acelerantes desnecessários.",
    tag: "100% natural",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <section
          id="sobre"
          className="section sectionBorderTop"
          style={{
            background:
              "linear-gradient(180deg, rgba(235,224,212,0.55), rgba(245,235,224,0.85))",
          }}
        >
          <div className="containerPage">
            <div className="sectionHeader">
              <div className="sectionKicker">Sobre</div>
              <h2 className="sectionTitle">
                Artesanato que respeita o tempo das plantas
              </h2>
              <p className="sectionSubtitle">
                Incensos naturais, terapêuticos e ritualísticos feitos à mão —
                com ingredientes vegetais e processos lentos, para um aroma
                limpo e um ambiente com intenção.
              </p>
            </div>
            <div className="dividerGlow" style={{ marginTop: "2.75rem" }} />

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="badge">Plantas selecionadas</span>
                <span className="badge">Secagem lenta</span>
                <span className="badge">Sem sintéticos</span>
              </div>
              <p className="mt-7 leading-relaxed text-ink/80">
                Somos uma incensária pequena e cuidadosa. Selecionamos matérias
                primas naturais — lavanda, ervas, resinas, pólen e madeiras
                aromáticas — e transformamo-las em bastões e cones com método
                próprio, em lotes reduzidos.
              </p>
              <p className="mt-4 leading-relaxed text-ink/80">
                O resultado é fumo limpo, aroma redondo e a sensação de que cada
                sessão é um pequeno ritual, mesmo que seja só um minuto antes
                de começar o dia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="#colecoes" className="btnPrimary">
                  Explorar coleções
                </Link>
                <Link href="#ritual" className="btnSecondary">
                  Como usar no ritual
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="cardInner">
                <div className="font-display text-xl font-semibold text-purple-night">
                  O que torna a Alquimoon diferente
                </div>
                <ul className="mt-6 space-y-4 text-ink/85">
                  <li className="flex gap-3">
                    <span className="mt-1 text-sage" aria-hidden>
                      ◆
                    </span>
                    <span>Preparação manual, do preparado à embalagem.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-lavender-deep" aria-hidden>
                      ◆
                    </span>
                    <span>Fórmulas inspiradas em plantas medicinais e aromáticas.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss" aria-hidden>
                      ◆
                    </span>
                    <span>
                      Paleta aromática roxa e verde: lavanda, artemísia,
                      eucalipto, cipó.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 rounded-xl border border-lavender/15 bg-beige/60 p-5 text-sm leading-relaxed text-ink/75">
                  Ideal para: meditação, limpeza energética, foco no trabalho,
                  leitura, yoga e autocuidado.
                </div>
              </div>
            </div>
            </div>

            <div className="mt-16 w-full">
              <div className="imageSectionBox" style={{ height: "380px" }}>
                <div className="imageSectionPlaceholder">
                  📸 Adicione uma imagem aqui — processos, ingredientes ou inspiração
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="colecoes"
          className="section sectionBorderTop"
          style={{ background: "rgba(250,246,240,0.92)" }}
        >
          <div className="containerPage">
            <div className="sectionHeader">
              <div className="sectionKicker">Coleções</div>
              <h2 className="sectionTitle">Escolha pelo momento</h2>
              <p className="sectionSubtitle">
                Três linhas que conversam entre si — escolha conforme o momento,
                não há fórmula única para todos os dias.
              </p>
            </div>
            <div className="dividerGlow" style={{ marginTop: "2.75rem" }} />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {colecoes.map((c) => (
                <article
                  key={c.titulo}
                  className="group relative overflow-hidden rounded-2xl border border-lavender/18 bg-beige/55 p-8 shadow-[0_18px_40px_rgba(26,21,32,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(26,21,32,0.12)]"
                >
                  <div className="collectionImageBox">
                    <div className="collectionImagePlaceholder">
                      Imagem do produto "{c.titulo}"
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(167,139,202,0.28), transparent 65%)",
                      opacity: 0.8,
                    }}
                  />
                  <span className="badge" style={{ background: "rgba(167,139,202,0.10)", borderColor: "rgba(167,139,202,0.25)" }}>
                    {c.tag}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-purple-night">
                    {c.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {c.desc}
                  </p>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <span className="font-header text-sm font-semibold text-lavender-deep">
                      Em breve na loja
                    </span>
                    <span className="font-display text-2xl text-sage/70" aria-hidden>
                      ✦
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ritual"
          className="section sectionBorderTop"
          style={{
            background:
              "linear-gradient(180deg, rgba(223,211,196,0.40), rgba(245,235,224,0.92))",
          }}
        >
          <div className="containerPage">
            <div className="sectionHeader" style={{ textAlign: "center", margin: "0 auto" }}>
              <div className="sectionKicker">Ritual</div>
              <h2 className="sectionTitle">Um gesto simples, um clima novo</h2>
              <p className="sectionSubtitle">
                Acender um incenso pode ser só aromatizar a casa — ou pode ser o
                sinal de que aquele espaço é teu, que o tempo abranda. A Alquimoon
                existe para quem sente essa diferença.
              </p>
            </div>
            <div className="dividerGlow" style={{ marginTop: "2.75rem" }} />

            <div className="ritualImageGallery">
              <div className="ritualImagePlaceholder">
                🎨 Adicione uma imagem inspiradora aqui — ritual, ambiente ou moment
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left md:grid-cols-3">
              <div className="card">
                <div className="cardInner">
                  <div className="font-display text-2xl text-lavender-deep">01</div>
                  <div className="mt-3 font-header text-sm font-semibold text-purple-night/90">
                    Prepare o espaço
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    Escolha um canto arejado e um suporte estável. Abra uma janela
                    por alguns minutos.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cardInner">
                  <div className="font-display text-2xl text-sage">02</div>
                  <div className="mt-3 font-header text-sm font-semibold text-purple-night/90">
                    Acenda com calma
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    Acenda a ponta e deixe a chama apagar sozinha; fique apenas
                    com a brasa.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cardInner">
                  <div className="font-display text-2xl text-moss">03</div>
                  <div className="mt-3 font-header text-sm font-semibold text-purple-night/90">
                    Volte para você
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    Respire, observe o fumo subir — e use o aroma como âncora para
                    presença.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-lavender/18 bg-cream/75 p-8 shadow-[0_18px_40px_rgba(26,21,32,0.08)]">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="font-display text-2xl font-semibold text-purple-night">
                    Quer encomendar um lote?
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    Conte o objetivo (calma, foco, ritual) e as notas que você ama
                    (lavanda, resina, cítrico, amadeirado). A gente sugere a
                    combinação.
                  </p>
                </div>
                <Link href="#contato" className="btnPrimary">
                  Falar com a Alquimoon
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
