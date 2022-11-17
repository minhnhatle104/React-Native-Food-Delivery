import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class HomePage extends Component {
    soA = 0
    soB = 0

    _redirectToDetail = () => {
        // navigation : Giúp chuyển qua page được chỉ định
        this.props.navigation.navigate('detail', { user: "Hello Detail page", password: "1233" })
    }

    _tinhTong = () => {
        if (Number.isInteger(Number(this.soA)) && Number.isInteger(Number(this.soB))) {
            let kq = Number(this.soA) + Number(this.soB)
            this.props.navigation.navigate('detail', kq)
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>

                <TextInput placeholder='số A' onChangeText={(value) => this.soA = value} />
                <TextInput placeholder='số B' onChangeText={(value) => this.soB = value} />
                <TouchableOpacity
                    style={{
                        backgroundColor: "green",
                        padding: 16,
                        width: 150,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => this._tinhTong()}
                >
                    <Text>HomePage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}