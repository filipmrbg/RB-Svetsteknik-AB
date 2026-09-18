export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'svetsning',
    title: 'Alla typer av svetsning',
    shortDescription: 'Certifierad licenssvetsning inom TIG, MIG/MAG och MMA för tryckkärl, rörsystem, stål, rostfritt och aluminium.',
    heroText: 'Certifierad svetsning med högsta precision och full spårbarhet i Byske, Skellefteå och hela Västerbotten.',
    detailedDescription: `RB Svetsteknik AB levererar fackmannamässiga svetsarbeten med högsta tekniska precision för industri, bygg och verkstad. Vi behärskar samtliga etablerade svetsmetoder inklusive TIG, MIG/MAG och manuell metallbågsvetsning (MMA) i svartstål, rostfria legeringar och aluminium.

Från avancerad rörsvetsning och tryckbärande rörledningar till grovplåt och specialtillverkade konstruktionsdetaljer garanterar vi svetsfogar med optimal genombränning, ytfinish och hållfasthet. Vårt arbete utförs alltid enligt strikta kvalitetsstandarder och gällande svetsprocedurer.`,
    heroImage: '/gallery/gallery-3.jpg',
    image: '/gallery/gallery-3.jpg',
    href: '/tjanster#svetsning',
    tag: 'Svetsning',
    badge: 'Licenssvetsning',
    highlights: [
      'TIG, MIG/MAG och MMA i stål, rostfritt och aluminium',
      'Certifierad rörsvetsning och tryckkärlskompetens',
      'Svetsarbeten enligt standardiserade svetsprocedurer (WPS)',
      'Högsta finish, röntgensäkra fogar och full dokumentation',
    ],
    faq: [
      {
        question: 'Vilka svetsmetoder och material arbetar ni med?',
        answer: 'Vi utför svetsning med TIG, MIG/MAG och MMA (pinnsvetsning) i olegerat stål, höghållfast konstruktionsstål, rostfritt, syrafast och aluminium.',
      },
      {
        question: 'Har ni svetsarprövningar och giltiga certifikat?',
        answer: 'Ja, alla våra svetsarbeten utförs av behöriga svetsare med aktuella svetsarprövningar enligt relevanta ISO- och EN-standarder.',
      },
    ],
  },
  {
    slug: 'stalmontage',
    title: 'Stålmontage',
    shortDescription: 'Komplett stålmontage, stomresning, avväxlingar och bärande stålkonstruktioner för industrilokaler, lagerhallar och fastigheter.',
    heroText: 'Bärande stålkonstruktioner och stomresning med säker och precis montering från grund till nock.',
    detailedDescription: `Vi på RB Svetsteknik AB utför professionellt stålmontage för nybyggnationer, tillbyggnader och lokalanpassningar i Skellefteåregionen. Vi monterar bärande pelare, takstolar, fackverk, avväxlingsbalkar och entresolplan för industrilokaler och lagerhallar.

Vi samordnar montageprocessen med kranbilar och skylifts för ett effektivt och säkert arbetsflöde på byggarbetsplatsen. Utöver bärande stålkonstruktioner tillverkar och monterar vi även trappor, räcken, ramper och förstärkningsdetaljer.`,
    heroImage: '/gallery/gallery-5.jpg',
    image: '/gallery/gallery-5.jpg',
    href: '/tjanster#stalmontage',
    tag: 'Stålmontage',
    badge: 'Bärande Stål',
    highlights: [
      'Stomresning av pelare, balkar och fackverk för industri och lager',
      'Avväxlingar och bärande förstärkningar vid ombyggnationer',
      'Tillverkning och montering av industritrappor, räcken och ramper',
      'Säker montering med certifierad lyft- och kranutrustning',
    ],
    faq: [
      {
        question: 'Kan ni hjälpa till med både tillverkning och montage?',
        answer: 'Ja, vi hanterar hela kedjan från tillskärning, håltagning och förmontering i verkstad till slutlig resning och sammanfogning på plats.',
      },
      {
        question: 'Hanterar ni montage av avväxlingsbalkar vid rivning av bärande väggar?',
        answer: 'Absolut. Vi monterar avväxlingar och stödpelare med hög precision enligt konstruktionsritningar så att byggnadens bärighet säkerställs.',
      },
    ],
  },
  {
    slug: 'industriservice',
    title: 'Industriservice',
    shortDescription: 'Förebyggande och avhjälpande industriservice, slitplåtsbyten, maskinreparationer och akut haveriberedskap för tillverknings- och processindustrin.',
    heroText: 'Pålitlig industriservice och mekaniskt underhåll som minimerar driftstopp och maximerar produktionen.',
    detailedDescription: `Kontinuerlig drift och driftsäkerhet är avgörande för lönsamheten i modern industri. RB Svetsteknik AB bistår industriföretag, sågverk, gruvverksamheter och processanläggningar i Västerbotten med kvalificerad industriservice och mekaniskt underhåll.

Vi utför planerade underhållsstopp, renovering av transportörer och krossar, byten av slitplåtar och hårdpåläggssvetsning i slitutsatta miljöer. Med bred mekanisk kompetens och korta inställelsetider löser vi akuta problem snabbt för att minimera kostsamma produktionsstopp.`,
    heroImage: '/gallery/gallery-4.jpg',
    image: '/gallery/gallery-4.jpg',
    href: '/tjanster#industriservice',
    tag: 'Industriservice',
    badge: 'Driftsäkerhet',
    highlights: [
      'Förebyggande och avhjälpande underhåll under planerade driftstopp',
      'Slitplåtsbyten och hårdpåläggssvetsning på krossar och matare',
      'Reparation och modifiering av transportbanor och silos',
      'Snabba haveriinsatser för att förkorta oplanerade driftstopp',
    ],
    faq: [
      {
        question: 'Arbetar ni under planerade underhållsstopp och helger?',
        answer: 'Ja, vi anpassar våra arbetstider efter era driftstopp och revisionsperioder för att arbetet ska bli klart i utsatt tid.',
      },
      {
        question: 'Vilka typer av industrianläggningar servar ni?',
        answer: 'Vi har bred erfarenhet från mineral- och gruvindustri, sågverk, processanläggningar, värmeverk och tillverkande verkstadsindustri.',
      },
    ],
  },
  {
    slug: 'faltservice',
    title: 'Fältservice',
    shortDescription: 'Mobil fältservice med fullutrustad servicebil för snabba reparationer, svetsarbeten och akuta insatser direkt på plats.',
    heroText: 'Mobil fältservice direkt till er arbetsplats med egen utrustning och snabb inställelsetid.',
    detailedDescription: `När haveriet inträffar ute på fältet eller maskinen inte kan transporteras till verkstad rycker RB Svetsteknik AB ut med fullt utrustad mobil serviceenhet. Vår fältservicebuss rymmer eget elverk, svetsmaskiner, skärutrustning och verktyg för att utföra reparationer direkt på anläggningen, bergtäkten eller bygget.

Vi har mångårig erfarenhet av att arbeta i krävande miljöer och under tuffa väderförhållanden. Vi felsöker, reparerar och svetsar ihop havererade maskinkomponenter direkt på plats så att er drift snabbt kan återupptas.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#faltservice',
    tag: 'Fältservice',
    badge: 'Mobil Service',
    highlights: [
      'Mobil serviceenhet med eget elverk för oberoende fältarbete',
      'Akut reparation av entreprenadmaskiner, skopor och krossar på plats',
      'Diplomerad IWS svetssamordnare för kvalitets- och svetsteknisk styrning',
      'Upprättande och granskning av WPS, WPQR och svetsardokumentation',
    ],
    faq: [
      {
        question: 'Hur långt ut i Västerbotten åker ni med fältservicebussen?',
        answer: 'Vi utgår från Byske och utför fältservice och akuta reparationer i hela Skellefteå kommun samt angränsande delar av Västerbotten och Norrbotten.',
      },
      {
        question: 'Vad innebär IWS support för vårt företag?',
        answer: 'En International Welding Specialist (IWS) agerar svetssamordnare och säkerställer att alla svetsfogar, materialval och procedurer uppfyller gällande Europastandarder och bygghandlingar.',
      },
    ],
  },
];

export default services;
