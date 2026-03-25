import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/LeafletMapClient"), {
  ssr: false,
});
const TELEGRAM_USERNAME = "Pavel777_1";
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

const TRUST = {
  yandexProfile: "https://yandex.ru/profile/1208574781?lang=ru",
  uncleSite: "https://my-mir.ru/",
  badgeText: "Яндекс награда за отзывы (2026)",
};

const AUDIENCE_CARDS = [
  {
    tag: "СЕМЬЯ / СПОКОЙНО",
    title: "Комфортный сон после фестиваля",
    bullets: ["тише ночью", "удобно добираться", "без риска с очередями"],
    href: "/hotels",
  },
  {
    tag: "ТУСОВЩИКИ",
    title: "Ночная жизнь + логистика без боли",
    bullets: ["ночные выезды", "живые районы", "оптимально по цене"],
    href: "/hotels",
  },
  {
    tag: "МАКСИМУМ УДОБСТВА",
    title: "Ближе к локации фестиваля",
    bullets: ["короткий путь домой", "меньше хаоса", "дороже — но проще"],
    href: "/hotels",
  },
];

const HOW = [
  {
    step: "01",
    title: "Выбираешь формат жилья",
    text: "Не “все отели подряд”, а 2–3 варианта, которые реально подходят под фестиваль.",
  },
  {
    step: "02",
    title: "Смотришь как уезжать ночью",
    text: "Шаттл / такси / минивэн — объясняем плюсы и минусы, чтобы не застрять после закрытия.",
  },
  {
    step: "03",
    title: "Жмёшь Telegram — фиксируем план",
    text: "Я уточняю наличие и цену, и ты получаешь конкретику, а не переписку “с нуля”.",
  },
];

const FAQ = [
  {
    q: "Вы официальный туроператор фестиваля?",
    a: "Нет. Это мини-сервис под фестивали. Бронирование делается через туристическое агентство через агрегаторы.",
  },
  {
    q: "Почему не просто Booking/Agoda?",
    a: "Потому что там нет ключевого: как реально уехать ночью после закрытия и какие районы/отели подходят под этот фестиваль по логистике.",
  },
  {
    q: "Сколько времени занимает подбор?",
    a: "Обычно 15–30 минут после сообщения в Telegram, если даты и бюджет понятны.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomorrowland Thailand — Отели + Трансфер</title>
        <meta
          name="description"
          content="Подбор жилья под Tomorrowland Thailand + логистика ночного выезда. 2–3 варианта, быстро, по делу. Переход в Telegram."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#05030a] text-white selection:bg-fuchsia-500/30">

        {/* Header */}
        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
  TL
</div>
            <div className="leading-tight">
              <div className="text-sm text-white/70">Festival travel</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <Link className="hover:text-white" href="/hotels">
              Отели
            </Link>
            <Link className="hover:text-white" href="/transfer">
              Трансфер
            </Link>
            <Link className="hover:text-white" href="/about">
              О нас
            </Link>
          </nav>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
          >
            Telegram →
          </a>
        </header>

        <main className="relative mx-auto max-w-6xl px-6 pb-28 pt-6 md:pt-10">
          {/* Urgency badge */}
       

          {/* Hero */}
         {/* Hero */}
         <section className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#07050d]">

{/* КАРТИНКА */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/festival.png')",
    backgroundSize: "cover",
    backgroundPosition: "78% center",
    opacity: 0.65, // СДЕЛАЛ ЯРЧЕ
  }}
/>

{/* ГРАДИЕНТ */}
<div
  style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(7,5,13,0.9) 0%, rgba(7,5,13,0.6) 35%, rgba(7,5,13,0.2) 65%, transparent 100%)",
  }}
/>
<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(7,5,13,0.99) 0%, rgba(7,5,13,0.96) 40%, rgba(7,5,13,0.55) 64%, rgba(7,5,13,0.05) 100%)",
    zIndex: 1,
  }}
