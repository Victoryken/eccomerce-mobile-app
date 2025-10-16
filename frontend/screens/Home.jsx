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
import SearchModel from "../components/SearchModel";

const categories = [
  { category: "Smart Phone", _id: "cat1" },
  { category: "Laptop", _id: "cat2" },
  { category: "Tablet", _id: "cat3" },
  { category: "Shirts", _id: "cat4" },
  { category: "Electronics", _id: "cat5" },
];

const products = [
  {
    _id: "1",
    name: "iPhone 15 Pro",
    price: 1200,
    images: [{ url: "https://m.media-amazon.com/images/I/81UKVHM77GL.jpg" }],
  },
  {
    _id: "2",
    name: "Samsung Galaxy S24",
    price: 999,
    images: [
      {
        url: "https://webstorage.public.gr/Product-Images/GALAXY%20S24%20ULTRA_MAIN/main_S24_ULTRA_BLACK.jpg",
      },
    ],
  },
  {
    _id: "3",
    name: "MacBook Air M3",
    price: 1600,
    images: [
      {
        url: "https://top-cyprus.cy/image/cache/catalog/1MacbookPro14m3pro/Macbook_Pro_14_m3_pro_silver_buy-1000x1000.jpg",
      },
    ],
  },
];

export default function Home() {
  const [category, setCategory] = useState("");
  const [ActiveSearch, setActiveSearch] = useState(false);
  const [SearchQueries, setSearchQueries] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  return (
    <>
      {ActiveSearch && (
        <SearchModel
          SearchQueries={SearchQueries}
          setSearchQueries={setSearchQueries}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

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
          <View
            style={{
              left: 10,
              paddingTop: 50,
            }}
          >
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>

          <TouchableOpacity onPress={() => setActiveSearch(true)}>
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
            {categories.map((item) => (
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
                    color:
                      category === item._id ? colors.color2 : colors.color7,
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
