import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
  title: string
  position?: 'br' | 'bl'
  onPress: () => void
}

export const Fab = ({title, position = 'br', onPress}: Props) => {

	const ios = () => {
		return (
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.7}
				style={[
					styles.fabLocation,
					(position === 'bl') ? styles.left : styles.right
				]}
			>
				<View style={styles.fab}>
					<Text style={styles.buttonIncrease}>{title}</Text>
				</View>
			</TouchableOpacity>
		)
	}
  
	const android = () => {
		return (
			<View
				style={[
					styles.fabLocation,
					(position === 'bl') ? styles.left : styles.right
				]}
			>
				<TouchableNativeFeedback
					onPress={onPress}
					background={TouchableNativeFeedback.Ripple('#373751', false, 30)}
				>
					<View style={styles.fab}>
						<Text style={styles.buttonIncrease}>{title}</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}
  
	return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
	fabLocation: {
		position: 'absolute',
		bottom: 25
	},
	left: {
		left: 25
	},
	right: {
		right: 25
	},
	fab: {
		backgroundColor: '#5856D6',
		borderRadius: 100,
		width: 60,
		height: 60,
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	},
	buttonIncrease: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center'
	}
})
