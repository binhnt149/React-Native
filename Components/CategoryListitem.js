import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';
import BriefcaseImage from '../assets/briefcase.png'

export default function CategoryListitem(props){
  return(
    <View style={styles.container}>
      <Text style={styles.tittle}>CategoryListItem</Text>
      <Image  source={BriefcaseImage}
              style={styles.categoryImage }
              />
    </View>)
}


const styles=StyleSheet.create({
  container:{
    alignItem: 'center',
    padding:16,
    borderRadius:4,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width:0, height:0},
    marginBottom:16
  },
  categoryImage:{
    width: 100,
    height: 100
  },
  title: {
    textTransform:'uppercase',
    marginBottom:8,
    fontWeight:'700'
  }
})
