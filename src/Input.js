import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native'

export default class Input extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		translate: PropTypes.bool.isRequired,
		onChangeText: PropTypes.func.isRequired,
		onChangeTranslate: PropTypes.func.isRequired
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.input}
					value={this.props.text}
					onChangeText={this.props.onChangeText}
				/>
				<View style={styles.switchWrapper}>
					<Switch
						value={this.props.translate}
						onValueChange={this.props.onChangeTranslate}
					/>
					<Text style={styles.switchText}>Translate</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		height: 50,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#eee'
	},
	switchWrapper: {
		justifyContent: 'center',
		flexDirection: 'row',
		marginVertical: 40
	},
	switchText: {
		padding: 7
	}
})
