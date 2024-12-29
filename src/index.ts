// Reexport the native module. On web, it will be resolved to ExpoIntlFormatterModule.web.ts
// and on native platforms to ExpoIntlFormatterModule.ts
export { default } from './ExpoIntlFormatterModule';
export { default as ExpoIntlFormatterView } from './ExpoIntlFormatterView';
export * from  './ExpoIntlFormatter.types';
