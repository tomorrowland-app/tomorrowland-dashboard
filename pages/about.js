import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#05030a] text-white px-6 py-12 relative overflow-hidden">

      {/* Neon background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-[130px]" />
        <div className="absolute top-44 -left-24 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[130px]" />
        <div className="absolute -bottom-52 right-0 h-[620px] w-[620px] rounded-full bg-violet-500/20 blur-[150px]" />
      </div>

      <section className="relative max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold">
          О сервисе
        </h1>

        <p className="mt-6 text-white/75 leading-relaxed">
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
    Night transfer
  </span>
</div>
          Этот сервис создан для тех, кто едет на Tomorrowland Thailand
          и хочет избежать хаоса с жильём и ночным выездом после фестиваля.
        </p>

        <p className="mt-4 text-white/75 leading-relaxed">
          Мы помогаем подобрать отели с учётом логистики и организовать
          комфортный выезд. Бронирование происходит через реальное
          турагентство с опытом работы и публичной репутацией.
        </p>

        {/* Как это работает */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Как проходит бронирование</h2>

          <ol className="mt-6 space-y-4 text-white/70">
            <li>1️⃣ Вы выбираете формат проживания и логистику.</li>
            <li>2️⃣ Мы рассчитываем варианты через партнёрские агрегаторы.</li>
            <li>3️⃣ Подтверждаем наличие и фиксируем детали.</li>
            <li>4️⃣ Бронирование происходит через агентство.</li>
          </ol>
        </div>

        {/* Доверие */}
        <div className="mt-16 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">
            Турагентство
          </h2>

          <p className="mt-4 text-white/70 text-sm">
            Работаем через действующее турагентство с опытом работы,
            отзывами и официальным сайтом.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">

            <a
              href="https://my-mir.ru/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              🌐 Сайт агентства
            </a>

            <a
              href="https://yandex.ru/profile/1208574781?lang=ru"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              ⭐ Отзывы на Яндексе
            </a>

          </div>
        </div>

        {/* Возврат */}
        <div className="mt-16">
          <Link
            href="/"
            className="text-sm underline text-cyan-300 hover:text-white"
          >
            ← Вернуться на главную
          </Link>
        </div>

      </section>
    </div>
  );
}
export default function About() { return <div>About page</div> }