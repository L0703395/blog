import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// =============================================
// Autumn Blog — React + Vite
// Clean build for GitHub Pages (no photo bg)
// =============================================

const palette = {
  bg: "#FEFAF5",
  ink: "#632223",
  accent: "#E7993A",
  accent2: "#FEBA51",
  leaf: "#923C27",
  berry: "#8D2831",
  gold: "#FEBA51",
};

const serif = { fontFamily: `'Cormorant Garamond', Garamond, Georgia, serif` };
const script = { fontFamily: `'Playfair Display', 'Cormorant Garamond', Georgia, serif`, letterSpacing: "0.2px" };
const mono = {
  fontFamily:
    `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const LeafGraphic: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    width={80}
    height={80}
    style={{ position: "absolute", opacity: 0.08, pointerEvents: "none", ...style }}
  >
    <path d="M50 5 C20 40, 20 60, 50 95 C80 60, 80 40, 50 5 Z" fill={palette.leaf} />
  </svg>
);

// ---------- WEEKLY REFLECTION (this must exist!) ----------
const WeeklyReflection: React.FC = () => {
  const [open, setOpen] = useState(false); // resets closed each load
  return (
    <div style={{ marginTop: 6 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "transparent",
          border: "none",
          color: palette.accent,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {open ? "Hide weekly notes" : "Read this week's notes"}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        style={{ overflow: "hidden" }}
      >
        <div style={{ paddingTop: 8, color: palette.ink, ...serif }}>
          This week I learned that simplicity is a stern but gentle teacher; that
          bread rises best when we are patient, and so do we.
        </div>
      </motion.div>
    </div>
  );
};

// ---------- DATA ----------
const today = new Date().toISOString().slice(0, 10);
const dailyWord = {
  date: today,
  word: "meridian",
  pos: "noun",
  def: "a high point of development or the hour of noon; in cartography, a line of longitude",
  ex: "At the meridian of autumn, the fields rest under a gold hush.",
};

const recipeFeed = [
  { title: "Cider-Braised Apples", slug: "cider-braised-apples", blurb: "Warm spiced apples with cloves & cinnamon.", tags: ["dessert", "autumn"], updated: "2025-09-19" },
  { title: "Harvest Stew", slug: "harvest-stew", blurb: "Root vegetables, barley, and rosemary.", tags: ["supper"], updated: "2025-09-17" },
  { title: "Pumpkin Tea Loaf", slug: "pumpkin-tea-loaf", blurb: "Moist loaf with nutmeg and brown sugar.", tags: ["bake"], updated: "2025-09-15" },
];

const poemOfWeek = {
  title: "Ode to the Quiet Lane",
  body: `The lane keeps counsel with the leaves,
A hush of amber, russet, gold;
And in that stillness, heart believes
What busy days forget to hold.`,
};

const traditions = [
  { title: "Michaelmas Bread", note: "A simple loaf shared at the turning of the season." },
  { title: "Lantern Walk", note: "Paper lanterns at dusk to honor gathering light." },
];

const hobbies = [
  { title: "Pressed Leaf Almanac", cycle: "2025-10", note: "Collecting, pressing, and cataloging leaves with notes." },
  { title: "Hand-stitched Apron", cycle: "2025-12", note: "Linen apron with cross-back straps." },
];

// ---------- UI HELPERS ----------
const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <section style={{ margin: "36px 0", padding: "16px 0", borderTop: `1px dashed ${palette.accent2}55` }}>
    <h2 style={{ ...serif, color: palette.ink, fontSize: 28, margin: 0 }}>{title}</h2>
    {subtitle && <p style={{ ...serif, color: palette.accent, margin: "6px 0 14px", fontStyle: "italic" }}>{subtitle}</p>}
    <div>{children}</div>
  </section>
);

const Card: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    onClick={onClick}
    style={{
      background: `linear-gradient(180deg, ${palette.bg} 0%, #fff 100%)`,
      border: `1px solid ${palette.accent2}44`,
      boxShadow: `0 2px 8px ${palette.accent2}22`,
      borderRadius: 14,
      padding: 16,
      cursor: onClick ? "pointer" : "default",
    }}
  >
    {children}
  </motion.div>
);

