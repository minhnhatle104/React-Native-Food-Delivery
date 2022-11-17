import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData } from '../../../common/Contant'
import { styles } from '../styles/styles'

export default function Categories(props) {
	const { categorySelected, onSelectedCategory } = props

	return (
		<View style={styles.category}>
			<Text style={styles.category__text}>Main</Text>
			<Text style={styles.category__text}>Categories</Text>
			<CategoriesList categorySelected={categorySelected} onSelectedCategory={onSelectedCategory} />
		</View>
	)
}

export const CategoriesList = (props) => {
	let currentCategory = props.categorySelected

	const renderItem = ({ item }) => {
		return <TouchableOpacity
			style={[styles.categoryList, item.id === currentCategory ? styles.categoryList_selected : ""]}
			onPress={() => {
				props.onSelectedCategory(item.id)
			}}
		>
			<View style={[styles.categoryList__circle, item.id === currentCategory ? styles.categoryList__circle_selected : ""]}>
				<Image style={styles.icon} source={item.icon} />
			</View>
			<Text style={[styles.categoryList__title, item.id === currentCategory ? styles.categoryList__title_selected : ""]}>{item.name}</Text>
		</TouchableOpacity>
	}


	return <FlatList
		showsHorizontalScrollIndicator={false}
		horizontal
		data={categoryData}
		renderItem={renderItem}
	/>
}