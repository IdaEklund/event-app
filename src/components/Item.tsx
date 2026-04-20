import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { EventType } from "../types/eventType";
import { colors } from "@/constants/styles";

type Props = {
  item: EventType;
};

export default function Item({ item }: Props) {
  const router = useRouter();

  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/modal",
            params: {
              id: item.id,
              title: item.title,
              date: item.date,
              time: item.time,
              venue: item.venue,
              address: item.address,
              city: item.city,
            },
          });
        }}
      >
        <View style={styles.eventContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.bodyText}>
            {item.date}
            {", "}
            {item.time}
          </Text>
          {item.venue && <Text style={styles.bodyText}>{item.venue}</Text>}
          <Text style={styles.bodyText}>{item.city}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "90%",
  },
  eventContainer: {
    justifyContent: "center",
    flexDirection: "column",
    gap: 4,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 3,
    color: colors.text,
  },
  bodyText: {
    fontSize: 16,
    color: colors.text
  },
});
