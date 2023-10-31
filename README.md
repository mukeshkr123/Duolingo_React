# Duolingo Clone

## Project Setup

1. Install Expo CLI globally:

   ```bash
   npm install --global expo-cli
   ```

2. Create a new Expo project named "Duolingo" with a blank template:

   ```bash
   npx expo init Duolingo -t blank
   ```

3. Navigate to the project directory:

   ```bash
   cd Duolingo
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Debugging

For debugging purposes, you can use the following methods to log messages:

```javascript
console.log("logging"); // Log a message
console.warn("logging"); // Log a warning
console.error("Error"); // Log an error
```

## First Component

Here's the code for your initial component:

```jsx
import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;
```

## Core Components

### Text

The `Text` component is used to display text on your app. It's similar to the HTML `<span>` or `<div>`. Here's a basic example:

```javascript
import { Text } from "react-native";

<Text>Hello, World!</Text>;
```

### View

The `View` component is like a container that helps you structure and style your content. It's similar to the HTML `<div>`. You can nest other components within a `View` to create complex layouts:

```javascript
import { View } from "react-native";

<View>
  <Text>Header</Text>
  <Text>Content</Text>
  <Text>Footer</Text>
</View>;
```

### Image

The `Image` component is used to display images. It's similar to the HTML `<img>` element. You can specify a source URL or local file:

```javascript
import { Image } from "react-native";

<Image
  source={{
    uri: "https://example.com/image.jpg",
  }}
  style={{ width: 200, height: 200 }}
/>;
```

### TextInput

The `TextInput` component allows users to input text. It's similar to the HTML `<input>` or `<textarea>` elements. Here's a basic usage:

```javascript
import { TextInput } from "react-native";

<TextInput placeholder="Enter your name" />;
```

### ScrollView

The `ScrollView` component is used for creating scrollable content. It's similar to HTML's `<div>` with a scrollbar. You can nest other components within a `ScrollView` to create scrollable views:

```javascript
import { ScrollView, View, Text } from "react-native";

<ScrollView>
  <View>
    <Text>Item 1</Text>
  </View>
  <View>
    <Text>Item 2</Text>
  </View>
  {/* Add more items as needed */}
</ScrollView>;
```

## Stylinng in React Native

### Inline Styles

You can apply inline styles directly to React Native components using the `style` prop. Here's an example of applying a style to a `Text` component:

```javascript
import { Text } from "react-native";

<Text style={{ fontSize: 18, color: "blue" }}>Styled Text</Text>;
```

### Stylesheets

A better approach for maintaining your styles is to use stylesheets. Stylesheets are created using the `StyleSheet.create` method and can be reused across your application. Here's how to create and use a stylesheet:

```javascript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "blue",
  },
});

// In your component
<Text style={styles.text}>Styled Text</Text>;
```

### Flexbox Layout

React Native uses flexbox for layout, which is a powerful and flexible way to design UIs. You can use `flex`, `justifyContent`, and `alignItems` properties to control the layout of your components within containers. Here's a basic example:

```javascript
import { View } from "react-native";

<View
  style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text>Centered Text</Text>
</View>;
```
