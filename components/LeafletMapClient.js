import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ZONES = [
  {
    id: "festival",
    title: "Фестивальная зона",
    position: [13.1, 100.9],
  },
  {
    id: "pattaya",
    title: "Паттайя",
    position: [12.9236, 100.8825],
  },
  {
    id: "bangkok",
    title: "Бангкок",
    position: [13.7563, 100.5018],
  },
  {
    id: "airport",
    title: "Аэропорт Суварнабхуми",
    position: [13.69, 100.7501],
  },
];

export default function LeafletMapClient() {
  return (
    <section style={{ marginTop: "56px" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "28px",
          padding: "18px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            marginBottom: "14px",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "6px",
            }}
          >
            Логистика и размещение
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Карта маршрута
          </h2>
        </div>

        <div
          style={{
            height: "460px",
            borderRadius: "22px",
            overflow: "hidden",
          }}
        >
          <MapContainer
            center={[13.25, 100.75]}
            zoom={8}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {ZONES.map((zone) => (
              <CircleMarker
                key={zone.id}
                center={zone.position}
                radius={10}
                pathOptions={{
                  color: "#ffffff",
                  weight: 3,
                  fillColor: "#111111",
                  fillOpacity: 1,
                }}
              />
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}