const TELEGRAM_USERNAME = "Pavel777_1";
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

const OPTIONS = [
  {
    title: "🚐 Шаттл",
    who: "Лучше всего: если хочешь бюджетно и без переговоров с такси ночью.",
    pros: ["Дешевле такси", "Понятный маршрут", "Нет торга ночью"],
    cons: ["Привязан ко времени", "Очереди после закрытия"],
    tip: "Совет: брать заранее, на обратном пути выходить чуть раньше финала, чтобы не стоять час.",
  },
  {
    title: "🚕 Такси",
    who: "Лучше всего: если вас 2–3 человека и важна гибкость.",
    pros: ["Едешь когда хочешь", "Дверь-в-дверь"],
    cons: ["Ночью цена выше", "Можно долго ждать", "В пик — хаос"],
    tip: "Совет: заранее сохранить точку посадки и иметь запасной план (шаттл).",
  },
  {
    title: "🚐 Минивэн (группа)",
    who: "Лучше всего: если вас 4–9 человек и хотите комфорт без сюрпризов.",
    pros: ["Фикс-прайс", "Комфорт", "Можно заранее договориться о времени"],
    cons: ["Дороже шаттла", "Нужно собрать группу"],
    tip: "Совет: выгоднее всего делить стоимость на компанию. Это самый спокойный вариант ночью.",
  },
];

export default function Transfer() {
  const prefilled = encodeURIComponent(
    "Привет! Нужен трансфер на Tomorrowland Thailand. Подскажи варианты (шаттл/такси/минивэн) и цену под мой отель."
  );

  return (
    <div style={{ minHeight: "100vh", background: "#05030a", color: "white" }}>
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: 24,
          paddingBottom: 110, // чтобы нижний sticky не перекрывал контент
        }}
      >
        <div style={{ opacity: 0.75, fontSize: 12, marginBottom: 12 }}>
          Tomorrowland Thailand • Трансфер
        </div>

        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 12 }}>
          Как уехать с фестиваля ночью — без хаоса
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.8, maxWidth: 760 }}>
          После закрытия фестиваля такси становится мало, цены прыгают, люди стоят в очередях.
          Ниже — 3 реальных варианта, чем добираться туда-обратно. Нажимаешь кнопку — переходишь в Telegram,
          я уточняю по твоему отелю и фиксирую план.
        </p>

        <div style={{ display: "grid", gap: 14, marginTop: 20 }}>
          {OPTIONS.map((o) => (
            <div
              key={o.title}
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: 18,
                padding: 18,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700 }}>{o.title}</div>
              <div style={{ marginTop: 8, opacity: 0.85 }}>{o.who}</div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginTop: 14,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, opacity: 0.9 }}>Плюсы</div>
                  <ul style={{ marginTop: 6, paddingLeft: 18, opacity: 0.8 }}>
                    {o.pros.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, opacity: 0.9 }}>Минусы</div>
                  <ul style={{ marginTop: 6, paddingLeft: 18, opacity: 0.8 }}>
                    {o.cons.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: 12, fontSize: 14, opacity: 0.85 }}>
                <b>Совет:</b> {o.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          padding: 12,
          background: "rgba(5,3,10,0.72)",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          <div style={{ fontSize: 13, opacity: 0.85 }}>
            Хочешь вариант под твой отель? Ответ в Telegram за 15–30 минут.
          </div>

          <a
            href={`${TELEGRAM_LINK}?text=${prefilled}`}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "white",
              color: "black",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 800,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Написать в Telegram →
          </a>
        </div>
      </div>
    </div>
  );
}