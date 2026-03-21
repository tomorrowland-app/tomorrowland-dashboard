import Head from "next/head";

const TELEGRAM_USERNAME = "Pavel777_1";
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

const HOTELS = [
  {
    name: "Bangkok (центр) — удобно для комфорта",
    tag: "Для пар / комфорт",
    bullets: [
      "Комфортный сон после фестиваля",
      "Утром легко добраться в город/аэропорт",
      "Подходит, если не хочешь жить “в поле”",
    ],
    risks: ["Дороже", "Дальше ехать до фестиваля"],
  },
  {
    name: "Pattaya / Jomtien — баланс цена/ночная жизнь",
    tag: "Для тусовщиков",
    bullets: [
      "Много вариантов по бюджету",
      "Еда/магазины рядом",
      "Можно собрать компанию на трансфер",
    ],
    risks: ["Шумнее", "Ночью такси может быть дороже"],
  },
  {
    name: "Ближе к локации фестиваля — минимальная логистика",
    tag: "Максимум удобства",
    bullets: [
      "Самый короткий путь домой",
      "Лучший вариант для выезда ночью",
      "Меньше зависимости от такси",
    ],
    risks: ["Может быть мало вариантов", "Цены растут быстрее всего"],
  },
];

export default function Hotels() {
  return (
    <>
      <Head>
        <title>Tomorrowland Thailand • Отели</title>
        <meta
          name="description"
          content="Подбор отеля под Tomorrowland Thailand: удобство, логистика, для кого подходит. Переход в Telegram в 1 клик."
        />
      </Head>

      <div className="min-h-screen bg-[#05030a] text-white">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
          <div className="absolute top-40 -left-20 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[120px]" />
          <div className="absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-violet-500/20 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>

        <main className="relative mx-auto max-w-6xl px-6 pb-28 pt-10 md:pt-16">
          <div className="text-sm text-white/70">Tomorrowland Thailand • Отели</div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Выбери формат жилья —{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
              я подберу конкретные отели
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Сейчас это витрина категорий (MVP). Ты выбираешь подход → я уточняю наличие,
            цену и лучший способ добраться ночью после закрытия.
          </p>

          <section className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
            {HOTELS.map((h) => (
              <div
                key={h.name}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="text-xs text-white/60">{h.tag}</div>
                <div className="mt-2 text-lg font-semibold">{h.name}</div>

                <div className="mt-4 text-sm font-semibold text-white/80">Подходит если:</div>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {h.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-4 text-sm font-semibold text-white/80">Риски:</div>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {h.risks.map((r) => (
                    <li key={r}>— {r}</li>
                  ))}
                </ul>

                <a
                  href={`${TELEGRAM_LINK}?text=${encodeURIComponent(
                    `Хочу отели: ${h.name}. Бюджет/даты: _____. Кол-во людей: ____.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Написать в Telegram →
                </a>
              </div>
            ))}
          </section>

          {/* Sticky CTA */}
          <div className="fixed inset-x-0 bottom-0 z-50">
            <div className="mx-auto max-w-6xl px-6 pb-6">
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-black/60 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
                <div className="text-xs text-white/70 md:text-sm">
                  Хочешь подбор под бюджет и даты? Напиши — отвечу быстро.
                </div>
                <a
                  href={`${TELEGRAM_LINK}?text=${encodeURIComponent(
                    "Хочу подбор отеля. Даты: ____. Бюджет: ____. Кол-во людей: ____."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Написать в Telegram →
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default function Hotels() { return <div>Hotels page</div> }