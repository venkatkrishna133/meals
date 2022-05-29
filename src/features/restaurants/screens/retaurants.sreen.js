import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  View,Platform,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchView >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <ListView >
        <RestaurantInfoCard />
      </ListView>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
const SearchView = styled(View)`
  padding: ${(props)=>props.theme.space[3]};
`;
const ListView = styled(View)`
  flex: 1;
  padding: ${(props)=>props.theme.space[3]};
`;