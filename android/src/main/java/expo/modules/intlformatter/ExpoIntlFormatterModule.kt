package expo.modules.intlformatter

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.text.NumberFormat
import java.util.Locale

class ExpoIntlFormatterModule : Module() {
  fun getTranslatedLanguageName(language: String, locale: String): String {
    return try {
      val targetLocale = Locale.forLanguageTag(locale)
      val translatedName = targetLocale.getDisplayLanguage(Locale.forLanguageTag(language))
      translatedName.replaceFirstChar { it.uppercase(targetLocale) }
    } catch (e: Exception) {
      language.uppercase()
    }
}

  fun formatNumber(number: Double, locale: String): String {
    val locale = Locale.forLanguageTag(locale)
    val numberFormat = NumberFormat.getCompactNumberInstance(locale, NumberFormat.Style.SHORT)
    numberFormat.maximumFractionDigits = maximumFractionDigits
    numberFormat.minimumFractionDigits = 1
    return numberFormat.format(number)
  }

  override fun definition() = ModuleDefinition {
    Name("ExpoIntlFormatter")

    Function("formatNumber") { originalNumber: Double, locale: String ->
      formatNumber(originalNumber, locale)
    }

    Function("getTranslatedLanguageName") { language: String, locale: String ->
      getTranslatedLanguageName(language, locale)
    }

    Function("getRelativeTime") { language: String, locale: String ->
      "Not implemented yet"
    }
  }
}
