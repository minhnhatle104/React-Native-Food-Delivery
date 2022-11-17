import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Categories from './components/Categories'
import AppBar from "./components/AppBar"
import Menu from "./components/Menu"
import { styles } from './styles/styles'
import { menuData } from '../../common/Contant'

export default function MainMenu() {
  // Hook - Bát đầu bằng use và chỉ sử dụng trong function component
  const [categorySelected,setCategorySelected] = useState(1)
  let listMenu = menuData.filter(value => value.categoryId === categorySelected)

  _onSelectedCategory = (id) => {
    setCategorySelected(id)
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar/>
      <Categories categorySelected={categorySelected} onSelectedCategory={_onSelectedCategory}/>
      <Menu data={listMenu}/>
    </SafeAreaView>
  )
}