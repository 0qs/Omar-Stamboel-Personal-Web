import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const [experiences, skills, stats] = await Promise.all([
    prisma.experience.findMany({ orderBy: { order: "asc" } }),
    prisma.skill.findMany({ orderBy: [{ category: "asc" }, { order: "asc" }] }),
    prisma.stat.findMany({ orderBy: { order: "asc" } }),
  ]);

  const experienceData = experiences.map((exp) => ({
    ...exp,
    points: JSON.parse(exp.points) as string[],
    tags: JSON.parse(exp.tags) as string[],
  }));

  const focusAreas = skills
    .filter((s) => s.category === "FocusArea")
    .map((s) => s.name);

  return (
    <main style={{ background: "#000000" }}>
      <Navbar />
      <Hero />
      <About focusAreas={focusAreas} stats={stats} />
      <Experience experiences={experienceData} />
      <Skills skills={skills} />
      <Volunteer />
      <Contact />
    </main>
  );
}
