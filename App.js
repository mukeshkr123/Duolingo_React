import { Image, Text, View } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/index";

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
      </View>
    </View>
  );
}
