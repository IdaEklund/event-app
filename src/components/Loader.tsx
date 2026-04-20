import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors } from "@/constants/styles";

export default function Loader() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator
        size="large"
        color={colors.secondary}
        style={styles.loader}
      ></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    position: "absolute",
  },
});


