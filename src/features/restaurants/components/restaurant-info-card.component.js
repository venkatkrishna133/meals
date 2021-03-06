import React from "react";

import { Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Address,
  Title,
  Rating,
  Section,
  SectionEnd,
  Info,
  RestaurantCard,
  RestaurantCover,
  Icon,
} from "./restaurant-info-card.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Your name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.1,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard elevation={10}>
        <RestaurantCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
