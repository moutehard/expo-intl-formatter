import ExpoModulesCore

public class ExpoIntlFormatterModule: Module {
    func formatNumber(_ number: Double, locale: String) -> String {
        // Check if the ios version is >= 15.0
        if #available(iOS 15.0, *) {
            let locale = Locale(identifier: locale)
            let compactNameFormatted = number.formatted(.number
                .locale(locale)
                .notation(.compactName)
                .precision(.fractionLength(0...1)))
            return compactNameFormatted
        }
        return String(number)
        
    }

    func getTranslatedLanguageName(language: String, locale: String) -> String {
        if #available(iOS 15.0, *) {
            // Ensure both locale and language are valid Locale identifiers
            let targetLocale = Locale(identifier: locale)
            
            if let translatedName = targetLocale.localizedString(forLanguageCode: language) {
                // Capitalize the translated language name
                return translatedName.capitalized(with: targetLocale)
            }
        }
        
        // Fallback: Return the language code in uppercase
        return language.uppercased()
    }

    func getRelativeTime(dateString: String, locale: String) -> String {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        
        guard let date = formatter.date(from: dateString) else {
            return "Invalid date"
        }
        
        let relativeFormatter = RelativeDateTimeFormatter()
        relativeFormatter.locale = Locale(identifier: locale)
        relativeFormatter.unitsStyle = .full
        relativeFormatter.dateTimeStyle = .named
        
        let now = Date()
        let timeAgo = relativeFormatter.localizedString(for: date, relativeTo: now)
        return timeAgo
    }

    public func definition() -> ModuleDefinition {
        Name("ExpoIntlFormatter")

        Function("formatNumber") { (originalNumber: Double, locale: String) -> String in
            formatNumber(originalNumber, locale: locale)
        }

        Function("getLocalizedLanguageName") { (language: String, locale: String) -> String in 
            getTranslatedLanguageName(language: language, locale: locale)
        }

        Function("getRelativeTime") { (dateString: String, locale: String) -> String in
            getRelativeTime(dateString: dateString, locale: locale)
        }
    }
}
