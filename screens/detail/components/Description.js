import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ICONS, IMAGES } from "../../../common/Images"
import styles from "../styles/styles"
import React, { useState } from 'react'

export default function Description(props) {
	const [count,setCount] = useState(0)

	return (
		<View>
			{/* Image + button */}
			<View>
				<Image style={styles.content__img} source={props.img} />
				<View style={styles.content__btn}>
					<TouchableOpacity onPress={()=> count === 0 ? 0 : setCount(count-1)}>
						<Text style={styles.content__btn_text}>-</Text>
					</TouchableOpacity>

					<Text style={styles.content__btn_text}>{count}</Text>

					<TouchableOpacity onPress={()=> setCount(count+1) }>
						<Text style={styles.content__btn_text}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* end image + button */}

			<View style={styles.content__desc}>
				<Text style={styles.text20W5}>{props.title} - ${props.price}</Text>
				<Text style={styles.mTop}>{props.desc}</Text>
				<View style={[styles.mTop,styles.content__desc__cal]}>
					<Image style={styles.icon16} source={ICONS.fire} />
					<Text>{props.calo} Cal</Text>
				</View>
			</View>

		</View>
	)
}