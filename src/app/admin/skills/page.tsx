import { prisma } from "@/lib/prisma";
import { createSkill, deleteSkill, updateSkill, createStat, deleteStat, updateStat } from "@/actions/admin";
import { Skill, Stat } from "@prisma/client";

const SKILL_CATEGORIES = ["Development", "Design", "Consulting", "Tools", "Technology", "FocusArea"];

export default async function SkillsPage() {
  const [skills, stats] = await Promise.all([
    prisma.skill.findMany({ orderBy: [{ category: "asc" }, { order: "asc" }] }),
    prisma.stat.findMany({ orderBy: { order: "asc" } }),
  ]);

  const grouped = SKILL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div>
      <h1 style={{ fontSize: "22px", fontWeight: 600, color: "#ededed", letterSpacing: "-0.02em", marginBottom: "32px" }}>Skills &amp; Focus Areas</h1>
      <Section title="Add Skill / Focus Area / Technology">
        <form action={createSkill} style={{ display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" }}>
          <InlineField name="name" label="Name" />
          <div>
            <label style={labelStyle}>Category</label>
            <select name="category" style={inputStyle}>
              {SKILL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <InlineField name="order" label="Order" type="number" defaultValue="0" />
          <button type="submit" style={submitStyle}>Add</button>
        </form>
      </Section>
      {SKILL_CATEGORIES.map((cat) => (
        <Section key={cat} title={cat}>
          {grouped[cat].length === 0
            ? <p style={{ fontSize: "13px", color: "#333333" }}>No entries yet.</p>
            : <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{grouped[cat].map((skill) => <SkillRow key={skill.id} skill={skill} />)}</div>}
        </Section>
      ))}
      <Section title="Add Stat (About section)">
        <form action={createStat} style={{ display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" }}>
          <InlineField name="value" label="Value (e.g. 2026)" />
          <InlineField name="label" label="Label (e.g. Expected Graduation)" />
          <InlineField name="order" label="Order" type="number" defaultValue="0" />
          <button type="submit" style={submitStyle}>Add Stat</button>
        </form>
      </Section>
      {stats.length > 0 && (
        <Section title="Existing Stats">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{stats.map((stat) => <StatRow key={stat.id} stat={stat} />)}</div>
        </Section>
      )}
    </div>
  );
}

function SkillRow({ skill }: { skill: Skill }) {
  const updateWithId = updateSkill.bind(null, skill.id);
  const deleteWithId = deleteSkill.bind(null, skill.id);
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 14px" }}>
      <form action={updateWithId} style={{ display: "flex", gap: "8px", flex: 1, flexWrap: "wrap" }}>
        <input name="name" defaultValue={skill.name} style={{ ...inputStyle, flex: 1, minWidth: "120px" }} />
        <select name="category" defaultValue={skill.category} style={inputStyle}>
          {SKILL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <input name="order" type="number" defaultValue={String(skill.order)} style={{ ...inputStyle, width: "60px" }} />
        <button type="submit" style={{ ...submitStyle, padding: "6px 12px" }}>Save</button>
      </form>
      <form action={deleteWithId}>
        <button type="submit" style={{ background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: "6px", padding: "6px 12px", fontSize: "12px", color: "#ff4444", cursor: "pointer" }}>Del</button>
      </form>
    </div>
  );
}

function StatRow({ stat }: { stat: Stat }) {
  const updateWithId = updateStat.bind(null, stat.id);
  const deleteWithId = deleteStat.bind(null, stat.id);
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 14px" }}>
      <form action={updateWithId} style={{ display: "flex", gap: "8px", flex: 1, flexWrap: "wrap" }}>
        <input name="value" defaultValue={stat.value} placeholder="Value" style={{ ...inputStyle, width: "100px" }} />
        <input name="label" defaultValue={stat.label} placeholder="Label" style={{ ...inputStyle, flex: 1 }} />
        <input name="order" type="number" defaultValue={String(stat.order)} style={{ ...inputStyle, width: "60px" }} />
        <button type="submit" style={{ ...submitStyle, padding: "6px 12px" }}>Save</button>
      </form>
      <form action={deleteWithId}>
        <button type="submit" style={{ background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: "6px", padding: "6px 12px", fontSize: "12px", color: "#ff4444", cursor: "pointer" }}>Del</button>
      </form>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2 style={{ fontSize: "11px", fontWeight: 500, color: "#555555", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>{title}</h2>
      {children}
    </div>
  );
}

function InlineField({ name, label, defaultValue = "", type = "text" }: { name: string; label: string; defaultValue?: string; type?: string }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} style={inputStyle} />
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: "11px", color: "#555555", fontFamily: "var(--font-geist-mono)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" };
const inputStyle: React.CSSProperties = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", color: "#ededed", outline: "none", boxSizing: "border-box" };
const submitStyle: React.CSSProperties = { background: "#0070f3", border: "none", borderRadius: "8px", padding: "9px 18px", fontSize: "13px", fontWeight: 500, color: "#ffffff", cursor: "pointer", whiteSpace: "nowrap" };
