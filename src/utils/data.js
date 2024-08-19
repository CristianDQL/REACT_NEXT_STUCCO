/* Data de varias secciones: Hero, WhatWeDo,  */

/* Array con la información de las personas representadas
en la sección Hero left. Con el path del folder, dentro de public/hero;
bg es el background color y el delay para la animación */

export const HeroData = [
  {
    src: "hero/person1.jpg",
    bg: "#0be4d1",
    delay: 0.1,
  },
  {
    src: "hero/person2.jpg",
    bg: "#fde490",
    delay: 0.3,
  },
  {
    src: "hero/person3.jpg",
    bg: "#00c9f7",
    delay: 0.2,
  },
  {
    src: "hero/person4.jpg",
    bg: "#83cfdf",
    delay: 0.2,
  },
  {
    src: "hero/person5.jpg",
    bg: "#fe8856",
    delay: 0.3,
  },
  {
    src: "hero/person6.jpg",
    bg: "#0be4d1",
    delay: 0.25,
  },
];

/* What we do section, blocques, icon + descripción */
export const features = [
  {
    icon: "/features/Frame-0.png",
    title: "3x monthly revenue",
  },
  {
    icon: "/features/Frame-1.png",
    title: "Flat fee of 6-12%",
  },
  {
    icon: "/features/Frame-2.png",
    title: "Flexible repayments by revenue share",
  },
  {
    icon: "/features/Frame-3.png",
    title: "3-4 years repayment",
  },
  {
    icon: "/features/Frame-4.png",
    title: "$10-100k seed investment",
  },
  {
    icon: "/features/Frame-5.png",
    title: "2% of revenue up to 3X cap",
  },
];

