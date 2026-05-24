import { SiteHeader } from "@/components/SiteHeader"

export default function SkjemaTestPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">
        <div className="wrap" style={{ maxWidth: 640, padding: "48px 24px" }}>
          <iframe
            src="https://api.handverkmedia.no/widget/form/S7eZfyV5Gr7oNyEg7iS5"
            width="100%"
            height="1050"
            style={{ border: "none", borderRadius: 8, display: "block" }}
            title="Kontaktskjema"
          />
        </div>
      </div>
    </div>
  )
}
