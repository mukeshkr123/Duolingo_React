import { Image, Text, View } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/index";
import question from "./assets/data/oneQuestionWithOption";

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
          />
        ))}
      </View>
    </View>
  );
}
