import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return (
    <View>{isFocused ? <StatusBar animated={true} {...props} /> : null}</View>
  );
};

export default FocusedStatusBar;
