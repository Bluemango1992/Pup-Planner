import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const PaperComponent = ({ children }) => {
  const [gradientColors, setGradientColors] = useState(["#000000", "#FFFFFF"]);

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.gradientStart} />
        <View style={styles.gradientEnd} />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: {
      type: "linear",
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
      colors: gradientColors,
    },
  },
  gradientStart: {
    width: 100,
    height: 200,
    borderRadius: 10,
    backgroundColor: gradientColors[0],
  },
  gradientEnd: {
    width: 100,
    height: 200,
    borderRadius: 10,
    backgroundColor: gradientColors[1],
  },
});

export default PaperComponent;
