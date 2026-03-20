import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { EventType } from "../types/eventType";

type Props = {
  item: EventType;
};

export default function Item({ item }: Props) {
  const router = useRouter();

  return (
    <View>
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
        <Text style={styles.item}>
          {item.title}
          {item.date}
          {item.time} {item.venue}
          {item.city}
          {item.address}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
  
  item: {
    fontWeight: "500",
    flexDirection: "column",
  },
});
