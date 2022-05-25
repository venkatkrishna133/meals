
import {SafeAreaView, StyleSheet, Text, View,Platform,StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:"green"}}>
        <Text>Search</Text>
      </View>
      <View style={{flex:1,backgroundColor:"yellow"}}>
        <Text>ListView</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:
   {
    flex: 1,
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:"blue",
  },
});
