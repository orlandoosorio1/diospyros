export interface Trait {
  title: string;
  body: string;
}

export const hero = {
  logo: "/logos/diospyros-logo-white.svg",
  backgroundImage: "/images/diospyros-dark-ebony-1.jpg",
  heading: ["Enduring capital.", "Earned over time."],
  paragraphs: [
    "Direct investments in private companies and real assets.",
    "Built from more than four decades of working with the world's most demanding materials.",
  ],
};

export const originOfCapital = {
  kicker: "Origin of Capital",
  heading: "Built from craft",
  paragraphs: [
    "Diospyros Capital was formed to invest capital earned through decades of craftsmanship, design, and enterprise.",
    "Before capital was deployed, value was created by hand — through rare materials, exacting standards, and work that demanded patience, precision, and judgment.",
    "That background shapes how the firm evaluates opportunities today.",
  ],
};

export const investmentApproach = {
  kicker: "Investment Approach",
  heading: "Patient. Selective. Aligned.",
  intro:
    "We invest with a long-term orientation and a highly selective approach.",
  traits: [
    {
      title: "Independent",
      body: "We are not a traditional fund. We do not invest to satisfy a mandate, a calendar, or a deployment target. We invest when we believe the opportunity, the people, and the terms justify the commitment.",
    },
    {
      title: "Focused",
      body: "We are drawn to strong founders and operators, clear value creation potential, reasonable alignment among stakeholders, long-term durability, and real-world substance beneath the story.",
    },
    {
      title: "Flexible",
      body: "Diospyros Capital may invest in private companies, seed and early-stage opportunities, growth companies, select pre-IPO investments, operating businesses, and real assets.",
    },
    {
      title: "Principal",
      body: "Each investment is considered on its own merits. Decisions are made with the flexibility of a principal and the discipline developed over a lifetime of building real value.",
    },
  ] satisfies Trait[],
};

export const originOfDiospyros = {
  kicker: "Origin of Diospyros Capital",
  quote:
    "Diospyros was built from capital earned over a lifetime of creating value through rare materials, design, and execution.",
};

export const enduringMaterial = {
  backgroundImage: "/images/diospyros-dark-ebony-2.jpg",
  kicker: ["From Enduring Material", "to Enduring Capital"],
  paragraphs: [
    "For more than four decades, our founder worked with Diospyros celebica and Diospyros ebenum, among the most exacting hardwoods in the world.",
    "That work required patience, precision, and an uncompromising standard for quality—principles that now guide how capital is deployed.",
    "The firm invests its own capital with a long-term perspective, focusing on select private companies, real assets, and opportunities where judgment matters.",
  ],
};

export const symbolOfGrowth = {
  backgroundImage: "/images/diospyros-light-ebony-1.jpg",
  kicker: "A Symbol of Growth",
  heading: "Fruit, grain, and growth—Diospyros virginiana",
  paragraphs: [
    "Our logo is inspired by the persimmon and represents the broader diospyros family: ebony and persimmon, and the idea of cultivated value.",
    "It is a symbol of disciplined selection, natural growth, and the patience required for value to mature.",
  ],
  symbol: "/logos/diospyros-symbol-black.svg",
  logotype: "/logos/diospyros-logotype-black.svg",
  nameHeading: "Our name",
  nameParagraphs: [
    "Rooted in Latin, Diospyros is commonly understood as “divine fruit” or “fruit of the gods.” It is also the genus that includes Diospyros ebenum, Diospyros celebica, and Diospyros virginiana—ebony, Macassar ebony, and American persimmon.",
    "For Diospyros Capital, the name represents both origin and philosophy: enduring material, cultivated growth, and value that compounds over time.",
  ],
};

export const ourValues = {
  backgroundImage: "/images/persimmon-tree.jpg",
  kicker: "Our Values",
  heading: "Built from craft. Guided by discipline.",
  intro:
    "The firm's investment philosophy comes from a lifetime of building things that had to endure. In fine materials, there is no shortcut. Quality must be selected, understood, shaped, and protected. Capital deserves the same respect.",
  traits: [
    {
      title: "Selectivity",
      body: "We would rather miss an opportunity than force a poor one.",
    },
    {
      title: "Patience",
      body: "Time is not an enemy when capital is well placed.",
    },
    {
      title: "Alignment",
      body: "We value partners who think clearly, act directly, and share risk honestly.",
    },
    {
      title: "Permanence",
      body: "We are interested in value that can endure beyond a transaction.",
    },
    {
      title: "Judgment",
      body: "Numbers matter, but judgment determines whether numbers become outcomes.",
    },
  ] satisfies Trait[],
};

export const footer = {
  backgroundImage: "/images/diospyros-dark-ebony-3.jpg",
  logo: "/logos/diospyros-logo-white.svg",
  heading: "Get in touch",
  contactHeading: "Direct inquiries",
  contactBody:
    "Select opportunities and partnership discussions. Diospyros Capital considers select private investment opportunities and partnership discussions.",
  email: "info@diospyroscapital.com",
  company: "Diospyros Capital LLC",
  location: "Morristown, New Jersey",
  copyright: "© Diospyros Capital LLC 2026",
};
