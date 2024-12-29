import {
  formatNumber,
  getLocalizedLanguageName,
  getRelativeTime,
} from "expo-intl-formatter";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  const twoYearsAgo = new Date().setFullYear(new Date().getFullYear() - 2);
  const oneWeekAgo = new Date().setDate(new Date().getDate() - 7);
  const fiveHoursAgo = new Date().setHours(new Date().getHours() - 5);
  const oneMinuteAgo = new Date().setMinutes(new Date().getMinutes() - 1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Format number</Text>
        <Group name="EN">
          <Text>{formatNumber(12345, "en")}</Text>
          <Text>{formatNumber(123456, "en")}</Text>
          <Text>{formatNumber(1234567, "en")}</Text>
        </Group>
        <Group name="RU">
          <Text>{formatNumber(12345, "pt")}</Text>
          <Text>{formatNumber(123456, "fr")}</Text>
          <Text>{formatNumber(1234567, "fr")}</Text>
        </Group>
        <Text style={styles.header}>Get localized language name</Text>
        <Group name="EN">
          <Text>{getLocalizedLanguageName("en", "en")}</Text>
          <Text>{getLocalizedLanguageName("ru", "en")}</Text>
          <Text>{getLocalizedLanguageName("fr", "en")}</Text>
        </Group>
        <Group name="RU">
          <Text>{getLocalizedLanguageName("en", "ru")}</Text>
          <Text>{getLocalizedLanguageName("ru", "ru")}</Text>
          <Text>{getLocalizedLanguageName("fr", "ru")}</Text>
        </Group>
        <Text style={styles.header}>Get relative time (RFC3339)</Text>
        <Group name="EN">
          <Text>
            {getRelativeTime(new Date(twoYearsAgo).toISOString(), "en")}
          </Text>
          <Text>
            {getRelativeTime(new Date(oneWeekAgo).toISOString(), "en")}
          </Text>
          <Text>
            {getRelativeTime(new Date(fiveHoursAgo).toISOString(), "en")}
          </Text>
          <Text>
            {getRelativeTime(new Date(oneMinuteAgo).toISOString(), "en")}
          </Text>
        </Group>
        <Group name="RU">
          <Text>
            {getRelativeTime(new Date(twoYearsAgo).toISOString(), "ru")}
          </Text>
          <Text>
            {getRelativeTime(new Date(oneWeekAgo).toISOString(), "ru")}
          </Text>
          <Text>
            {getRelativeTime(new Date(fiveHoursAgo).toISOString(), "ru")}
          </Text>
          <Text>
            {getRelativeTime(new Date(oneMinuteAgo).toISOString(), "ru")}
          </Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
