import React from "react";
import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";

const Main = () => {
  return (
    <View
      style={{
        paddingVertical:
          Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>hello dude</Text>
      </SafeAreaView>
    </View>
  );
};

export default Main;
