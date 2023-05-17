import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, View, Text, useColorScheme } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import { StatusBar } from 'expo-status-bar'
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen'
// import { CounterScreen } from './src/screens/CounterScreen'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'


export default function App() {

	const colorScheme = useColorScheme()

	const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
	const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer
	console.log('theme', colorScheme)

	useEffect(() => {
		// Enable rotation
		ScreenOrientation.unlockAsync()
	}, [])

	return (
		// <SafeAreaView style={[ styles.AndroidSafeArea]}>
		// 	{/* <HelloWorldScreen /> */}
		// 	{/* <CounterScreen /> */}
		// 	{/* <BoxObjectModelScreen /> */}
		// 	{/* <DimensionsScreen /> */}
		// 	{/* <PositionScreen /> */}
		// 	<ColorSchemeScreen />
		// 	{/* <StatusBar /> */}
		// </SafeAreaView>
		// <SafeAreaProvider>
		// 	<KeyboardAvoidingView
		// 		// behavior={Platform.OS === 'ios' ? 'padding': 'height'}
		// 		// style={{ flex: 1}}
		// 		// keyboardVerticalOffset={Platform.OS === 'ios' ? -64: 0}
		// 	>
		// 		{/* <DimensionsScreen /> */}
		// 		<PositionScreen />
		// 	</KeyboardAvoidingView>
		// </SafeAreaProvider>
		<View style={[styles.container, themeContainerStyle]}>
			<Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
			<StatusBar />
		</View>
	)
}

const styles = StyleSheet.create({
	AndroidSafeArea: {
		// flex: 1,
		backgroundColor: 'gray',
		// backgroundColor: '#28C4D9',
		paddingTop: Platform.OS === 'android' ? 30 : 0
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	lightContainer: {
		backgroundColor: '#d0d0c0',
	},
	darkContainer: {
		backgroundColor: '#242c40',
	},
	lightThemeText: {
		color: '#242c40',
	},
	darkThemeText: {
		color: '#d0d0c0',
	},
	text: {
		color: 'green',
	}
})
