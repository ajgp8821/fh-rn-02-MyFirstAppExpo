import React from 'react'
import { StyleSheet, Text, View, Appearance, useColorScheme, Platform } from 'react-native'

export const PositionScreen = () => {
  
	const colorScheme = useColorScheme()
	const colorSchemeA = Appearance.getColorScheme()

	const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
	const themeContainerStyle =
	  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer
	return (
		<View style={styles.container}>
			<View style={styles.greenBox} />
			<View style={styles.purpleBox} />
			<View style={styles.orangeBox} />
			<Text style={styles.text}>{colorScheme}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: '#28C4D9',
		// height: '100%', // Enable to take full height of screen 
		height: 500,
		width: 300
	},
	text: {
		// alignSelf: 'center',
		textAlign: 'center',
		// textAlignVertical: 'center'
	},
	purpleBox: {
		width: 100,
		height: 100,
		backgroundColor: '#5856D6',
		borderWidth: 10,
		borderColor: 'white',
		position: 'absolute',
		right: 0
	},
	orangeBox: {
		width: 100,
		height: 100,
		backgroundColor: '#F0A23B',
		borderWidth: 10,
		borderColor: 'rgb(255, 255, 255)',
		position: 'absolute',
		bottom: 0,
		right: 0
	},
	greenBox: {
		// width: 100,
		// height: 100,
		backgroundColor: 'green',
		borderWidth: 10,
		borderColor: 'rgb(255, 255, 255)',
		// position: 'absolute',
		// bottom: 0,
		// top: 0,
		// right: 0,
		// left: 0,
		...StyleSheet.absoluteFillObject
	}
})
