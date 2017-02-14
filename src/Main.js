import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Output from './Output'

export default class Main extends Component {
	state = {
		text: '',
		translate: false
	}

	render() {
		return (
			<View style={{ padding: 40 }}>
				<Input
					onChangeText={(text) => this.setState({ text })}
					onChangeTranslate={(translate) => this.setState({ translate })}
					{...this.state}
				/>
				<Output {...this.state} />
			</View>
		)
	}
}

const styles = StyleSheet.create({

})
