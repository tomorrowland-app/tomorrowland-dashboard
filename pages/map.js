import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 12 }}>Карта фестиваля</h1>

      <div style={{ borderRadius: 12, overflow: "hidden" }}>
        <LeafletMap />
      </div>

      <p style={{ marginTop: 16, opacity: 0.9 }}>
        Жмёт Telegram — дальше менеджер фиксирует отель/трансфер
      </p>
    </main>
  );
}