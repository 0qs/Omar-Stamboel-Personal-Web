import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const [expCount, skillCount, statCount] = await Promise.all([
    prisma.experience.count(),
    prisma.skill.count(),
    prisma.stat.count(),
  ]);

  if (expCount === 0) await prisma.experience.createMany({
    data: [
      {
        company: "PwC Southeast Asia Consulting",
        abbr: "PwC",
        logo: "/PwCLogo.png",
        role: "FS Strategy and Operations Intern",
        period: "Jan 2025 \u2013 Dec 2025",
        status: "past",
        location: "Jakarta, Indonesia",
        points: JSON.stringify([
          "Supported a digital transformation project for the payment operations division of a major Indonesian SOE bank, focusing on streamlining system workflows and dashboards.",
          "Managed the full SDLC of requirement gathering, from user interviews and defining functional specs to coordinating grooming, development, testing, and supporting deployment and piloting.",
          "Developed practical recommendations for the client based on user insights and feature analysis to guide decision-making throughout the project.",
          "Collaborated with cross-functional teams in a fast-paced professional services environment, demonstrating strong written and verbal communication in English and Bahasa Indonesia.",
        ]),
        tags: JSON.stringify(["IT Strategy", "Digital Transformation", "SDLC", "Banking", "Consulting"]),
        order: 0,
      },
      {
        company: "Westbike",
        abbr: "WB",
        logo: "/WestbikeLogo.jpeg",
        role: "UI/UX Designer Intern",
        period: "Jul 2023 \u2013 Dec 2023",
        status: "past",
        location: "Jakarta, Indonesia",
        points: JSON.stringify([
          "Led requirement gathering for Westbike, translating user needs into clear product requirements for workflows and dashboards.",
          "Designed the UI and UX for Westbike including detailed wireframes for both mobile and desktop platforms, applying user-centred design principles.",
          "Produced data-driven design recommendations that informed product roadmap decisions, demonstrating analytical thinking and structured problem solving.",
        ]),
        tags: JSON.stringify(["UI/UX Design", "Figma", "Wireframing", "User Research", "Mobile"]),
        order: 1,
      },
    ],
  });

  const skills = [
    { name: "JavaScript", category: "Development", order: 0 },
    { name: "Java", category: "Development", order: 1 },
    { name: "HTML / CSS", category: "Development", order: 2 },
    { name: "Web Development", category: "Development", order: 3 },
    { name: "React / Next.js", category: "Development", order: 4 },
    { name: "UI/UX Design", category: "Design", order: 0 },
    { name: "Wireframing", category: "Design", order: 1 },
    { name: "Prototyping", category: "Design", order: 2 },
    { name: "User Research", category: "Design", order: 3 },
    { name: "User-Centred Design", category: "Design", order: 4 },
    { name: "IT Strategy", category: "Consulting", order: 0 },
    { name: "SDLC Management", category: "Consulting", order: 1 },
    { name: "Requirement Gathering", category: "Consulting", order: 2 },
    { name: "Process Design", category: "Consulting", order: 3 },
    { name: "Stakeholder Communication", category: "Consulting", order: 4 },
    { name: "Microsoft 365", category: "Tools", order: 0 },
    { name: "Word & Excel", category: "Tools", order: 1 },
    { name: "PowerPoint", category: "Tools", order: 2 },
    { name: "Teams", category: "Tools", order: 3 },
    { name: "Figma", category: "Tools", order: 4 },
    { name: "JavaScript", category: "Technology", order: 0 },
    { name: "Java", category: "Technology", order: 1 },
    { name: "HTML", category: "Technology", order: 2 },
    { name: "CSS", category: "Technology", order: 3 },
    { name: "React", category: "Technology", order: 4 },
    { name: "Next.js", category: "Technology", order: 5 },
    { name: "Figma", category: "Technology", order: 6 },
    { name: "Microsoft 365", category: "Technology", order: 7 },
    { name: "Git", category: "Technology", order: 8 },
    { name: "SQL", category: "Technology", order: 9 },
    { name: "Banking & FinTech", category: "FocusArea", order: 0 },
    { name: "IT Strategy", category: "FocusArea", order: 1 },
    { name: "UI/UX Design", category: "FocusArea", order: 2 },
    { name: "Digital Transformation", category: "FocusArea", order: 3 },
    { name: "Application Development", category: "FocusArea", order: 4 },
    { name: "Cybersecurity", category: "FocusArea", order: 5 },
  ];

  if (skillCount === 0) await prisma.skill.createMany({ data: skills });

  if (statCount === 0) await prisma.stat.createMany({
    data: [
      { value: "2026", label: "Expected Graduation", order: 0 },
      { value: "2", label: "Internships", order: 1 },
      { value: "2+", label: "Years in Tech", order: 2 },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
