import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeworkScreen6 = () => {
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
		flexDirection: 'column'
	},
	purpleBox: {
		flex: 1,
		// width: 'auto',
		// height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#5856D6',
	},
	orangeBox: {
		flex: 1,
		// width: 'auto',
		// height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#F0A23B',
	},
	blueBox: {
		flex: 2,
		// width: 'auto',
		// height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#28C4D9',
	}
})
