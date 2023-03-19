import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FoodDash from "./pages/foodDashboard"
// const offer = require('./offer.svg')
export default function App() {
  return (
    <FoodDash/>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center'
  }
})