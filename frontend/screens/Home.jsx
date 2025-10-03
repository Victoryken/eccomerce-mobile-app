import React from "react";
import { View, Text } from "react-native";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={defaultStyle}>
      <Header />
      <Text style={{ fontSize: 25 }}>our</Text>
      <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
    </View>
  );
}
