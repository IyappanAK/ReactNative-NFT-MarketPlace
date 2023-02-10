import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  console.log(bid);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image source={bid.image} style={{ width: 48, height: 48 }} />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed By{bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
