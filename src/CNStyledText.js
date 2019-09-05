import React, { Component } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';

class CNStyledText extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      !_.isEqual(this.props.text, nextProps.text) &&
      !_.isEqual(this.props.style, nextProps.style)
    );
  }

  render() {
    return <Text style={this.props.style}>{this.props.text}</Text>;
  }
}

export default CNStyledText;
