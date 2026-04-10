import { prisma } from "@/lib/prisma";
import { createExperience, deleteExperience, updateExperience } from "@/actions/admin";
import { Experience } from "@prisma/client";

export default async function ExperiencesPage() {
  const experiences = await prisma.experience.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <h1 style={{ fontSize: "22px", fontWeight: 600, color: "#ededed", letterSpacing: "-0.02em", marginBottom: "32px" }}>Experiences</h1>
      <Section title="Add New Experience">
        <ExperienceForm action={createExperience} />
      </Section>
      {experiences.length > 0 && (
        <Section title="Existing Entries">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experiences.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
          </div>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ fontSize: "13px", fontWeight: 500, color: "#555555", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>{title}</h2>
      {children}
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const updateWithId = updateExperience.bind(null, exp.id);
  const deleteWithId = deleteExperience.bind(null, exp.id);
  const points = JSON.parse(exp.points) as string[];
  const tags = JSON.parse(exp.tags) as string[];

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#ededed" }}>{exp.company}</p>
          <p style={{ fontSize: "12px", color: "#555555", marginTop: "2px" }}>{exp.role} · {exp.period}</p>
        </div>
        <form action={deleteWithId}>
          <button type="submit" style={{ background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: "6px", padding: "6px 12px", fontSize: "12px", color: "#ff4444", cursor: "pointer" }}>Delete</button>
        </form>
      </div>
      <div style={{ padding: "20px" }}>
        <ExperienceForm action={updateWithId} defaultValues={{ ...exp, points: points.join("\n"), tags: tags.join(", ") }} submitLabel="Update" />
      </div>
    </div>
  );
}

function ExperienceForm({ action, defaultValues, submitLabel = "Add Experience" }: {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: { company?: string; abbr?: string; logo?: string; role?: string; period?: string; status?: string; location?: string; points?: string; tags?: string; order?: number };
  submitLabel?: string;
}) {
  return (
    <form action={action} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <Field name="company" label="Company" defaultValue={defaultValues?.company} />
        <Field name="abbr" label="Abbreviation" defaultValue={defaultValues?.abbr} />
        <Field name="role" label="Role" defaultValue={defaultValues?.role} />
        <Field name="period" label="Period" defaultValue={defaultValues?.period} />
        <Field name="location" label="Location" defaultValue={defaultValues?.location} />
        <Field name="logo" label="Logo URL" defaultValue={defaultValues?.logo} />
        <Field name="order" label="Order" type="number" defaultValue={String(defaultValues?.order ?? 0)} />
        <div>
          <label style={labelStyle}>Status</label>
          <select name="status" defaultValue={defaultValues?.status ?? "past"} style={inputStyle}>
            <option value="past">Past</option>
            <option value="current">Current</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Bullet Points (one per line)</label>
        <textarea name="points" defaultValue={defaultValues?.points} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <div>
        <label style={labelStyle}>Tags (comma-separated)</label>
        <input name="tags" defaultValue={defaultValues?.tags} style={inputStyle} />
      </div>
      <button type="submit" style={submitStyle}>{submitLabel}</button>
    </form>
  );
}

function Field({ name, label, defaultValue, type = "text" }: { name: string; label: string; defaultValue?: string; type?: string }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} style={inputStyle} />
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: "11px", color: "#555555", fontFamily: "var(--font-geist-mono)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" };
const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", color: "#ededed", outline: "none", boxSizing: "border-box" };
const submitStyle: React.CSSProperties = { background: "#0070f3", border: "none", borderRadius: "8px", padding: "9px 18px", fontSize: "13px", fontWeight: 500, color: "#ffffff", cursor: "pointer" };
