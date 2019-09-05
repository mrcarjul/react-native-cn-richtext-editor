import React, { Component } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';

class CNStyledText extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      _.isEqual(this.props.text, nextProps.text) &&
      _.isEqual(this.props.style, nextProps.style)
    ) {
      return false;
    }

    return true;
  }

  render() {
    return <Text style={this.props.style}>{this.props.text}</Text>;
  }
}

export default CNStyledText;
