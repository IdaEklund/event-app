import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator
        size="large"
        color="black"
        style={{ flex: 1, position: "absolute" }}
      ></ActivityIndicator>
    </View>
  );
}


