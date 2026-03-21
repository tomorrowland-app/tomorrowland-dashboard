import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function LeafletMap({ venue, points }) {

  const center = [venue.lat, venue.lng];

  return (
    <MapContainer
      center={center}
      zoom={9}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[venue.lat, venue.lng]}>
        <Popup>
          <b>Tomorrowland Thailand</b>
          <br/>
          Wisdom Valley
        </Popup>
      </Marker>

      {points.map((p) => (
        <Marker key={p.name} position={[p.lat, p.lng]}>
          <Popup>
            <b>{p.name}</b>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}