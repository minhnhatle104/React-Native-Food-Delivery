import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../../common/Images'
import { styles } from '../styles/styles'

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <TouchableOpacity>
        <Image style={styles.icon}  source={ICONS.nearby} resizeMode="contain"/>
      </TouchableOpacity>
      <View style={styles.appbar__title}>
        <Text>749 Lincoln PI</Text>
      </View>
      <TouchableOpacity>
        <Image style={styles.icon} source={ICONS.shopping_basket} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  )
}