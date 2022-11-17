import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import {categoryData} from "../../../common/Contant"
import { ICONS } from '../../../common/Images'
import { useNavigation } from '@react-navigation/native'

export default function Menu(props) {
  const {data} = props
  const navigation = useNavigation()

  getNameCategoryById = (id) =>{
    // Lọc ra category data thỏa điều kiện thông qua filter
    let listCategory = categoryData.filter(value => value.id == id)
    let categoryName = ""
    // Duyệt qua danh sách category data đã được lọc
    listCategory.forEach(value=>{
      categoryName+=value.name  
    })

    return categoryName
  }

  renderItem = ({item}) => {

    return <TouchableOpacity style={styles.menu} onPress={()=>{
      navigation.push("detail",{item})
    }}>
      <View>
        <Image style={styles.menu__img} source={item.photo}/>
        <View style={styles.menu__duration}>
          <Text>{item.duration}</Text>
        </View>
      </View>

      <Text style={styles.menu__title}>{item.name}</Text>

      <View style={styles.menu__type}>
        <Image style={styles.icon16 } source={ICONS.star}/>
        <Text style={styles.mLeft8}>{item.star}</Text>
        <Text style={styles.mLeft8}>{getNameCategoryById(item.categoryId)}</Text>
        <Text style={styles.mLeft8}>${item.price}</Text>  
      </View>
    </TouchableOpacity>
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
    />
  )
}