// ---------- APP ----------
function App() {
  const [seasonGreeting, setSeasonGreeting] = useState<string>("");

  useEffect(() => {
    setSeasonGreeting("A blessed harvest to you");
  }, []);

  return (
    <div style={{ background: palette.bg, minHeight: "100vh", color: palette.ink, position: "relative" }}>
      <LeafGraphic style={{ top: "20%", left: "10%" }} />
      <LeafGraphic style={{ top: "70%", right: "15%", transform: "rotate(120deg)" }} />

      <div
        style={{
          background: `radial-gradient(1200px 400px at 50% -50px, ${palette.gold}33, transparent 60%), linear-gradient(180deg, #FFF 0%, ${palette.bg} 100%)`,
          borderBottom: `1px solid ${palette.accent2}33`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px 24px" }}>
          <h1 style={{ ...script, fontSize: 46, margin: 0, color: palette.ink }}>A Journey Within</h1>
          <div style={{ ...serif, fontSize: 18, color: palette.accent }}>Notes from Solitude</div>

          <div
            style={{
              marginTop: 16,
              padding: 12,
              border: `1px solid ${palette.accent2}55`,
              borderRadius: 12,
              background: `linear-gradient(180deg, #fff, ${palette.bg})`,
              boxShadow: `0 2px 8px ${palette.accent2}22`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 14, ...serif, color: palette.berry }}>Seasonal Greeting</span>
              <span style={{ fontSize: 16, ...serif }}>{seasonGreeting}</span>
            </div>
            {/* WeeklyReflection is defined above — this was the missing piece causing the error */}
            <WeeklyReflection />
          </div>

          <nav style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap" }}>
            {["Home", "Vocabulary", "Recipes", "Poems", "Hobbies", "Traditions", "Music"].map((item) => (
              <a key={item} href="#" style={{ ...serif, color: palette.ink, textDecoration: "none", borderBottom: `1px solid ${palette.accent2}55`, paddingBottom: 2 }}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "18px 20px 120px", position: "relative", zIndex: 1 }}>
        <Section title="Daily Vocabulary" subtitle={`${dailyWord.date}`}>
          <Card>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ ...serif, fontSize: 24, color: palette.ink }}>{dailyWord.word}</div>
                <div style={{ fontSize: 12, color: palette.accent2, ...mono }}>{dailyWord.pos}</div>
              </div>
              <div style={{ ...serif }}>{dailyWord.def}</div>
              <div style={{ fontStyle: "italic", color: palette.accent }}>{dailyWord.ex}</div>
            </div>
          </Card>
        </Section>

        <Section title="Fall Recipes" subtitle="Updated 3× weekly">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {recipeFeed.map((r) => (
              <Card key={r.slug}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ ...serif, fontSize: 20 }}>{r.title}</div>
                  <div style={{ color: palette.accent2 }}>{r.blurb}</div>
                  <div style={{ fontSize: 12, color: palette.accent2 }}>Updated: {r.updated}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Weekly Poem">
          <Card>
            <div style={{ ...serif }}>
              <div style={{ fontSize: 18, marginBottom: 8, color: palette.ink }}>{poemOfWeek.title}</div>
              <pre style={{ whiteSpace: "pre-wrap", margin: 0, fontFamily: serif.fontFamily, lineHeight: 1.7 }}>
                {poemOfWeek.body}
              </pre>
            </div>
          </Card>
        </Section>

        <Section title="Hobbies & Crafts" subtitle="Updated every two months (see standalone page)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {hobbies.map((h) => (
              <Card key={h.title}>
                <div style={{ ...serif }}>
                  <div style={{ fontSize: 18 }}>{h.title}</div>
                  <div style={{ color: palette.accent2, marginTop: 4 }}>Cycle: {h.cycle}</div>
                  <div style={{ marginTop: 8 }}>{h.note}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Old Traditions" subtitle="Standalone archive & essays">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {traditions.map((t) => (
              <Card key={t.title}>
                <div style={{ ...serif }}>
                  <div style={{ fontSize: 18 }}>{t.title}</div>
                  <div style={{ marginTop: 6, color: palette.accent2 }}>{t.note}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Colophon">
          <div style={{ ...serif, color: palette.accent2, fontSize: 14 }}>
            Built with React (Vite). Typography & colors evoke a vintage autumn
            almanac. Background uses ornamental gradients (no heavy images).
            Replace demo data with files under <code style={mono}>/content</code>.
          </div>
        </Section>
      </main>

      <MusicPlayer />
    </div>
  );
}

export default App;
export { App };
