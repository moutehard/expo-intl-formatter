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
    public func definition() -> ModuleDefinition {
        Name("ExpoIntlFormatter")

        Function("formatNumber") { (originalNumber: Double, locale: String) -> String in
            formatNumber(originalNumber, locale: locale)
        }
    }
}
