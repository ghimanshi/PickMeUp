Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@ghimanshi 
iks1
/
PickMeUp
Public
Fork your own copy of iks1/PickMeUp
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
PickMeUp/App.js /
@ghimanshi
ghimanshi Merge branch 'student' into student
Latest commit 0e3dc72 yesterday
 History
 3 contributors
@ShallyKandoi@divyagarg47@ghimanshi
52 lines (40 sloc)  1.75 KB

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ShopCard from './components/Shopcard';
import SmallShopCard from './components/smallShopCard';
import NavBar from './components/Navbar';
import canteen from './assets/canteen.png';
import stationery from './assets/stationery.png';

import SearchBar from './components/SearchBar';
import image from './assets/omelette.png';
import LocationCard from './components/LocationCard';
import FoodCard2 from './components/FoodCard2';


export default function App() { 
  return (
    // <View style={styles.container}>
    //   <Text>lol</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>

      {/* <Text>lol</Text>
      <StatusBar style="auto" /> */}

      <ShopCard img={canteen} line1="Brahma Food Canteen (A)" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
      <ShopCard img={stationery} line1="Brahma Stationery Shop" dist="400 m" line2="Color Printout, Xerox" rating="4.5"/>
      <SmallShopCard img={canteen} line1="Brahma Hostel Food Canteen" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
      <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>

      <NavBar/>


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
