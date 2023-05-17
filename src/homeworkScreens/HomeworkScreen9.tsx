import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeworkScreen9 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.purpleBox} />
			<View style={styles.orangeBox} />
			<View style={styles.blueBox} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: '100%',
		backgroundColor: '#28425B',
		alignItems: 'center',
		justifyContent: 'center'
	},
	purpleBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#5856D6',
		top: 100
	},
	orangeBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#F0A23B',
		left: 100
	},
	blueBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#28C4D9',
	}
})
