import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  View,Platform,FlatList,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";


export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
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
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