/>
{/* КОНТЕНТ */}
<div className="relative z-10 px-6 py-12 md:px-10 md:py-16 bg-gradient-to-r from-[#07050d]/95 via-[#07050d]/80 to-transparent">

  {/* ПЛАШКА */}
  <div className="inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur">
    Билеты растут → отели дорожают. Лучше фиксировать заранее.
  </div>

  {/* ТЕКСТ */}
  <div className="mt-8 max-w-[720px]">

    <h1 className="text-4xl font-semibold leading-[1] tracking-tight text-white md:text-6xl">
      Отели и трансфер на Tomorrowland Thailand
    </h1>

    <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/85">
      Подберём 2–3 варианта проживания и объясним, как удобно уехать
      после фестиваля без очередей и хаоса.
    </p>

    {/* БЕЙДЖИ */}
    <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/85">
      <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur">
        Festival stay
      </span>
      <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur">
        Night transfer
      </span>
      <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur">
        Thailand 2026
      </span>
    </div>

    {/* КНОПКИ */}
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-semibold text-black hover:bg-white/90"
      >
        Подобрать варианты →
      </a>

      <a
        href="#stay-format"
        className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/30 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-black/40"
      >
<a href="#night-transfer" className="...">
  Как уехать ночью
</a>
      </a>
    </div>

  </div>
</div>
</section>


          {/* Audience chooser */}
          <section className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
            {AUDIENCE_CARDS.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="text-xs text-white/60">{c.tag}</div>
                <div className="mt-2 text-lg font-semibold">{c.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {c.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-5 text-sm font-semibold text-white/85">
                  Перейти →
                </div>
              </Link>
            ))}
          </section>

          {/* Stay format */}
<section className="mt-12 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
    <div className="max-w-xl">
    <div id="night-transfer" className="...">
        Форматы размещения по удалённости
      </div>

      <div className="mt-2 text-sm text-white/70">
        Помогаем выбрать не просто отель, а удобный сценарий поездки:
        ближе к площадке, баланс по цене и логистике или размещение в городе.
      </div>

      <div className="mt-6 grid gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-base font-semibold text-white">
            Ближе к площадке
          </div>
          <div className="mt-2 text-sm text-white/70">
            Быстрее возвращаться ночью, меньше стресса после фестиваля,
            но обычно выше бюджет.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-base font-semibold text-white">
            Баланс цены и логистики
          </div>
          <div className="mt-2 text-sm text-white/70">
            Компромисс между комфортом, стоимостью и временем в дороге.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-base font-semibold text-white">
            Городской формат
          </div>
          <div className="mt-2 text-sm text-white/70">
            Больше инфраструктуры и выбора, но дорога до площадки и обратно
            обычно дольше.
          </div>
        </div>
      </div>
    </div>

    <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#090512] p-6">
      <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center">
        <div className="absolute h-[300px] w-[300px] rounded-full border border-white/25" />
        <div className="absolute h-[210px] w-[210px] rounded-full border border-white/30" />
        <div className="absolute h-[120px] w-[120px] rounded-full border border-white/40" />

        <div className="absolute top-[18px] text-xs text-white/60">
          Городской формат
        </div>
        <div className="absolute top-[86px] text-xs text-white/65">
          Баланс
        </div>
        <div className="absolute text-sm font-medium text-white">
          Ближе к площадке
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-white/60">
        Это не карта местности, а схема выбора сценария размещения по
        удалённости, бюджету и удобству ночной логистики.
      </div>
    </div>
  </div>
