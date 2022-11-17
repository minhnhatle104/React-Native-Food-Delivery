import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './common/Navigator';


const Drawer = createDrawerNavigator();

export default class App extends Component {
	render() {
		return (
			// NavigationContainer chỉ khai báo một lần duy nhất ở page đầu tiên

			<NavigationContainer>
				<StackNavigator/>
			</NavigationContainer>

			// <NavigationContainer>
			//   <Drawer.Navigator>
			//     <Drawer.Screen name="home" component={HomePage} />
			//     <Drawer.Screen name="detail" component={DetailPage} />
			//   </Drawer.Navigator>
			// </NavigationContainer>
		)
	}
}

// Viết giao diện có 2 Field soA và soB và button tính tổng
// Tính giá trị của số A và số B và hiển thị kết quả này qua màn hình Detail
// page Detai: Kết quả là: kq