import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#690000",
  color1_light: "rgba(222,6,2,0.8)",
  color2_light: "rgba(115,2,0,0.9)",
  color2: "white",
  color3: "#140e0e",
  color4: "transparent",
  color5: "#f2f2f2d0",
  color6: "#f7f7f7",
  color7: "gray",
};

export const defaultStyle = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
    marginVertical: 10,
  },
});

export const inputStyle = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.color1,
    borderRadius: 100,
    padding: 5,
    margin: 30,
  },
});
