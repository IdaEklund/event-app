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
    width: 100,
    height: 30,
    margin: 20,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
