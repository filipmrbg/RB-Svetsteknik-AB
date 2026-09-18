/**
 * CENTRALIZED IMAGE CONFIGURATION - RB SVETSTEKNIK AB
 *
 * All images used across the site are defined here.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  ogImage?: ImageSlot;
  hero: {
    background: ImageSlot;
    videoUrl?: string;
  };
  services: {
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember?: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'RB Svetsteknik AB - Svets och Montage i Byske och Skellefteå',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'RB Svetsteknik AB - Svets och Montage',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'RB Svetsteknik AB Logotyp',
  },

  hero: {
    background: {
      url: '/gallery/gallery-4.jpg',
      alt: 'RB Svetsteknik AB professionell svetsning, stålmontage och industriservice i Västerbotten',
    },
    videoUrl: '/hero-video.mp4',
  },

  services: {
    'svetsning': {
      url: '/gallery/gallery-3.jpg',
      alt: 'Certifierad svetsning i stål, rostfritt och aluminium - RB Svetsteknik AB',
    },
    'stalmontage': {
      url: '/gallery/gallery-5.jpg',
      alt: 'Stålmontage och byggsmide för hallar och industri - RB Svetsteknik AB',
    },
    'industriservice': {
      url: '/gallery/gallery-4.jpg',
      alt: 'Industriservice, slitplåtsbyten och maskinreparationer - RB Svetsteknik AB',
    },
    'faltservice': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Mobil fältservice och IWS svetsansvarig support på plats i Västerbotten',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Specialtillverkning i rostfritt stål och montagekomponenter',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Mobil fältservice och maskinservice i fält',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Precisionssvetsad rörfog och licenssvetsning med hög genombränning',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Tung industriservice och reparation med vinkelslip och svets',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Montage av bärande stålbalkar och pelare i industrilokal',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Stomresning och bärande stålkonstruktion med mobilkran',
    },
  ],

  cta: {
    banner: {
      url: '/gallery/gallery-5.jpg',
      alt: 'RB Svetsteknik AB stålmontage och svetsarbeten',
    },
    midSection: {
      url: '/gallery/gallery-6.jpg',
      alt: 'RB Svetsteknik AB stomresning och stålkonstruktioner',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'RB Svetsteknik AB Svets och Montage i Byske och Skellefteå',
    },
  },

  whyChooseUs: {
    url: '/gallery/gallery-3.jpg',
    alt: 'Certifierat svetsarbete med IWS specialistkompetens - RB Svetsteknik AB',
  },

  ideaToResult: {
    url: '/gallery/gallery-1.jpg',
    alt: 'Från ritning och tillskärning till färdigmonterat stål i Västerbotten',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Specialtillverkning och svetsning av fästelement i rostfritt stål',
      },
      title: 'Specialtillverkning i Rostfritt',
      category: 'Industriservice & Smide',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Fältservice och mekaniskt underhåll på plats i gruvindustrin',
      },
      title: 'Fältservice & Gruvindustri',
      category: 'Fältservice & Montage',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Precisionssvetsning och rörsvetsning med perfekt finish och genombränning',
      },
      title: 'Precisionssvetsning & Rörsvets',
      category: 'Svetsarbeten',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Akut reparation och underhåll av tung industriutrustning',
      },
      title: 'Tung Industriservice & Reparation',
      category: 'Industriservice',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Stålmontage och balkkonstruktioner i industrilokal och verkstad',
      },
      title: 'Stålmontage i Industrilokal',
      category: 'Stålmontage & Byggsmide',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Stomresning av bärande stålpelare och fackverk med mobilkran',
      },
      title: 'Bärande Stålkonstruktion & Stomresning',
      category: 'Stålmontage',
    },
  ],
};

export default images;
