# Expo Intl Formatter

This repository provides utility functions to format numbers into compact representations (e.g., "1.2k", "1,2 k") based on a specified language code. It supports dynamically selecting the appropriate locale for the provided language code and allows customization of the maximum number of fractional digits displayed.

## Features
- Format numbers in a compact style (e.g., 1234.567 becomes "1.2k" or "1,2 k").
- Dynamically determine the locale from a language code (e.g., "fr" maps to French locales like "fr_FR").
- Customize the maximum number of fractional digits.
- Fallback to `en_US` if the language code is not recognized.

## Functions

### `formatNumber(number: number, languageCode: string): string`

**Description:**
Formats a number into a compact style representation using the specified language code and maximum fractional digits.

**Parameters:**
- `number`: The `number` value to be formatted.
- `languageCode`: A `string` representing the language code (e.g., "en" for English, "fr" for French).

**Returns:**
- A `string` representing the compactly formatted number in the appropriate locale.
