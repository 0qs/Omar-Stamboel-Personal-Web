"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { expectedToken } from "@/lib/auth-token";

async function requireAdmin() {
  const token = expectedToken();
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");
  if (!token || !auth || auth.value !== token) redirect("/login");
}

// ─── Experiences ────────────────────────────────────────────────────────────

export async function createExperience(formData: FormData) {
  await requireAdmin();

  const points = (formData.get("points") as string)
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const tags = (formData.get("tags") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await prisma.experience.create({
    data: {
      company: formData.get("company") as string,
      abbr: formData.get("abbr") as string,
      logo: formData.get("logo") as string,
      role: formData.get("role") as string,
      period: formData.get("period") as string,
      status: (formData.get("status") as string) || "past",
      location: formData.get("location") as string,
      points: JSON.stringify(points),
      tags: JSON.stringify(tags),
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/experiences");
}

export async function updateExperience(id: number, formData: FormData) {
  await requireAdmin();

  const points = (formData.get("points") as string)
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const tags = (formData.get("tags") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await prisma.experience.update({
    where: { id },
    data: {
      company: formData.get("company") as string,
      abbr: formData.get("abbr") as string,
      logo: formData.get("logo") as string,
      role: formData.get("role") as string,
      period: formData.get("period") as string,
      status: (formData.get("status") as string) || "past",
      location: formData.get("location") as string,
      points: JSON.stringify(points),
      tags: JSON.stringify(tags),
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/experiences");
}

export async function deleteExperience(id: number) {
  await requireAdmin();
  await prisma.experience.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/experiences");
}

// ─── Skills ─────────────────────────────────────────────────────────────────

export async function createSkill(formData: FormData) {
  await requireAdmin();

  await prisma.skill.create({
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/skills");
}

export async function updateSkill(id: number, formData: FormData) {
  await requireAdmin();

  await prisma.skill.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/skills");
}

export async function deleteSkill(id: number) {
  await requireAdmin();
  await prisma.skill.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/skills");
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export async function createStat(formData: FormData) {
  await requireAdmin();

  await prisma.stat.create({
    data: {
      value: formData.get("value") as string,
      label: formData.get("label") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateStat(id: number, formData: FormData) {
  await requireAdmin();

  await prisma.stat.update({
    where: { id },
    data: {
      value: formData.get("value") as string,
      label: formData.get("label") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteStat(id: number) {
  await requireAdmin();
  await prisma.stat.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
}
