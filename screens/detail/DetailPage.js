import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import Appbar from './components/Appbar'
import Description from './components/Description'
import Order from './components/Order'
import { useRoute } from '@react-navigation/native'

export default function DetailPage() {
	const route = useRoute()
	const params = route.params
	console.log(params)
	return (
		<SafeAreaView style={styles.container}>
			<Appbar title={params.item.name}/>
			<ScrollView>
				<Description
					img={params.item.photo}
					title={params.item.name}
					price={params.item.price}
					desc={params.item.description}
					calo={params.item.calories}
				/>
				<Order/>
			</ScrollView>
		</SafeAreaView>
	)
}