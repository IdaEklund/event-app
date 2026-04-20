import { colors } from "@/constants/styles";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";


type Props = PressableProps & {
    children: string;
}

export default function Btn({ children, ...props }: Props) {
  return (
    <Pressable {...props} style={styles.pickerButton}>
      <Text>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pickerButton: {
    width: 120,
    height: 40,
    margin: 20,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
