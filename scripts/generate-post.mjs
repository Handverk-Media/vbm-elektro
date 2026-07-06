import Anthropic from "@anthropic-ai/sdk"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const POSTS_PATH = path.join(ROOT, "data", "posts.json")

// ── Topic pool ────────────────────────────────────────────────────────────────

const TOPIC_POOL = [
  "Elbillader installasjon Drammen – priser og hva du bør vite",
  "Sikringsskap oppgradering: når er det nødvendig?",
  "Varmekabel på bad: Alt du trenger å vite",
  "Downlights installasjon: priser og praktisk guide",
  "Elektriker bad renovering – hva er lovpålagt?",
  "Jordfeil: årsaker, farer og hvordan løse det",
  "Solcellepanel tilkobling – hva gjør elektriker?",
  "Zaptec Go vs Easee Home: hvilken bør du velge?",
  "Stikkontakter: montering, antall og plassering",
  "Enova støtte elbillader 2026 – slik søker du",
  "Elektriker næringsbygg Bærum og Oslo",
  "Smarthus KNX vs Plejd – hva passer for deg?",
  "Lysstyring og dimmer installasjon",
  "El-anlegg nybygg – hva koster det?",
  "Samsvarserklæring: hva er det og hvorfor trenger du det?",
  "Elbillader borettslag og sameie – slik gjør vi det",
  "Feilsøking elektrisk anlegg – vanlige problemer",
  "Utendørs belysning og stikkontakter – krav og tips",
  "Ladestasjon næringseiendom – hva koster det?",
  "ENØK tiltak bolig – hva kan elektriker gjøre?",
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function loadPosts() {
  if (!fs.existsSync(POSTS_PATH)) return []
  return JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"))
}

function pickTopic(posts) {
  const usedKeywords = posts.map((p) => p.tittel.toLowerCase()).join(" ")
  const available = TOPIC_POOL.filter((t) => {
    const words = t.toLowerCase().split(/\s+/).filter((w) => w.length > 4)
    return !words.some((w) => usedKeywords.includes(w))
  })
  if (available.length > 0) {
    return available[Math.floor(Math.random() * available.length)]
  }
  // Pool exhausted – instead of a fully random pick (which can resurface a topic
  // covered just a few posts ago), pick whichever topic's last matching post is
  // furthest back in history (posts[] is newest-first) to space out repeats.
  const byAge = TOPIC_POOL.map((topic) => {
    const words = topic.toLowerCase().split(/\s+/).filter((w) => w.length > 4)
    const lastMatchIndex = posts.findIndex((p) =>
      words.some((w) => p.tittel.toLowerCase().includes(w))
    )
    return { topic, age: lastMatchIndex === -1 ? Infinity : lastMatchIndex }
  })
  byAge.sort((a, b) => b.age - a.age)
  return byAge[0].topic
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "o").replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

// ── System prompt ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Du er fagredaktør for VBM Elektro AS sin blogg. VBM Elektro er en autorisert elektroinstallasjonsbedrift med base i Billingstad, Bærum. De leverer elektriker-tjenester i Oslo, Bærum, Asker og Drammen.

TJENESTER: Elbillader (Zaptec, Easee), elkontroll, smarthus (Plejd), bad- og kjøkkenrenovering, sikringsskap, downlights, varmekabel, næringsbygg.

PRISER (omtrentlige fra-priser): Elbillader standard kr 9 990, kompleks kr 14 900, elkontroll fra kr 2 990, smarthus 5 rom fra kr 9 900.

MÅL: Skriv SEO-optimaliserte bloggartikler på norsk bokmål som:
- Rangerer på Google for lokale søk (Bærum, Oslo, Asker, Drammen)
- Er faktabaserte og faglig korrekte
- Har en naturlig, hjelpsom tone – ikke salesy
- Inneholder 600–900 ord
- Nevner VBM Elektro naturlig 1–3 ganger

SVAR KUN med gyldig JSON i dette formatet (ingen tekst rundt):
{
  "tittel": "...",
  "beskrivelse": "... (maks 160 tegn, SEO-metabeskrivelse)",
  "kategori": "Elbillading | Elkontroll | Smarthus | Regelverk | Renovering | Sikkerhet",
  "lesetid": <tall i minutter>,
  "content": [
    { "type": "p", "tekst": "..." },
    { "type": "h2", "tekst": "..." },
    { "type": "p", "tekst": "..." },
    { "type": "ul", "punkter": ["...", "..."] },
    { "type": "ol", "punkter": ["...", "..."] },
    { "type": "table", "headers": ["Kolonne 1", "Kolonne 2"], "rows": [["rad1col1", "rad1col2"]] },
    { "type": "cta", "tekst": "Kort oppfordring til handling – 1 setning." }
  ]
}

Regler for content:
- Start alltid med en p-blokk (intro)
- Bruk minst 2 h2-overskrifter
- Avslutt alltid med en cta-blokk
- ul/ol skal ha 3–6 punkter
- Ikke bruk markdown eller HTML inne i tekstfeltene`

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const client = new Anthropic()
  const posts = loadPosts()
  const topic = process.argv[2] || pickTopic(posts)

  console.log(`\n📝 Genererer innlegg om: "${topic}"\n`)

  const existingTitles = posts.map((p) => `- ${p.tittel}`).join("\n")

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Skriv et blogginnlegg om: "${topic}"

Eksisterende innlegg (unngå å dekke nøyaktig samme vinkel):
${existingTitles || "(ingen ennå)"}

Husk: svar KUN med JSON.`,
      },
    ],
  })

  const raw = message.content[0].text.trim()

  // Extract JSON (strip any accidental markdown code fences)
  const jsonStr = raw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim()

  let parsed
  try {
    parsed = JSON.parse(jsonStr)
  } catch (err) {
    console.error("❌ Klarte ikke parse JSON fra Claude:\n", raw)
    process.exit(1)
  }

  const slug = slugify(parsed.tittel)
  const dato = new Date().toISOString().split("T")[0]

  const newPost = {
    slug,
    tittel: parsed.tittel,
    beskrivelse: parsed.beskrivelse,
    kategori: parsed.kategori,
    dato,
    lesetid: parsed.lesetid ?? 4,
    featured: false,
    content: parsed.content,
  }

  // Prepend (newest first)
  posts.unshift(newPost)
  fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2))
  console.log(`✓ Innlegg lagret: ${slug}`)

  console.log(`\n✅ Ferdig! Nytt innlegg: /blogg/${slug}\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
