//import { useRouter } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/styles";

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
        <Text style={styles.closeText}>- Tryck för att stänga -</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.error,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 200,
  },
  errorText: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 60
  },
  closeText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primary,
    marginBottom: 20
  }
});
