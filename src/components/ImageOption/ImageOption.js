import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text.toUpperCase()}</Text>
    </View>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageOption;
