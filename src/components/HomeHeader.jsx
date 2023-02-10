import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { TextInput } from "react-native-gesture-handler";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={assets.logo} style={{ width: 90, height: 25 }} />
        <View style={{ height: 45, width: 45 }}>
          <Image
            source={assets.person01}
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          hello,Victoria🖐
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}
      >
        <Image
          source={assets.search}
          style={{ height: 20, width: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search NFTs"
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            color: COLORS.primary,
          }}
          onChangeText={(value) => onSearch(value)}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
