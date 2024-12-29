import { NativeModule, requireNativeModule } from "expo";

declare class ExpoIntlFormatterModule extends NativeModule {
  formatNumber(number: number, locale: string): string;
  getLocalizedLanguageName(language: string, locale: string): string;
  getRelativeTime(date: string, locale: string): string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIntlFormatterModule>(
  "ExpoIntlFormatter"
);
