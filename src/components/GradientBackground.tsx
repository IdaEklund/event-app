import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function GradientBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#2a2a2a"]}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
