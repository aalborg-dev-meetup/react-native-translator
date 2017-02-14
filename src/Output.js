import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Output extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		translate: PropTypes.bool.isRequired
	}

	render() {
		return (
			<View>
				<Text style={styles.text}>
					{this.props.translate
						? this.props.text
							.replace(/sushi/gi, '🍣')
							.replace(/oskar|alexander/gi, '👦')
							.replace(/cow/gi, '🐄')
							.replace(/\bwine\b/gi, '🍷')
							.replace(/\bswine\b/gi, '🐖')
							.replace(/cat/gi, '😺')
							.replace(/santa/gi, '🎅')
						: this.props.text
					}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		textAlign: 'center'
	}
})
