import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "@/styles/styles";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  name,
  price,
  images,
  id,
  addToCartHandler,
  i,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("productdatails", { id })}
      activeOpacity={0.9}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
          overflow: "hidden",
          flex: 1,
          padding: 7,
        }}
      >
        <Image
          source={{ uri: images }}
          style={{
            width: "100%",
            height: "210",
            borderRadius: 10,
            resizeMode: "cover",
            overflow: "hidden",
          }}
        ></Image>
        <View
          style={{
            padding: 10,
            width: "100%",
            flex: 1,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: "300",
              marginBottom: 10,
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            ${price}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", width: "100%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: i % 2 === 0 ? colors.color2 : colors.color1,
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Button
              onPress={() => addToCartHandler(id, name, price, images, stock)}
              textColor={i % 2 === 0 ? colors.color1 : colors.color2}
              style={{
                fontSize: 20,
              }}
            >
              Add to cart
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
