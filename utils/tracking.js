export function getUtmSourceFromUrl() {
    if (typeof window === "undefined") return null;
    const url = new URL(window.location.href);
    return url.searchParams.get("utm_source");
  }
  
  export function getSavedSource() {
    if (typeof window === "undefined") return "unknown";
    return localStorage.getItem("lead_source") || "unknown";
  }
  
  export function saveSource(source) {
    if (typeof window === "undefined") return;
    localStorage.setItem("lead_source", source);
  }
  
  export function getOrCreateLeadId() {
    if (typeof window === "undefined") return "server";
    let id = localStorage.getItem("lead_id");
    if (!id) {
      id =
        (crypto?.randomUUID?.() ||
          `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`);
      localStorage.setItem("lead_id", id);
    }
    return id;
  }
  