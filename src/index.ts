import ExpoIntlFormatterModule from "./ExpoIntlFormatterModule";

export function formatNumber(number: number, locale: string): string {
  return ExpoIntlFormatterModule.formatNumber(number, locale);
}

export function getLocalizedLanguageName(
  language: string,
  locale: string
): string {
  return ExpoIntlFormatterModule.getLocalizedLanguageName(language, locale);
}

export function getRelativeTime(date: string, locale: string): string {
  return ExpoIntlFormatterModule.getRelativeTime(date, locale);
}
