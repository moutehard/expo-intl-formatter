import ExpoIntlFormatterModule from "./ExpoIntlFormatterModule";

export function formatNumber(number: number, locale: string): string {
  return ExpoIntlFormatterModule.formatNumber(number, locale);
}
