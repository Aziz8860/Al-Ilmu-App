import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CardMenu } from '../../small'

const ListMenu = ({menus}) => {
    return (
        <View>
            {menus.map((menu) => {
                return <CardMenu menu={menu} key={menu.id} />
            })}
        </View>
    )
}

export default ListMenu

const styles = StyleSheet.create({})


