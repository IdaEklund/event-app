import { Text, View } from "react-native";
import { colors } from "@/constants/styles";
import { StyleSheet } from "react-native";

export default function EmptyFavourites() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Du har inga favoriter än...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 16
  },
});
