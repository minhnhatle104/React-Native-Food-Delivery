import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../../common/Images'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

export default function Appbar(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.appbar}>
      <TouchableOpacity onPress={()=>{
        navigation.pop()
      }}>
        <Image style={styles.icon}  source={ICONS.back} resizeMode="contain"/>
      </TouchableOpacity>
      <View style={styles.appbar__title}>
        <Text>{props.title}</Text>
      </View>
      <TouchableOpacity>
        <Image style={styles.icon} source={ICONS.shopping_basket} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  )
}