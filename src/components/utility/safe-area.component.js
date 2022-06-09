import styled from "styled-components/native";
import {StatusBar,SafeAreaView,Platform }from "react-native"


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
