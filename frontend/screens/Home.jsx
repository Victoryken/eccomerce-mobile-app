import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";

export default function Home() {
  const categories = [
    { category: "Smart Phone", _id: "Shiriiiiiits" },
    { category: "Laptop ", _id: "Shiriiiijiits" },
    { category: "Smart Phone", _id: "Shirieiiiiits" },
    { category: "Shirts ", _id: "Shiriiiiriits" },
    { category: "Electronics", _id: "Shiriuiiiiits" },
  ];

  const [category, setCategory] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View
        style={{
          paddingTop: 90,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <View
          style={{
            left: 10,
            paddingTop: 50,
          }}
        >
          <Text style={{ fontSize: 25 }}>our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        {/* search Bar  */}
        <View>
          <TouchableOpacity activeOpacity={false}>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={colors.color7}
              style={{
                backgroundColor: colors.color2,
                elevation: 12,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*  categories */}
      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor:
                  category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => categoryButtonHandler(item._id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : colors.color7,
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
