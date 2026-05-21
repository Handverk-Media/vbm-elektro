export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return
  if (typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", { location })
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName })
}
