import { ShieldCheck, Award, Users, Wrench } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const teamMembers = [
  {
    name: 'Rachid Benjo',
    role: 'Grundare & VD / IWS Svetsansvarig',
    desc: 'Över 15 års erfarenhet inom avancerad industrisvetsning, certifierad International Welding Specialist (IWS) med helhetsansvar för produktion, kvalitet och kundkontakt.',
    initials: 'RB',
  },
  {
    name: 'Viktor Holm',
    role: 'Certifierad Svetsare & Montör',
    desc: 'Specialist på TIG- och rörsvetsning i rostfritt stål och aluminium samt montage av bärande stålkonstruktioner på bygg- och industriarbetsplatser.',
    initials: 'VH',
  },
  {
    name: 'Emil Lindqvist',
    role: 'Fältservicetekniker & Byggsmed',
    desc: 'Mobil fältservicetekniker med expertis inom grovplåtsreparationer, slitplåtsbyten, mekaniskt underhåll och akut felsökning direkt på anläggning.',
    initials: 'EL',
  },
];

export default function About() {
  usePageTitle(
    'Om RB Svetsteknik AB | Svets & Montage i Västerbotten',
    'Läs om RB Svetsteknik AB. Vi är specialister på certifierad svetsning, stålmontage, industriservice och fältservice i Byske, Skellefteå och hela Västerbotten.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("/gallery/gallery-4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.82) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Om RB Svetsteknik AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '660px', lineHeight: 1.6 }}>
                Specialister på alla typer av svetsning, bärande stålmontage, industriservice och mobil fältservice med utgångspunkt från Byske över hela Västerbotten.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '90px 0' }}>
        <div style={{ ...container, maxWidth: '1060px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '360px 1fr',
            gap: '50px',
            alignItems: 'start',
          }}>

            {/* Left: Company Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || '/about.jpg'}
                  alt="RB Svetsteknik AB verksamhet och montage"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '360px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    display: 'block',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <span style={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '10px',
                  background: '#e2e8f0',
                  padding: '4px 14px',
                  borderRadius: '999px',
                }}>
                  Vår Bakgrund & Expertis
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  Certifierad svetsteknik och bärande stålmontage
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.02rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    RB Svetsteknik AB grundades med en tydlig vision: att leverera svetstjänster och stålkonstruktioner av högsta hantverksmässiga kvalitet till industri och byggsektorn i norra Sverige. Med utgångspunkt i Byske betjänar vi Skellefteå kommun och hela Västerbotten med både verkstadsbaserad tillverkning och flexibel fältservice.
                  </p>

                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.02rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Vår kompetens spänner över alla typer av svetsning inom TIG, MIG/MAG och MMA, bärande stålmontage, stomresning, avväxlingar och industriservice. Genom vår IWS-kompetens (International Welding Specialist) kan vi dessutom erbjuda kvalificerad svetssamordning, svetsprocedurer och teknisk kvalitetssäkring.
                  </p>

                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Vårt fokus ligger alltid på högsta säkerhet, precision och hållbarhet. Med fullt utrustad mobil serviceenhet och modern maskinpark ser vi till att arbetet slutförs i tid, enligt konstruktionsritning och med högsta finish.
                  </p>

                  {/* Vision Card */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #0f172a',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '28px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      lineHeight: 1.5,
                      margin: '0 0 10px 0',
                    }}>
                      Vår filosofi: Rätt fog från början – kompromisslös precision och hållbarhet i varje detalj.
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      margin: '0 0 12px 0',
                    }}>
                      Oavsett om det rör sig om bärande stålpelare för en industrilokal, processrör i rostfritt stål eller akut fältservice i en bergtäkt är vi en engagerad och pålitlig partner.
                    </p>
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      RB Svetsteknik AB • Byske & Skellefteå
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för offert & rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION C: TEAM SETUP (3 MEMBERS) ─────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
                background: '#e2e8f0',
                padding: '4px 14px',
                borderRadius: '999px',
              }}>
                Vårt Team
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                margin: '0 0 12px 0',
              }}>
                Yrkeskunnande och certifierad kompetens
              </h2>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                Möt personerna bakom RB Svetsteknik AB – ett sammansvetsat team med bred hantverkskunskap och gedigen industrierfarenhet.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              maxWidth: '1060px',
              margin: '0 auto',
            }}
          >
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}>
                  {/* Initials Avatar */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#0f172a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: '18px',
                    boxShadow: '0 6px 18px rgba(15, 23, 42, 0.15)',
                  }}>
                    {member.initials}
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-text-dark)',
                    margin: '0 0 6px 0',
                  }}>
                    {member.name}
                  </h3>

                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#2563eb',
                    marginBottom: '14px',
                    display: 'inline-block',
                  }}>
                    {member.role}
                  </span>

                  <p style={{
                    margin: 0,
                    color: 'var(--color-gray-600)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}>
                    {member.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION D: KÄRNVÄRDEN / TRYGGHET ─────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }} className="values-grid">
            {[
              {
                icon: ShieldCheck,
                title: 'Säkerhet & Behörighet',
                desc: 'Alla svetsarbeten utförs enligt gällande standarder med giltiga svetsarprövningar, heta arbeten och högsta säkerhetskrav.',
              },
              {
                icon: Wrench,
                title: 'Mobil Maskin- & Fältpark',
                desc: 'Fullt utrustad mobil fältservice med eget elverk och moderna svetsaggregat för oberoende och snabba insatser.',
              },
              {
                icon: Award,
                title: 'IWS Specialistkompetens',
                desc: 'Diplomerad International Welding Specialist som garanterar svetsprocedurer (WPS/WPQR) och kvalitetssäkring enligt EN ISO 3834 och EN 1090.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                  }}>
                    <Icon size={24} color="#ffffff" />
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-dark)',
                    margin: '0 0 10px 0',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--color-gray-600)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 280px !important;
            margin: 0 auto;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
