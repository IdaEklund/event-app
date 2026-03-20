//import { useRouter } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  setIsError: Dispatch<SetStateAction<boolean>>;
};

export default function ErrorMessage({ setIsError }: Props) {
  //const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Något gick fel</Text>
      <Pressable
        onPress={() => {
          setIsError(false);
        }}
      >
        <Text style={styles.closeText}>Stäng</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f65151",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 200,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginBottom: 20
  },
  closeText: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    marginBottom: 20
  }
});
