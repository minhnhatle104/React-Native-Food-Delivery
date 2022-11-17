import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailPage from "../screens/detail/DetailPage"
import Menu from "../screens/menu/MainMenu"
import Like from "../screens/like/Like"
import Search from "../screens/search/Search"
import User from "../screens/user/User"
import { screens } from "./Contant"
import { ICONS } from './Images'
import { COLORS } from './Theme'
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const StackNavigator = () =>(
    <Stack.Navigator initialRouteName='home'  screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}>
        {/* 
        name : Tên của màn hình được tạo trong Navaigation Container
        component : Giao diện sẽ được hiển thị lên màn hình
        */}
        <Stack.Screen name='home' component={BottomAppBarNavigator} options={{title: 'Home Page'}} />
        <Stack.Screen name='detail' component={DetailPage} />
    </Stack.Navigator>
)

export const BottomAppBarNavigator = () => (
    <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
          }}
        >
          <Tab.Screen name={screens.tab_home} component={Menu} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} 
              source={ICONS.cutlery}/>
            )
          }} />
          <Tab.Screen name={screens.tab_search} component={Search} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} 
              source={ICONS.search}/>
            )
          }}/>
          <Tab.Screen name={screens.tab_like} component={Like} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} 
              source={ICONS.like}/>
            )
          }}/>
          <Tab.Screen name={screens.tab_user} component={User} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} 
              source={ICONS.user}/>
            )
          }}/>
        </Tab.Navigator>
)