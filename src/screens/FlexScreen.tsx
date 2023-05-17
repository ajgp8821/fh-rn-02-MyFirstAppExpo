import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.box1}>Box 1</Text>
			<Text style={styles.box2}>Box 2</Text>
			<Text style={styles.box3}>Box 3</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: '100%',
		backgroundColor: '#28C4D9',
		// flexDirection: 'row',
		// justifyContent: 'flex-end',
		// alignItems: 'flex-start',
		// alignItems: 'stretch'
		// flexWrap: 'wrap'
	},
	box1: {
		// flex: 1,
		// width: 100,
		// height: 100,
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
		// alignSelf: 'center',
	},
	box2: {
		// flex: 1,
		// width: 100,
		// height: 100,
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
		// alignSelf: 'flex-start',
	},
	box3: {
		// flex: 1,
		// width: 100,
		// height: 100,
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
		// alignSelf: 'flex-end',
	}
})
