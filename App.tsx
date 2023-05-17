import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import { StatusBar } from 'expo-status-bar'
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen'
// import { CounterScreen } from './src/screens/CounterScreen'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { DimensionsScreen } from './src/screens/DimensionsScreen'
// import { PositionScreen } from './src/screens/PositionScreen'
// import { FlexScreen } from './src/screens/FlexScreen'
import { HomeworkScreen1 } from './src/homeworkScreens/HomeworkScreen1'
import { HomeworkScreen2 } from './src/homeworkScreens/HomeworkScreen2'
import { HomeworkScreen3 } from './src/homeworkScreens/HomeworkScreen3'
import { HomeworkScreen4 } from './src/homeworkScreens/HomeworkScreen4'
import { HomeworkScreen5 } from './src/homeworkScreens/HomeworkScreen5'
import { HomeworkScreen6 } from './src/homeworkScreens/HomeworkScreen6'
import { HomeworkScreen7 } from './src/homeworkScreens/HomeworkScreen7'
import { HomeworkScreen8 } from './src/homeworkScreens/HomeworkScreen8'
import { HomeworkScreen9 } from './src/homeworkScreens/HomeworkScreen9'
import { HomeworkScreen10 } from './src/homeworkScreens/HomeworkScreen10'

export default function App() {

	useEffect(() => {
		// Enable rotation
		ScreenOrientation.unlockAsync()
	}, [])

	return (
		<SafeAreaView style={[ styles.AndroidSafeArea]}>
			{/* <HelloWorldScreen /> */}
			{/* <CounterScreen /> */}
			{/* <BoxObjectModelScreen /> */}
			{/* <DimensionsScreen /> */}
			{/* <PositionScreen /> */}
			{/* <StatusBar /> */}
			{/* <FlexScreen /> */}
			<HomeworkScreen10 />
		</SafeAreaView>
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
	)
}

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: '#28425B',
		paddingTop: Platform.OS === 'android' ? 30 : 0
	}
})
