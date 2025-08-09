export const serviceTypeIntros = {
  brows: {
    title: "What will you learn?",
    description: `
        In the Hannah Beauty Nano-Hairstroke & Shading courses, you will
        learn all the knowledge needed to become a skillful beautician. Nano-hairstroke and shading is the most state-of-the-art technique,
        requiring a greater level of advanced technical expertise and
        equipment than microblading. Results are more realistic and hair
        strokes are finer. Hannah Beauty Academy courses offer an
        opportunity to become a master of this technique using the most
        advanced nano-hairstroke & shading machine.
      `,
    concepts: [
      "Skin Anatomy",
      "Fitzpatrick Scale",
      "Colour Theory",
      "Machine and Needle",
      "Needle Selection",
      "Skin Approach Angle",
      "Design Theory",
      "Hairstroke Technique",
      "Latex Practice",
      "Hygiene",
    ],
    practical: `
        You will be given opportunities to apply these concepts into
        practice. This includes demonstrations by our beauty specialist,
        Hannah, and ongoing practice using latex sheets by you. You will
        also receive a workbook including all information about the
        Nano-Hairstroke & Shading technique. Throughout the course, you can
        borrow our own machine and use the available pigments for practice.
        We will provide information about where you can source these
        materials at the end of the course, as they will not be provided to
        you directly.
      `,
    images: {
      primary: "/images/academy/brows/machine.webp",
      secondary: "/images/academy/brows/brow.webp",
    },
  },
  lash_lift: {
    title: "What will you learn?",
    description: `
        In the Hannah Beauty Lash Lift course, you will
        learn all the essential knowledge and hands-on skills to become a lash lift specialist.
        Lash lifting is an advanced technique that enhances the natural curl and appearance of eyelashes,
        giving clients a brighter, more open-eyed look without extensions. Our course covers everything from
        product selection to safe application and aftercare, ensuring you can deliver beautiful,
        long-lasting results for your clients.
      `,
    concepts: [
      "The Principles of Lash Lifting",
      "Softening & Fixing Solutions",
      "The Eyelash Growth Cycle",
      "Fool-proof Lash Lifting",
      "Placement of Silicone Rod",
      "Shield/Rod Selection & Placement",
      "How to Use Tape",
      "Rod Selection",
      "Tinting Techniques",
      "Effective Customer Engagement",
      "Hygiene & Safety",
    ],
    practical: `
        You will have the opportunity to practice lash lift techniques on a live model.
        The course includes demonstrations by you, together with Hannah, our beauty specialist.
        You will learn how to properly prepare the lashes, apply lifting solutions, select and position shields or rods,
        and safely tint lashes for enhanced results. All necessary products and tools will be provided during training.
        By the end of the course, with your ongoing practice, you will be confident in delivering professional lash lift and perm services,
        understanding how to customise the process for different lash types and client needs.
      `,
    images: {
      primary: "/images/academy/hannah.webp",
      secondary: "/images/academy/lash_lift/student.webp",
    },
  },
  // Add more service types as needed
};

//   COURSES DATA
export const browsCoursesData = [
  {
    id: 1,
    serviceType: "brows",
    name: "Beginner Course",
    description:
      "This course is for those completely new to semi-permanent brow tattooing.",
    duration: "24 hours",
    price: "6700",
    deposit: "700",
    details: {
      sessions: "5 sessions, 4 hours each\n2 bonus sessions, 2 hours each",
      model: `Model 1: Demonstrated by Hannah\nModel 2: Demonstrated by you on a Model (1st session + 2nd re-touch session 1 month later)`,
    },
  },
  {
    id: 2,
    serviceType: "brows",
    name: "3-Day Master Course",
    description:
      "This course is for those who are PMU (Permanent Make-Up) artists but are beginners at using the nano-hairstroke machine.",
    duration: "12 hours",
    price: "4500",
    deposit: "500",
    details: {
      sessions: "3 sessions, 4 hours each",
      model: `Model 1: Demonstrated by Hannah\nModel 2: Demonstrated by you on a Model (1st session + 2nd re-touch session 1 month later)`,
    },
  },
  {
    id: 3,
    serviceType: "brows",
    name: "1-Day Master Course",
    description:
      "This course is for those who already have experience using the nano-hairstroke machine, but want to know more and upgrade their skills.",
    duration: "5 hours",
    sessions: "1 session",
    price: "1900",
    deposit: "200",
    details: {
      sessions: "One point lesson, 5 hours",
      model: `Single model session demonstrated by Hannah and you.\n
        The 1st session is free and the 2nd re-touch session (1 month after) is optional at a cost of $200 to the Model.
        `,
    },
  },
];

export const lashLiftCoursesData = [
  {
    id: 1,
    serviceType: "lash_lift",
    name: "Lash Lift Course",
    description:
      "This is a packed 4 hour course to kick-start your career in Lash Lifting.",
    duration: "4 hours",
    price: "1100",
    deposit: "100",
    details: {
      sessions: "One point lesson, 4 hours",
      model: `Single model session, demonstrated by Hannah and you.\n
      Model Requirements:
      - Not in beginning stages of pregnancy.
      - At least 18 years old.
      - No mascara.
      - No lash extensions.
      - No contact lenses.
      - Model must not have any active skin conditions or infections in the area.
      `,
    },
  },
];

// FIXME: Dummy data below
export const eyelinerCoursesData = [
  {
    id: 1,
    serviceType: "eyeliner",
    name: "Beginner Course",
    description:
      "This course is for those completely new to eyeliner tattooing.",
    duration: "20 hours",
    sessions: "5 sessions (4hrs each)",
    price: "eyeliner_price",
    deposit: "eyeliner_deposit",
  },
];

export const lipBlushCoursesData = [
  {
    id: 1,
    serviceType: "lip_blush",
    name: "Beginner Course",
    description:
      "This course is for those completely new to lip blush tattooing.",
    duration: "20 hours",
    sessions: "5 sessions (4hrs each)",
    price: "6700",
    deposit: "700",
  },
];

export const smpCoursesData = [
  {
    id: 1,
    serviceType: "smp",
    name: "Beginner Course",
    description: "This course is for those completely new to SMP tattooing.",
    duration: "20 hours",
    sessions: "5 sessions (4hrs each)",
    price: "6700",
    deposit: "700",
  },
];
