import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


// =============================================
// Autumn Blog — Single-file React App (Vite + TS)
// Fix: completed file (previous paste ended mid-array at ~line 84)
// - Parallax background fully covers viewport
// - Weekly Reflection resets closed
// - In-source Vitest sanity tests (optional)
// =============================================


// --- THEME ----
const palette = {
bg: "#FEFAF5", // light parchment backdrop
ink: "#632223", // deep burgundy ink
accent: "#E7993A", // warm golden orange accent
accent2: "#FEBA51", // harvest gold highlight
leaf: "#923C27", // rich autumn red
berry: "#8D2831", // wine berry tone
gold: "#FEBA51", // reuse harvest gold for ornamental gradients
};


const serif = {
fontFamily: `'Cormorant Garamond', Garamond, Georgia, serif`,
};
const script = {
fontFamily: `'Playfair Display', 'Cormorant Garamond', Georgia, serif`,
letterSpacing: "0.2px",
};
const mono = {
fontFamily:
`'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};


// --- BACKGROUND GRAPHICS SUPPORT ----
const LeafGraphic: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
<svg
viewBox="0 0 100 100"
width={80}
height={80}
style={{ position: "absolute", opacity: 0.08, pointerEvents: "none", ...style }}
>
<path
d="M50 5 C20 40, 20 60, 50 95 C80 60, 80 40, 50 5 Z"
fill={palette.leaf}
/>
</svg>
);


// Use uploaded seasonal image (place file in /public/backgrounds)
const customBackground = "/backgrounds/autumn-path.jpg";
const PARALLAX_FACTOR = 0.3; // smaller = subtler


// --- DUMMY CONTENT ----
const today = new Date().toISOString().slice(0, 10);
const dailyWord = {
date: today,
word: "meridian",
pos: "noun",
def: "a high point of development or the hour of noon; in cartography, a line of longitude",
ex: "At the meridian of autumn, the fields rest under a gold hush.",
};


const recipeFeed = [
{
title: "Cider-Braised Apples",
slug: "cider-braised-apples",
blurb: "Warm spiced apples with cloves & cinnamon.",
tags: ["dessert", "autumn"],
updated: "2025-09-19",
},
{
title: "Harvest Stew",
slug: "harvest-stew",
blurb: "Root vegetables, barley, and rosemary.",
tags: ["supper"],
updated: "2025-09-17",
},
{
title: "Pumpkin Tea Loaf",
slug: "pumpkin-tea-loaf",
blurb: "Moist loaf with nutmeg and brown sugar.",
tags: ["bake"],
updated: "2025-09-15",
},
];


const poemOfWeek = {
title: "Ode to the Quiet Lane",
body: `The lane keeps counsel with the leaves,\nA hush of amber, russet, gold;\nAnd in that stillness, heart believes\nWhat busy days forget to hold.`,
};


const traditions = [
{ title: "Michaelmas Bread", note: "A simple loaf shared at the turning of the season." },
{ title: "Lantern Walk", note: "Paper lanterns at dusk to honor gathering light." },
];
