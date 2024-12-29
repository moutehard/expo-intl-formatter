import { NativeModule, requireNativeModule } from "expo";

declare class ExpoIntlFormatterModule extends NativeModule {
  formatNumber(number: number, locale: string): string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIntlFormatterModule>(
  "ExpoIntlFormatter"
);
