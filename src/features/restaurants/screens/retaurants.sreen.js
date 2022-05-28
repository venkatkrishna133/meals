import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"blue"
  },

  search: {
    padding: StatusBar.currentHeight,
  },
  list: {
    backgroundColor: "yellow",
      flex: 1,
    padding:16,
  },
});
