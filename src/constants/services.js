export const servicesData = [
  {
    id: 1,
    name: "brows",
    img: "src/assets/brows/brows.webp",
    preview:
      "NANO HAIRSTROKE & SHADING\n\nSemi-permanent cosmetic technique combining precise nano hairstrokes with a soft shading effect to create natural-looking and defined eyebrows.",
    description:
      "NANO HAIRSTROKE + SHADING\n\nNano hairstroke and shading is a semi-permanent cosmetic technique done with a handheld tool, that combines precise nano hairstrokes with a soft shading effect to create natural-looking and defined eyebrows. It's a more advanced technique compared to older methods like microblading. Pigments are designed to naturally fade over time allowing for adjustments to colour and shape as the client's natural features change.\nAt Hannah Beauty, we pride ourselves on providing the best, most natural brows, with no worry about scarring or discolouration.",
    prices: {
      headers: ["Session", "Extra Info", "Price"],
      rows: [
        {
          session: "1st",
          extraInfo: "",
          price: "$400",
        },
        {
          session: "2nd",
          extraInfo: "4-6 weeks after 1st session",
          price: "$150",
        },
        {
          session: "refresh",
          extraInfo: "3-12 months after 1st session",
          price: "$250 - 350",
        },
        {
          session: "refresh",
          extraInfo:
            "13-24 months after 1st session (1st session price applies)",
          price: "$400",
        },
      ],
    },
  },
  {
    id: 2,
    name: "lash_lift",
    img: "src/assets/lash_lift/lash_lift.webp",
    preview: "Give your lashes a luscious curl.",
    description:
      "Lash lift is a cosmetic procedure that enhances and curls natural eyelashes, providing a semi-permanent lift and a more open-eyed appearance without the need for eyelash extensions.",
    prices: {
      headers: ["Session", "", "Price"],
      rows: [
        {
          session: "Lash Lift",
          extraInfo: "",
          price: "$70",
        },
        {
          session: "Lash Lift + Tint",
          extraInfo: "For extra vividity and darkness in your lashes.",
          price: "$80",
        },
      ],
    },
  },
  {
    id: 3,
    name: "eyeliner",
    img: "src/assets/eyeliner/eyeliner.webp",
    preview: "Semi-permanent tattooing of the eyeline.",
    description:
      "Eyeliner semi-permanent tattoo is a cosmetic procedure in which pigments are implanted along the lash line to create the appearance of defined and long-lasting eyeliner, offering a hassle-free solution for enhanced eyes. No need to put on eyeliner every single morning.",
    prices: {
      headers: ["Session", "Extra Info", "Price"],
      rows: [
        {
          session: "1st",
          extraInfo: "option of wings or no wings",
          price: "$400 (wings)\n$250 (no wings)",
        },
        {
          session: "2nd",
          extraInfo: "4-6 weeks after 1st session",
          price: "$150",
        },
        {
          session: "refresh",
          extraInfo: "3-12 months after 1st session",
          price: "$250 - 350",
        },
        {
          session: "refresh",
          extraInfo:
            "13-24 months after 1st session (1st session price applies)",
          price: "$400",
        },
      ],
    },
  },
  {
    id: 4,
    name: "lip_blush",
    img: "src/assets/lip_blush/lip_blush.webp",
    preview:
      "Semi-permanent lip colouring technique that enhances natural lip color.",
    description:
      "Lip blush semi-permanent tattoo involves depositing pigments onto the lips to enhance their natural color, define the lip contour, and create a subtle, semi-permanent tint.",
    prices: {
      headers: ["Session", "Extra Info", "Price"],
      rows: [
        {
          session: "1st",
          extraInfo: "",
          price: "$400",
        },
        {
          session: "2nd",
          extraInfo: "6-8 weeks after 1st session",
          price: "$150",
        },
        {
          session: "additional",
          extraInfo: "for darker lips if required",
          price: "$100",
        },
        {
          session: "refresh",
          extraInfo: "3-12 months after 1st session",
          price: "$250 - 350",
        },
        {
          session: "refresh",
          extraInfo:
            "13-24 months after 1st session (1st session price applies)",
          price: "$400",
        },
      ],
    },
  },
  {
    id: 5,
    name: "smp",
    img: "src/assets/smp/smp.webp",
    preview:
      "Scalp micro-pigmentation (SMP) is a non-invasive cosmetic procedure that uses tiny ink deposits to replicate the appearance of hair follicles, providing the illusion of a fuller scalp.",
    description:
      "Scalp micro-pigmentation (SMP) is a non-invasive cosmetic procedure that uses tiny ink deposits to replicate the appearance of hair follicles, providing the illusion of a fuller scalp.\n\nCost and the number of sessions required depends on the area requiring SMP.",
    prices: {
      headers: ["Area", "No. of Sessions", "Price"],
      rows: [
        {
          area: "3 x 9cm",
          img: "src/assets/smp/smp_area_3x9.webp",
          sessions: "2",
          price: "$450",
        },
        {
          area: "5 x 9cm",
          img: "src/assets/smp/smp_area_5x9.webp",
          sessions: "4",
          price: "$700",
        },
        {
          area: "8 x 9cm",
          img: "src/assets/smp/smp_area_8x9.webp",
          sessions: "5",
          price: "$900",
        },
        {
          area: "10 x 9cm",
          img: "src/assets/smp/smp_area_10x9.webp",
          sessions: "5",
          price: "$1,300",
        },
        {
          area: "15 x 9cm",
          img: "src/assets/smp/smp_area_15x9.webp",
          sessions: "5",
          price: "$1,900",
        },
        {
          area: "15 x 9cm +",
          img: "src/assets/smp/smp_area_15x9.webp",
          sessions: "variable",
          price: "variable",
        },
        {
          area: "Hairline",
          img: "src/assets/white.webp",
          sessions: "2 - 3",
          price: "From $550",
        },
      ],
    },
  },
];
