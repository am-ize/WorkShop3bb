import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dash from 'react-native-dash'
import { FlatGrid, SectionGrid } from 'react-native-super-grid';

export default class HomeScreen extends Component {
    render() {
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeeeee', height: 45 }}>
                    <Text style={{ fontSize: 16, color: '#3A3A3A' }}>Mr. FirstName LastName</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 45 }}>
                    <Text style={{ fontSize: 12, color: '#FF8033' }}>Customer Code 12345678</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ flex: 1, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#3A3A3A', borderColor: '#FF8033', borderRadius: 10, borderWidth: 2, marginRight: 10 }}>
                        <Text style={{ fontSize: 14 }}>ยอดค้างชำระ (บาท)</Text>
                        <Text style={{ fontSize: 24 }}>590</Text>
                    </View>
                    <View style={{ flex: 1, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#3A3A3A', borderColor: '#FF8033', borderRadius: 10, borderWidth: 2, marginLeft: 10 }}>
                        <Text style={{ fontSize: 14 }}>สามบีบ พอยท์</Text>
                        <Text style={{ fontSize: 24 }}>100</Text>
                    </View>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 30 }}>
                    <Text style={{ fontSize: 16, color: '#3A3A3A' }}>บริการของเรา</Text>
                </View>
                <View>
                    <FlatGrid
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        renderItem={({ item, index }) => (
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.code}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });