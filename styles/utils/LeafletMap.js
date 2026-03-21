import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const center = [13.25, 100.75];

  const points = [
    {
      id: "bangkok",
      title: "Бангкок",
      position: [13.7563, 100.5018],
      text: "Точка прилёта и основная логистика.",
    },
    {
      id: "airport",
      title: "Аэропорт Суварнабхуми",
      position: [13.69, 100.7501],
      text: "Удобная точка для прилёта и встречи.",
    },
    {
      id: "pattaya",
      title: "Паттайя",
      position: [12.9236, 100.8825],
      text: "Удобная база под проживание и трансфер.",
    },
    {
      id: "festival",
      title: "Фестивальная зона",
      position: [13.1, 100.9],
      text: "Демо-точка фестивальной зоны.",
    },
  ];
<div style={{ color: "red", marginBottom: "10px" }}>ТЕСТ 777</div>
  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{
        height: "420px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {points.map((point) => (
        <CircleMarker
          key={point.id}
          center={point.position}
          radius={10}
          pathOptions={{
            color: "#ffffff",
            weight: 3,
            fillColor: "#111111",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <div>
              <strong>{point.title}</strong>
              <br />
              {point.text}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}