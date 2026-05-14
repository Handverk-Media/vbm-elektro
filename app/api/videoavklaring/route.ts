import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const fd = await req.formData()

  const navn = fd.get("navn")?.toString() ?? ""
  const telefon = fd.get("telefon")?.toString() ?? ""
  const adresse = fd.get("adresse")?.toString() ?? ""
  const beskrivelse = fd.get("beskrivelse")?.toString() ?? ""
  const filer = fd.getAll("filer") as File[]

  console.log("Videoavklaring mottatt:", {
    navn,
    telefon,
    adresse,
    beskrivelse,
    antallFiler: filer.length,
    filer: filer.map((f) => f.name),
  })

  // TODO: lagre filer til storage (f.eks. Supabase / S3) og send varsling til Benjamin

  return NextResponse.json({
    ok: true,
    melding: `Takk ${navn}! Vi ser på bildene og tar kontakt innen 2 timer.`,
  })
}
