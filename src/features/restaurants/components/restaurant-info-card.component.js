import React from "react";
import styled from "styled-components/native"
import { Text,StyleSheet } from "react-native";
import { Card } from "react-native-paper";


const Title = styled.Text`
padding:16px;
color:red `;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Your name",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
    return (
      <>
        <Card elevation={10} style={styles.container}>
          <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
          <Title>{name}</Title>
        </Card>
      </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor:"#fff"
  },
  cover: {
    padding:20,
  },
})