/* OurDiff section */
export const ourDiffFeatures = [
  {
    icon: "/OurDiff/Frame-0.png",
    title: "Data Driven",
    des: "Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation",
  },
  {
    icon: "/OurDiff/Frame-1.png",
    title: "flexible funding",
    des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks",
  },
  {
    icon: "/OurDiff/Frame-2.png",
    title: "value accelerating",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
];

/* CONTACT US /HOW IT WORKS features */
export const hitFeatures = [
  {
    icon: "/howItWorks/Frame-0.png",
    title: "Connect",
    des: "Ready for the next step in your home or commercial improvement? Contact us now to estimate and plan your stucco project.",
  },
  {
    icon: "/howItWorks/Frame-1.png",
    title: "No Obligation",
    des: "There is no obligation to purchase any of our services as every estimate is sent with no strings attached.",
  },
  /* {
    icon: "/howItWorks/Frame-2.png",
    title: "Support Growth",
    des: "Access curated feed of actionable insights and on demand execution expertise. Auto qualify for follow on funding as you grow",
  }, */
];

/* Who we invest features */
export const whoWeInvest = [
  {
    title: "Digital Business Model",
    des: "Digital business model e.g. SaaS, subscription, D2C, apps",
  },
  {
    title: "Revenue Generating",
    des: "Revenue generating for 6 months, > $1k in monthly recurring revenue",
  },
  {
    title: "Support Growth",
    des: "Industry expertise: Fintech, Health, Deep tech, B2B software",
  },
  {
    title: "International Expansion",
    des: "Registered in Australia and Singapore (initially) with appetite for international expansion",
  },
];

/* Testimonios */
export const testimonialsData = [
  {
    comment:
      "SUPER HAPPY! Not only do you get to see the best seed and Early Stage companies but the exciting part is there’s a bunch of investors",
    name: "Zach Lee",
    profession: "QA specialist, Matrix architect",
  },
  {
    comment:
      "I have been working with ZAINKEEPSCODE on our fundraising strategies. They understands the in depth strategies of Venture Capital and early stage fund raising/company",
    name: "Cheryl R. Weiss",
    profession: "Founder, Dubrow Cafeteria",
  },
  {
    comment:
      "Another masterpiece really digging into the art of venture funds, portfolio construction and deal mechanics! Loved it ",
    name: "Vicky R. Lane",
    profession: "Directork, Lafayette Radio",
  },
  {
    comment:
      "BlueVenture is the premier setting for entrepreneurs and investors alike to exchange ideas, and network. As an entrepreneur, I can rely on the BlueVenture. ",
    name: "Jennifer Dubois",
    profession: "Manager, China Coast",
  },
];





/* DEFINITIVOS */

/* sERVICES - copiado de OURDIFF*/
export const heroData = [
  {
    icon: "/Services/luxury-home.jpg",
    title: "Stucco Repair",
    des: "Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation",
  },
  {
    icon: "/Services/luxury-home-2.jpg",
    title: "Re-Stucco",
    des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks",
  },
  {
    icon: "/Services/luxury-home-3.jpg",
    title: "Stucco Patching",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  {
    icon: "/Services/luxury-home-5.jpg",
    title: "Stucco Patching",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  {
    icon: "/Services/2.jpg",
    title: "Stucco Patching",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
];

/* --------------------------------------- */


/* Title Services */
// data.js
export const titleServicesData = {
  tag: "What we do",
  title: "Transforming Spaces with Optimum Stucco and Expert Craftsmanship",
  description: ""
};

/* SERVICES-HOME */
/* Datos para los Splits del Home, cada json será una aprte diferente. Crear uno por cada sección */
export const splitScreenData1 = {
  title: "OPTIMUM STUCCO CONTRACTORS IN MIAMI",
  paragraphs: [
    "Optimum Stucco Inc. is a leading stucco contractor based in Miami-Dade County, established in 2016, specializing in high-quality stucco for residential and commercial properties.",
    /* "We work closely with property owners and architects to deliver expert plastering, drywall, and insulation services, ensuring top-quality craftsmanship in every project." */
    "Stucco is not just a technique; it’s an art. At Optimum Stucco, we treat each project as a unique canvas, aiming for seamless finishes that elevate property aesthetics and value, whether it’s new construction or renovation."
  ],
  buttonText: "Our Journey",
  buttonHref: "/services#serviceP2",
  imageUrl: "/services/luxury-home-2.jpg",
  imageAlt: "Luxury Home Interior"
};
export const splitScreenData2 = {
  title: "COMMERCIAL STUCCO EXCELLENCE",
  paragraphs: [
    "Optimum Stucco leads in providing advanced stucco solutions for commercial properties in Miami, focusing on durability and aesthetic appeal. Our 'Structural Coat' technique, ideal for both new finishes and upgrades over existing stucco, offers cost-effective, stylish protection.",
    "With extensive experience in enhancing corporate buildings and retail spaces, no project is too complex for our skilled team. Choose Optimum Stucco Inc. for a finish that combines resilience with striking curb appeal, elevating the look of your business."
    
    
  ],
  buttonText: "Our Process",
  buttonHref: "/services",
  imageUrl: "/Services/2.jpg",
  imageAlt: "Luxury Home Interior"
};
export const splitScreenData3 = {
  title: "RESIDENTIAL STUCCO EXPERTISE",
  paragraphs: [
    "Optimum Stucco Inc. specializes in stunning residential stucco finishes across Miami. Our 'Residential Elegance' technique ensures a seamless, elegant look, enhancing your home's beauty and value, whether for new builds or updates.",
    "With vast experience in diverse residential projects, we work closely with homeowners to meet their vision. Choose Optimum Stucco Inc. for durable, sophisticated stucco that protects and beautifies your home, adding curb appeal and sophistication."
    
  ],
  buttonText: "Our Technique",
  buttonHref: "/services#serviceP5",
  imageUrl: "/services/luxury-home.jpg",
  imageAlt: "Luxury Home Interior"
};
export const splitScreenData4 = {
  title: "COMPREHENSIVE STUCCO SERVICES",
  paragraphs: [
    "Optimum Stucco offers a wide range of stucco services for residential properties in Miami, including new stucco applications and EIFS (Exterior Insulation and Finish Systems). Our expertise ensures that each project, whether it’s a fresh application or a complex EIFS installation, enhances your home's durability and aesthetic appeal.",
    "EIFS is a popular choice for homeowners seeking superior insulation and a sleek finish. Our skilled team installs EIFS with precision, providing excellent thermal performance and moisture control while offering versatile design options. Trust Optimum Stucco Inc. to deliver high-quality, energy-efficient solutions that elevate the look and comfort of your home."
    
  ],
  buttonText: "Our Formula",
  buttonHref: "/services#serviceP6",
  imageUrl: "/Services/EIFS.png",
  imageAlt: "eifs treatment"
};



/* sERVICES */
export const verticalSliderData1 = [
  {
    icon: "/services/luxury-home-2.jpg",
    title: "OPTIMUM STUCCO CONTRACTORS IN MIAMI",
    des: "Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation",
  },
  {
    icon: "/Services/2.jpg",
    title: "COMMERCIAL STUCCO EXCELLENCE",
    des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks",
  },
  {
    icon: "/services/luxury-home.jpg",
    title: "RESIDENTIAL STUCCO EXPERTISE",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  {
    icon: "/Services/EIFS.png",
    title: "COMPREHENSIVE STUCCO SERVICES",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  
  
];


/* --------------------------------------- */


/* Title PortfolioHome */

export const titlePortfolioData = {
  tag: "Our Selected Stucco Projects",
  title: "Exceptional Stucco Finishes by Miami's Leading Experts",
  description: ""
};


/* PortfolioHome */
export const portfolioData = [
  {
    icon: "/Services/luxury-home.jpg",
    title: "Brickell Bay Drive",
    desc: "Optimum Residential"
    
  },
  {
    icon: "/Services/luxury-home-2.jpg",
    title: "Pan American Drive",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/luxury-home-3.jpg",
    title: "Tiger Tail Avenue",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/luxury-home-5.jpg",
    title: "NE 4th Court",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/2.jpg",
    title: "Prairie Avenue",
    desc: "Optimum Commercial"
  },
  {
    icon: "/Services/luxury-home.jpg",
    title: "Brickell Bay Drive",
    desc: "Optimum Residential"
    
  },
  {
    icon: "/Services/luxury-home-2.jpg",
    title: "Pan American Drive",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/2.jpg",
    title: "Prairie Avenue",
    desc: "Optimum Commercial"
  },
  {
    icon: "/Services/luxury-home.jpg",
    title: "Brickell Bay Drive",
    desc: "Optimum Residential"
    
  },
  
  {
    icon: "/Services/luxury-home-2.jpg",
    title: "Pan American Drive",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/luxury-home-3.jpg",
    title: "Tiger Tail Avenue",
    desc: "Optimum Residential"
  },
  {
    icon: "/Services/luxury-home-5.jpg",
    title: "NE 4th Court",
    desc: "Optimum Residential"
  },
  
];

/* --------------------------------------- */

/* CONTACT US */
export const contactUsData = [
  {
    icon: "/howItWorks/Frame-0.png",
    title: "Connect",
    des: "At Optimum Stucco, we are dedicated to providing top-tier stucco services for residential and commercial properties in Miami. Our team of experts ensures exceptional results that enhance the beauty and durability of your property. With diligent planning, high-quality materials, and meticulous craftsmanship, we bring your vision to life efficiently and effectively.",
  },
  {
    icon: "/howItWorks/Frame-1.png",
    title: "Optimum Services",
    des: "Elevate your property with our unparalleled stucco solutions. Contact us to experience the sophistication and precision that Optimum Stucco delivers. Our commitment to excellence and attention to detail ensures a seamless and distinguished transformation for your home or business. Trust us to enhance your property's value and aesthetic appeal with the highest standards of luxury and quality. Your premier choice for elite stucco services in Miami and surrounding areas."
  },
];
export const contactUsTitleData = {
  tag: "Contact Us",
  title: "",
  description: ""
};



/* --------------------------------------- */

/* PortfolioPage */

export const portfolioPageData = [
    {
      id: 1,
      image: "/Services/luxury-home.jpg",
      title: "Brickell Bay Drive",
      category: "Optimum Residential"
      
    },
    {
      id: 2,
      image: "/Services/luxury-home-2.jpg",
      title: "Pan American Drive",
      category: "Optimum Residential"
    },
    {
      id: 3,
      image: "/Services/luxury-home-3.jpg",
      title: "Tiger Tail Avenue",
      category: "Optimum Residential"
    },
    {
      id: 4,
      image: "/Services/luxury-home-5.jpg",
      title: "NE 4th Court",
      category: "Optimum Commercial"
    },
    {
      id: 5,
      image: "/Services/2.jpg",
      title: "Prairie Avenue",
      category: "Optimum Commercial"
    },
    {
      id: 6,
      image: "/Services/luxury-home.jpg",
      title: "Brickell Bay Drive",
      category: "Optimum Residential"
      
    },
    {
      id: 7,
      image: "/Services/luxury-home-2.jpg",
      title: "Pan American Drive",
      category: "Optimum Residential"
    },
    {
      id: 8,
      image: "/Services/2.jpg",
      title: "Prairie Avenue",
      category: "Optimum Commercial"
    },
    {
      id: 9,
      image: "/Services/luxury-home.jpg",
      title: "Brickell Bay Drive",
      category: "Optimum Residential"
      
    },
    
    {
      id: 10,
      image: "/Services/luxury-home-2.jpg",
      title: "Pan American Drive",
      category: "Optimum Residential"
    },
    {
      id: 11,
      image: "/Services/luxury-home-3.jpg",
      title: "Tiger Tail Avenue",
      category: "Optimum Residential"
    },
    {
      id: 12,
      image: "/Services/luxury-home-5.jpg",
      title: "NE 4th Court",
      category: "Optimum Commercial"
    },
    
];

/* Title PortfolioPage */

export const titlePortfolioPageData = {
  tag: "",
  title: "PORTFOLIO",
  description: "Enter Our Portfolio, where refined craftsmanship and timeless elegance converge.  With over a decade of experience, we have had the privilege of enhancing some of Miami's most distinguished addresses, combining beauty with enduring strength. \n\n Each project reflects our steadfast dedication to quality and attention to detail. If you're looking to elevate your property with a touch of sophistication, we invite you to browse our work and reach out for a personalized consultation."
};
 

/* INDIVIDUAL PORTFOLIOPAGE
MODIFICAR TAMAÑO DE IMAGEN? PARA QUE SALGA COMPLETA dentro de su div 
MODIFICAR IMAGES, TITLE, DESCRIPTION*/
export const individualPortfolioPageData = [
  {
    id: 5,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 1,
    images: ["/Services/luxury-home.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Brickell Bay Drive",
    category: "Optimum Residential",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 2,
    images: ["/Services/luxury-home-2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Pan American Drive",
    category: "Optimum Residential",
    description: "Detailed description of the Pan American Drive project."
  },
  {
    id: 3,
    images: ["/Services/luxury-home-3.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Tiger Tail Avenue",
    category: "Optimum Residential",
    description: "Detailed description of the Tiger Tail Avenue project."
  },
  {
    id: 4,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 6,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 7,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 8,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 9,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 10,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  {
    id: 11,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Tiger Tail Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Tiger Tail Avenue."
  },
  {
    id: 12,
    images: ["/Services/2.jpg", "/Services/luxury-home-5.jpg", "/Services/luxury-home-2.jpg"],
    title: "Prairie Avenue",
    category: "Optimum Commercial",
    description: "Detailed description of the Brickell Bay Drive project."
  },
  /* {
    id: 2,
    images: ["/Services/luxury-home-2.jpg", "/Services/interior-2.jpg", "/Services/pool.jpg"],
    title: "Pan American Drive",
    category: "Optimum Residential",
    description: "Detailed description of the Pan American Drive project."
  },
  {
    id: 3,
    images: ["/Services/luxury-home-3.jpg", "/Services/interior-3.jpg", "/Services/garden.jpg"],
    title: "Tiger Tail Avenue",
    category: "Optimum Residential",
    description: "Detailed description of the Tiger Tail Avenue project."
  }, */
  // Añadir más proyectos según sea necesario
];



/* --------------------------------- */

/* Title Services */
// data.js
export const titleServicesPageData = {
  tag: "Our Services",
  title: "MASTERFUL STUCCO APPLICATIONS FOR LUXURY ESTATES AND COMMERCIAL VENTURES",
  description: ""
};


/* SERVICES-PAGE */
/* Datos para los Splits del Home, cada json será una aprte diferente. Crear uno por cada sección */
export const splitScreenServicesPageData1 = {
  title: "UNDERSTANDING STUCCO: THE OPTIMUM BUILDING MATERIAL",
  paragraphs: [
    "Stucco is a versatile building material made from cement, sand, and lime, applied in several layers over a lathe base. This combination creates a solid, durable veneer that can be textured or smooth, offering a range of aesthetic finishes.",
    /* "We work closely with property owners and architects to deliver expert plastering, drywall, and insulation services, ensuring top-quality craftsmanship in every project." */
    "Chosen for its impressive durability and aesthetic flexibility, stucco is ideal for Florida's climate, providing excellent resistance to impact, fire, and moisture. Beyond its practical benefits, stucco also offers endless design possibilities, making it a top choice for enhancing both traditional and contemporary architecture."
  ],
  /* buttonText: "Our Journey",
  buttonLink: "#", */
  imageUrl: "/services/luxury-home-2.jpg",
  imageAlt: "Luxury Home Interior"
};
/* export const splitScreenServicesPageData2 = {
  title: "UNDERSTANDING STUCCO: THE OPTIMUM BUILDING MATERIAL",
  paragraphs: [
    "Stucco is a versatile building material made from cement, sand, and lime, applied in several layers over a lathe base. This combination creates a solid, durable veneer that can be textured or smooth, offering a range of aesthetic finishes.",
    "Chosen for its impressive durability and aesthetic flexibility, stucco is ideal for Florida's climate, providing excellent resistance to impact, fire, and moisture. Beyond its practical benefits, stucco also offers endless design possibilities, making it a top choice for enhancing both traditional and contemporary architecture."
    
  ],
  
  imageUrl: "/services/luxury-home.jpg",
  imageAlt: "Luxury Home Interior"
}; */
export const splitScreenServicesPageData3 = {
  title: "TRADITIONAL STUCCO: TIME-HONORED TECHNIQUES",
  paragraphs: [
    "Rooted in tradition, our stucco applications combine age-old methods with modern materials for lasting beauty and resilience.",
    "This process involves skilled craftsmanship to achieve the highest quality of finish that not only looks splendid but also stands the test of time."
    
  ],
  /* buttonText: "Our Formula",
  buttonLink: "#", */
  imageUrl: "/Services/luxury-home-2.jpg",
  imageAlt: "eifs treatment"
};
export const splitScreenServicesPageData4 = {
  title: "CUSTOM STUCCO FINISHES: TAILORED TO PERFECTION",
  paragraphs: [
    "Each surface is a canvas awaiting transformation. Our custom stucco finishes are crafted to enhance the unique architecture of each property, ensuring an aesthetic as individual as you.",
    "We offer a variety of finishes, each designed to suit different architectural styles and personal tastes:",
    "- Sand Finish: Subtle texture, ideal for adding sophistication.",
    "- Lace and Skip Trowel: Mediterranean appeal, creating depth and warmth.",
    "- Dash Finish: Rough texture, perfect for rustic settings.",
    "- Smooth Finish: Sleek and modern, achieved through multiple layers and careful sanding."
    
    
  ],
  /* buttonText: "Our Process",
  buttonLink: "#", */
  imageUrl: "/Services/2.jpg",
  imageAlt: "Luxury Home Interior"
};


export const splitScreenServicesPageData5 = {
  title: "PRECISION STUCCO INSTALLATION: FROM START TO FINISH",
  paragraphs: [
    "Precision lies at the heart of all we do. Our installation process is designed to exceed the highest industry standards, ensuring every detail is perfect. We meticulously manage every phase, from the initial assessment to the final touch-ups, ensuring a seamless transition and flawless execution.",
    "Our commitment extends beyond mere aesthetics. We prioritize the cleanliness and integrity of each property, implementing rigorous site management practices to maintain your space pristine throughout the installation process. Our team is dedicated to preserving the condition of your property, ensuring that every project is completed with minimal disruption and maximum attention to detail. This meticulous approach guarantees a flawless surface and total client satisfaction every time."
    
  ],
  /* buttonText: "Our Formula",
  buttonLink: "#", */
  imageUrl: "/Services/luxury-home-5.jpg",
  imageAlt: "eifs treatment"
};
export const splitScreenServicesPageData6 = {
  title: "VERSATILE STUCCO APPLICATIONS: RESIDENTIAL & COMMERCIAL MASTERY",
  paragraphs: [
    "At Optimum Stucco, we specialize in delivering top-tier stucco services for both residential and commercial sectors. Whether enhancing the facade of a home or constructing a robust commercial building, our stucco solutions are tailored to meet diverse architectural needs.",
    "Focusing exclusively on high-end residential homes and commercial buildings allows us to provide tailored solutions that meet the sophisticated demands of our clients. Our stucco work not only enhances the architectural beauty but also adds significant value and protection to every property."
    
  ],
  /* buttonText: "Our Formula",
  buttonLink: "#", */
  imageUrl: "/Services/luxury-home-3.jpg",
  imageAlt: "eifs treatment"
};
export const splitScreenServicesPageData7 = {
  title: "EIFS: INNOVATIVE INSULATUON SOLUTUONS",
  paragraphs: [
    "Enhance your home's thermal efficiency with EIFS, a superior insulation solution that does not compromise on style.",
    "EIFS installations by Optimum Stucco incorporate advanced techniques to improve your home's energy efficiency while offering a sleek, polished exterior look."
    
  ],
  /* buttonText: "Our Formula",
  buttonLink: "#", */
  imageUrl: "/Services/EIFS.png",
  imageAlt: "eifs treatment"
};

/* vertical SERVICES */
export const verticalSliderServicesPageData1 = [
  {
    icon: "/services/luxury-home-2.jpg",
    title: "OPTIMUM STUCCO CONTRACTORS IN MIAMI",
    des: "Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation",
  },
  {
    icon: "/Services/2.jpg",
    title: "COMMERCIAL STUCCO EXCELLENCE",
    des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks",
  },
  {
    icon: "/services/luxury-home.jpg",
    title: "RESIDENTIAL STUCCO EXPERTISE",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  {
    icon: "/Services/EIFS.png",
    title: "COMPREHENSIVE STUCCO SERVICES",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
  
  
];

/* ----------------------------------- */