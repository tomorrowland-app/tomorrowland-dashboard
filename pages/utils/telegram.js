import { getSavedSource, getOrCreateLeadId } from "./tracking";

export function buildTelegramLink({ username, hotel, source }) {
  const finalSource = source || getSavedSource();
  const leadId = getOrCreateLeadId();

  const text = `
Привет! 👋
Интересует поездка на Tomorrowland Thailand.

Отель: ${hotel}
Источник: ${finalSource}
Lead ID: ${leadId}
`.trim();

  const encoded = encodeURIComponent(text);
  return `https://t.me/${username}?text=${encoded}`;
}
