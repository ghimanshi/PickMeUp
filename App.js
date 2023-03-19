import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from './components/SearchBar';
import image from './assets/omelette.png';
import LocationCard from './components/LocationCard';
import FoodCard2 from './components/FoodCard2';
import FoodDash from "./pages/foodDashboard"
// const offer = require('./offer.svg')
export default function App() {
  return (
    <FoodDash/>
    // <View style={styles.container}>
    //   <Text>lol</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
    {/* <SearchBar  textInput="search here"/> */}
    {/* <FoodCard2 height="152" width="156" heading1='Food'  image={image}/> */}
    <LocationCard text='Brahma canteen'/>
    {/* <FoodCard height="152px" width="156px" heading1='Food' heading2='get food from all over campus'  image={image}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  container:{
    marginTop:40,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center'
  }
})