</section>

          {/* How it works */}
          <section className="mt-12 md:mt-16">
            <div className="text-2xl font-semibold">Как это работает</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {HOW.map((h) => (
                <div
                  key={h.step}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="text-xs text-white/60">ШАГ {h.step}</div>
                  <div className="mt-2 text-lg font-semibold">{h.title}</div>
                  <div className="mt-2 text-sm text-white/70">{h.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Trust */}
          <section className="mt-12 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur md:mt-16 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold tracking-tight">
                  Доверие и прозрачность
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Партнёр — туристическое агентство "Мой Мир" с долголетней репутацией.
                </div>
                <div className="mt-3 text-xs text-white/60">{TRUST.badgeText}</div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={TRUST.yandexProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                  Яндекс отзывы →
                </a>
                <a
                  href={TRUST.uncleSite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Сайт агентства →
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12 md:mt-16">
            <div className="text-2xl font-semibold">Вопросы</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {FAQ.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-white/70">{f.a}</div>
                </div>
              ))}
            </div>
          </section>
          <footer className="mt-12 text-xs text-white/55 md:mt-16">
  Актуальные варианты проживания и доступные категории билетов уточняются напрямую через Telegram.
</footer>

          <section style={{ marginTop: "60px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Локация и маршрут до фестиваля
            </h2>

            <LeafletMap />
          </section>

          <section
            style={{
              marginTop: "80px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  color: "#fff",
                  marginBottom: "12px",
                }}
              >
                Как это работает
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "16px",
                }}
              >
                Помогаем быстро подобрать проживание, маршрут и удобный формат поездки под фестиваль.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>1</div>
                <h3 style={{ color: "#fff", marginBottom: "10px" }}>
  Выбираете удобную локацию
</h3>
<p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
  Сравниваете размещение: Паттайя, Бангкок или локации ближе к площадке фестиваля.
</p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>2</div>
                <h3 style={{ color: "#fff", marginBottom: "10px" }}>
  Получаете конкретные варианты
</h3>
<p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
  Подбираются несколько вариантов проживания под ваш бюджет, даты поездки и формат отдыха.
</p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>3</div>
                <h3 style={{ color: "#fff", marginBottom: "10px" }}>
  Согласовываете проживание и трансфер
</h3>
<p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
  После выбора согласовываются детали размещения, логистика и удобный маршрут до фестиваля.
</p>
              </div>
            </div>

            <div
              style={{
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              <a
                href="https://t.me/Pavel777_1"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: "#ffffff",
                  color: "#111111",
                  padding: "16px 24px",
                  borderRadius: "18px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Запросить варианты →
              </a>
            </div>
          </section>

          <section
            style={{
              marginTop: "60px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 24px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Реальные варианты проживания
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              <div style={cardStyle}>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                  style={imgStyle}
                />
                <div style={contentStyle}>
                  <div style={titleStyle}>Ravindra Beach Resort</div>
                  <div style={priceStyle}>от 397 000 ₽</div>
                  <div style={subStyle}>2 взрослых / DBL</div>
                  <a href="https://t.me/Pavel777_1" target="_blank" rel="noreferrer" style={btnStyle}>
                  Узнать условия  →
                  </a>
                </div>
              </div>

              <div style={cardStyle}>
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                  style={imgStyle}
                />
                <div style={contentStyle}>
                  <div style={titleStyle}>Meliá Pattaya Hotel</div>
                  <div style={priceStyle}>от 406 000 ₽</div>
                  <div style={subStyle}>2 взрослых / DBL</div>
                  <a href="https://t.me/Pavel777_1" target="_blank" rel="noreferrer" style={btnStyle}>
                  Узнать условия →
                  </a>
                </div>
              </div>

              <div style={cardStyle}>
                <img
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
                  style={imgStyle}
                />
                <div style={contentStyle}>
                  <div style={titleStyle}>Amari Pattaya</div>
                  <div style={priceStyle}>от 419 000 ₽</div>
                  <div style={subStyle}>2 взрослых / DBL</div>
                  <a href="https://t.me/Pavel777_1" target="_blank" rel="noreferrer" style={btnStyle}>
                  Узнать условия  →
                  </a>
                </div>
              </div>

              <div style={cardStyle}>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                  style={imgStyle}
                />
                <div style={contentStyle}>
                  <div style={titleStyle}>Centara Grand Mirage</div>
                  <div style={priceStyle}>от 424 000 ₽</div>
                  <div style={subStyle}>2 взрослых / DBL</div>
                  <a href="https://t.me/Pavel777_1" target="_blank" rel="noreferrer" style={btnStyle}>
                  Узнать условия  →
                  </a>
                </div>
              </div>
            </div>

            <div
  style={{
    marginTop: "40px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "24px",
    color: "#fff",
  }}
>
  <h3 style={{ marginBottom: "12px" }}>Доступные категории билетов</h3>

  <div style={{ lineHeight: 1.6 }}>
    <div>3-Day Pass — от 1050 USD</div>
    <div>VIP 3-Day Pass — от 1550 USD</div>
  </div>

  <div style={{ marginTop: "12px", color: "rgba(255,255,255,0.6)" }}>
    Актуальное наличие и доступные категории билетов уточняются по запросу.
  </div>
</div>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#05030a]/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
           

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Написать в Telegram →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
};

const contentStyle = {
  padding: "14px",
};

const titleStyle = {
  fontWeight: 700,
  color: "#fff",
  marginBottom: "6px",
};

const priceStyle = {
  fontSize: "16px",
  fontWeight: 700,
  marginBottom: "4px",
};

const subStyle = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.6)",
  marginBottom: "10px",
};

const btnStyle = {
  display: "inline-block",
  background: "#fff",
  color: "#111",
  padding: "8px 12px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "13px",
};