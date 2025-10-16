import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Headline, Searchbar } from "react-native-paper";

const defaultColors = {
  color1: "#ffffff",
  color2: "#f4f4f4",
  text: "#000",
};

const SearchModel = ({
  SearchQueries = "",
  setSearchQueries = () => {},
  setActiveSearch = () => {},
  products = [],
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleBackPress = () => {
      setSearchQueries("");
      setActiveSearch(false);
      return true;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => subscription.remove();
  }, [setSearchQueries, setActiveSearch]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: defaultColors.color2,
        padding: 20,
        paddingTop: 50,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQueries(query)}
          value={SearchQueries}
          style={{
            marginTop: 20,
            backgroundColor: defaultColors.color1,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
          >
            {products.length > 0 ? (
              products.map((item) => (
                <SearchItem
                  key={item._id}
                  imgSrc={item.images?.[0]?.url}
                  name={item.name}
                  price={item.price}
                  handler={() =>
                    navigation.navigate("productDetails", { id: item._id })
                  }
                />
              ))
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  color: "#666",
                  marginTop: 50,
                }}
              >
                No products found.
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem = ({ price, name, imgSrc, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 15,
          borderRadius: 10,
          backgroundColor: "#fff",
          elevation: 3,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
            borderRadius: 10,
            marginRight: 15,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "600" }}>
            {name}
          </Text>
          <Headline
            numberOfLines={1}
            style={{ fontWeight: "900", marginTop: 4, fontSize: 18 }}
          >
            ${price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchModel;
