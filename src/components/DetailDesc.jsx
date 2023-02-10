import { View, Text } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailDesc = ({ data }) => {
  const [text, SetText] = useState(data.description.slice(0, 180));
  const [readMore, setReadMore] = useState(false);
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitleSize={SIZES.font}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {
              <Text
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.bold,
                  color: COLORS.primary,
                  lineHeight: SIZES.large,
                }}
                onPress={() => {
                  if (readMore) {
                    setReadMore(false);
                    SetText(data.description.slice(0, 180));
                  } else {
                    SetText(data.description);
                    setReadMore(true);
                  }
                }}
              >
                {readMore ? " Show Less" : "...Read More"}
              </Text>
            }
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailDesc;
