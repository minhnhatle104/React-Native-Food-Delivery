import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import {ICONS} from "../../../common/Images"

export default function Order() {
	return (
		<View style={styles.order}>
			<View style={styles.order__item}>
				<Text style={styles.text15W5}>4 Item in Cart</Text>
				<Text style={styles.text15W5}>$46.98</Text>
			</View>
			<View style={styles.line}></View>
			<View style={[styles.row,styles.order__location]}>
				<View style={styles.row}>
					<Image style={styles.icon16} source={ICONS.location}/>
					<Text style={[styles.mLeft,styles.text15W5]}>745 Lincoln PI</Text>
				</View>
				<View style={styles.row}>
					<Image style={styles.icon16} source={ICONS.mastercard}/>
					<Text style={[styles.mLeft,styles.text15W5]}>**** 5491</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.btnOrder}>
				<Text style={styles.text15W5}>Order</Text>
			</TouchableOpacity>
		</View>
	)
}