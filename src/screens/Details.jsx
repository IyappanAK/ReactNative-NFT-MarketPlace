import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import React from "react";
import {
  CircleButton,
  DetailDesc,
  DetailsBid,
  FocusedStatusBar,
  RectangleButton,
  SubInfo,
} from "../components";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { FlatList } from "react-native-gesture-handler";
const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image source={data.image} style={{ width: "100%", height: "100%" }} />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={15}
      />
      <CircleButton imgUrl={assets.heart} right={15} top={15} />
    </View>
  );
};
export const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <RectangleButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailDesc data={data} />
              {data?.bids.length > 0 && (
                <Text
                  style={{
                    marginVertical: SIZES.base,
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        }
      />
    </View>
  );
};
