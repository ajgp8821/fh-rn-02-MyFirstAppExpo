import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeworkScreen1 = () => {
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
	},
	purpleBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#5856D6',
	},
	orangeBox: {
		flex: 1,
		width: 100,
		// height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#F0A23B',
	},
	blueBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#28C4D9',
	}
})
