import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TELEGRAM_URL = "https://t.me/Pavel777_1";

const ZONES = [
  {
    id: "festival",
    title: "Фестивальная зона",
    short: "Максимально близко к площадке",
    position: [13.1, 100.9],
    accent: "#ffffff",
    fill: "#111111",
    description:
      "Подходит тем, кто хочет быть максимально близко к фестивалю и минимизировать дорогу после закрытия.",
    bullets: [
      "Самая сильная логистика по времени",
      "Подходит для тех, кто ценит близость к площадке",
      "Обычно приоритет — не цена, а удобство",
    ],
    budget: "Комфорт / выше среднего",
    transfer: "Минимальное время в дороге",
    buttonText: "Подобрать жильё рядом →",
  },
  {
    id: "pattaya",
    title: "Паттайя",
    short: "Главная база для проживания",
    position: [12.9236, 100.8825],
    accent: "#ffffff",
    fill: "#111111",
    description:
      "Наиболее понятная и удобная база: выбор отелей шире, легче собрать комфортный вариант под бюджет и трансфер.",
    bullets: [
      "Лучший баланс цена / выбор / комфорт",
      "Много вариантов жилья",
      "Подходит большинству клиентов",
    ],
    budget: "Бюджет / комфорт / средний+",
    transfer: "Удобно строить ночной выезд",
    buttonText: "Подобрать варианты в Паттайе →",
  },
  {
    id: "bangkok",
    title: "Бангкок",
    short: "Точка прилёта и логистики",
    position: [13.7563, 100.5018],
    accent: "#ffffff",
    fill: "#111111",
    description:
      "Подходит, если важен прилёт, пересадка, ночь до/после фестиваля или комбинированный маршрут по Таиланду.",
    bullets: [
      "Удобно под авиалогику",
      "Можно брать как стартовую или финальную ночь",
      "Подходит не всем под ежедневную дорогу",
    ],
    budget: "От бюджетного до премиума",
    transfer: "Сильнее зависит от маршрута",
    buttonText: "Собрать маршрут через Бангкок →",
  },
  {
    id: "airport",
    title: "Аэропорт Суварнабхуми",
    short: "Для короткой стыковки и ночёвки",
    position: [13.69, 100.7501],
    accent: "#ffffff",
    fill: "#111111",
    description:
      "Подходит для короткой остановки, позднего прилёта или раннего вылета, когда нужна понятная точка сборки маршрута.",
    bullets: [
      "Удобен под ночь до/после поездки",
      "Не как основная база фестиваля",
      "Хорош для гибкой логистики",
    ],
    budget: "Средний",
    transfer: "Удобен как транзитная точка",
    buttonText: "Подобрать отель у аэропорта →",
  },
];

function MapFlyTo({ activeZone }) {
  const map = useMap();

  useMemo(() => {
    if (!activeZone) return;
    map.flyTo(activeZone.position, activeZone.id === "festival" ? 10 : 9, {
      duration: 1.2,
    });
  }, [activeZone, map]);

  return null;
}

export default function LeafletMap() {
  const [activeZone, setActiveZone] = useState(ZONES[1]);

  return (
    <section
      style={{
        marginTop: "56px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 0.9fr",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              marginBottom: "14px",
              flexWrap: "wrap",
            }}
          >
            <div>
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
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  style={{
                    background:
                      activeZone.id === zone.id
                        ? "#ffffff"
                        : "rgba(255,255,255,0.05)",
                    color: activeZone.id === zone.id ? "#111111" : "#ffffff",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "999px",
                    padding: "10px 14px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {zone.title}
                </button>
              ))}
            </div>
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

              <MapFlyTo activeZone={activeZone} />

              {ZONES.map((zone) => (
                <CircleMarker
                  key={zone.id}
                  center={zone.position}
                  radius={activeZone.id === zone.id ? 12 : 9}
                  eventHandlers={{
                    click: () => setActiveZone(zone),
                  }}
                  pathOptions={{
                    color: "#ffffff",
                    weight: activeZone.id === zone.id ? 4 : 3,
                    fillColor: "#111111",
                    fillOpacity: 1,
                  }}
                />
              ))}
            </MapContainer>
          </div>
        </div>

        <aside
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "24px",
            color: "#fff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "520px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              Выбранная зона
            </div>

            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "32px",
                lineHeight: 1.05,
              }}
            >
              {activeZone.title}
            </h3>

            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              {activeZone.short}
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.6,
                fontSize: "15px",
                marginBottom: "22px",
              }}
            >
              {activeZone.description}
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {activeZone.bullets.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "15px",
                    lineHeight: 1.45,
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      marginTop: "7px",
                      flexShrink: 0,
                    }}
                  />
                  <div>{item}</div>
                </div>
              ))}
            </div>

            <div
  className="leaflet-product-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1.4fr 0.9fr",
    gap: "24px",
    alignItems: "stretch",
  }}
>
            
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "6px",
                  }}
                >
                  Бюджет
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600 }}>
                  {activeZone.budget}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "6px",
                  }}
                >
                  Логистика
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600 }}>
                  {activeZone.transfer}
                </div>
              </div>
            </div>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#ffffff",
              color: "#111111",
              padding: "16px 20px",
              borderRadius: "18px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            {activeZone.buttonText}
          </a>
        </aside>
      </div>
    </section>
  );
}