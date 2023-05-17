import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width: ww, height: wh } = Dimensions.get('window')
const { width: sw, height: sh } = Dimensions.get('screen')

export const DimensionsScreen = () => {
  
	const { width: dw, height: dh } = useWindowDimensions()
  
	const insets = useSafeAreaInsets()

	return (
		<View style={{paddingTop: insets.top}}>
			<View style={[styles.container]}>
				<View style={{
					...styles.purpleBox,
					width:dw * 0.5
				}} />
				<View style={styles.orangeBox} />
			</View>
			<Text style={styles.tittle}>WW: {ww.toFixed(2)}, WH: {wh.toFixed(2)}</Text>
			<Text style={styles.tittle}>SW: {sw.toFixed(2)}, SH: {sh.toFixed(2)}</Text>
			<Text style={styles.tittle}>DW: {dw.toFixed(2)}, DH: {dh.toFixed(2)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: '100%',
		height: 200,
		backgroundColor: 'red'
	},
	purpleBox: {
		backgroundColor: '#5856D6',
		// width: '50%',
		height: '50%'
	},
	orangeBox: {
		backgroundColor: '#F0A23B'
	},
	tittle: {
		fontSize: 30,
		textAlign: 'center'
	}
})
