"use client"

import Script from "next/script"
import { SiteHeader } from "@/components/SiteHeader"

export default function SkjemaTestPage() {
  return (
    <div className="subpage">
      <SiteHeader />
      <div className="subpage-pt">
        <div className="wrap" style={{ maxWidth: 640, padding: "48px 24px" }}>
          <iframe
            src="https://api.handverkmedia.no/widget/form/S7eZfyV5Gr7oNyEg7iS5"
            style={{ width: "100%", height: 1050, border: "none", borderRadius: 8 }}
            id="inline-S7eZfyV5Gr7oNyEg7iS5"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 4"
            data-height="1050"
            data-layout-iframe-id="inline-S7eZfyV5Gr7oNyEg7iS5"
            data-form-id="S7eZfyV5Gr7oNyEg7iS5"
            title="Form 4"
          />
        </div>
      </div>
      <Script src="https://api.handverkmedia.no/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}
