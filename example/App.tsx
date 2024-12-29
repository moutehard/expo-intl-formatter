import { formatNumber } from "expo-intl-formatter";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Format number</Text>
        <Group name="EN">
          <Text>{formatNumber(12345, "en")}</Text>
          <Text>{formatNumber(123456, "en")}</Text>
          <Text>{formatNumber(1234567, "en")}</Text>
        </Group>
        <Group name="FR">
          <Text>{formatNumber(12345, "fr")}</Text>
          <Text>{formatNumber(123456, "fr")}</Text>
          <Text>{formatNumber(1234567, "fr")}</Text>
        </Group>
        <Group name="IT">
          <Text>{formatNumber(12345, "it")}</Text>
          <Text>{formatNumber(123456, "fr")}</Text>
          <Text>{formatNumber(1234567, "fr")}</Text>
        </Group>
        <Group name="ES">
          <Text>{formatNumber(12345, "es")}</Text>
          <Text>{formatNumber(123456, "fr")}</Text>
          <Text>{formatNumber(1234567, "fr")}</Text>
        </Group>
        <Group name="PT">
          <Text>{formatNumber(12345, "pt")}</Text>
          <Text>{formatNumber(123456, "fr")}</Text>
          <Text>{formatNumber(1234567, "fr")}</Text>
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
