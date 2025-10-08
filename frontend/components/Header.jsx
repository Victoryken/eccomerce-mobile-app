import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "@/styles/styles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ back, emptyCart = false }) => {
  const navigate = useNavigation();
  const emptyCartHandler = () => {
    console.log("empty cart");
  };
  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
            elevation: 10,
            backgroundColor: colors.color2,
            borderRadius: 100,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            icon={"arrow-left"}
            style={{
              backgroundColor: colors.color2,
              color: colors.color3,
              size: 50,
            }}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 40,
          zIndex: 10,
          elevation: 10,
          backgroundColor: colors.color2,
          borderRadius: 100,
        }}
        onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}
      >
        <Avatar.Icon
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          style={{
            backgroundColor: colors.color2,
            color: colors.color3,
            size: 50,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
