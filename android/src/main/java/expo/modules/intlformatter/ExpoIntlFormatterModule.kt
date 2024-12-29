package expo.modules.intlformatter

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.text.NumberFormat
import java.util.Locale

class ExpoIntlFormatterModule : Module() {
  fun getLocale(languageCode: String): Locale {
    return Locale.getAvailableLocales().find { it.language == languageCode }
      ?: Locale.US
  }

  fun formatNumber(number: Double, languageCode: String): String {
    val locale = getLocale(languageCode)
    val numberFormat = NumberFormat.getCompactNumberInstance(locale, NumberFormat.Style.SHORT)
    numberFormat.maximumFractionDigits = maximumFractionDigits
    numberFormat.minimumFractionDigits = 1
    return numberFormat.format(number)
  }
  override fun definition() = ModuleDefinition {
    Name("ExpoIntlFormatter")

    Function("formatNumber") { originalNumber: Double, languageCode: String ->
      formatNumber(originalNumber, languageCode)
    }
  }
}
