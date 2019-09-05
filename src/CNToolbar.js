import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

const defaultColor = '#737373';
const defaultBgColor = '#fff';
const defaultSelectedColor = '#2a2a2a';
const defaultSelectedBgColor = '#e4e4e4';
const defaultSize = 16;

class CNToolbar extends Component {
  constructor(props) {
    super(props);
  }

  onStyleKeyPress(toolItem) {
    if (this.props.onStyleKeyPress) this.props.onStyleKeyPress(toolItem);
  }

  renderButton = (
    reactElement,
    propName,
    size,
    color,
    bgColor,
    selectedColor,
    selectedBgColor
  ) => {
    const { iconContainerStyle, selectedStyles } = this.props;
    const iconStyles = [styles.iconContainer, iconContainerStyle];
    return (
      <TouchableWithoutFeedback
        key={propName}
        onPress={() => {
          this.onStyleKeyPress(propName);
        }}
      >
        <View
          style={[
            iconStyles,
            {
              backgroundColor:
                selectedStyles.indexOf(propName) >= 0
                  ? selectedBgColor
                  : bgColor
            }
          ]}
        >
          {React.cloneElement(reactElement, {
            size,
            color: selectedStyles.indexOf(propName) >= 0 ? selectedColor : color
          })}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderStyleButtons(size, color, bgColor, selectedColor, selectedBgColor) {
    const {
      left,
      right,
      center,
      bold,
      italic,
      underline,
      lineThrough
    } = this.props; // get valid props
    const propsToRender = [
      { bold },
      { italic },
      { underline },
      { lineThrough },
      { left },
      { right },
      { center }
    ]; // turn them to objects array - this is the order of the buttons
    return (
      <View style={[styles.iconSetContainer, { flexGrow: 4 }]}>
        {propsToRender.map(prop => {
          const [propName, reactElement] = Object.entries(prop)[0];
          return (
            reactElement &&
            this.renderButton(
              reactElement,
              propName,
              size,
              color,
              bgColor,
              selectedColor,
              selectedBgColor
            )
          );
        })}
      </View>
    );
  }

  renderTagButtons(size, color, bgColor, selectedColor, selectedBgColor) {
    const {
      selectedStyles,
      selectedTag,
      title,
      heading,
      iconContainerStyle,
      ul,
      ol,
      body
    } = this.props;
    const iconStyles = [styles.iconContainer, iconContainerStyle];

    return (
      <View style={[styles.iconSetContainer, { flexGrow: 5 }]}>
        {body ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('body');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedTag === 'body' ? selectedBgColor : bgColor
                }
              ]}
            >
              {React.cloneElement(body, {
                size,
                color: selectedTag === 'body' ? selectedColor : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {title ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('title');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedTag === 'title' ? selectedBgColor : bgColor
                }
              ]}
            >
              {React.cloneElement(title, {
                size,
                color: selectedTag === 'title' ? selectedColor : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {heading ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('heading');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedTag === 'heading' ? selectedBgColor : bgColor
                }
              ]}
            >
              {React.cloneElement(heading, {
                size,
                color: selectedTag === 'heading' ? selectedColor : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {ul ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('ul');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedTag === 'ul' ? selectedBgColor : bgColor
                }
              ]}
            >
              {React.cloneElement(ul, {
                size,
                color: selectedTag === 'ul' ? selectedColor : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {ol ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('ol');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedTag === 'ol' ? selectedBgColor : bgColor
                }
              ]}
            >
              {React.cloneElement(ol, {
                size,
                color: selectedTag === 'ol' ? selectedColor : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    );
  }

  renderExtras(size, color, bgColor, selectedColor, selectedBgColor) {
    const {
      selectedStyles,
      image,
      iconContainerStyle,
      highlight,
      foreColor
    } = this.props;
    const iconStyles = [styles.iconContainer, iconContainerStyle];
    return (
      <View style={[styles.iconSetContainer, { flexGrow: 2 }]}>
        {image ? (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.onStyleKeyPress('image');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor: bgColor
                }
              ]}
            >
              {React.cloneElement(image, { size, color })}
            </View>
          </TouchableHighlight>
        ) : null}
        {foreColor ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('foreColor');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedStyles.indexOf('foreColor') >= 0
                      ? selectedBgColor
                      : bgColor
                }
              ]}
            >
              {React.cloneElement(foreColor, {
                size,
                color:
                  selectedStyles.indexOf('foreColor') >= 0
                    ? selectedColor
                    : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {highlight ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this.onStyleKeyPress('highlight');
            }}
          >
            <View
              style={[
                iconStyles,
                {
                  backgroundColor:
                    selectedStyles.indexOf('highlight') >= 0
                      ? selectedBgColor
                      : bgColor
                }
              ]}
            >
              {React.cloneElement(highlight, {
                size,
                color:
                  selectedStyles.indexOf('highlight') >= 0
                    ? selectedColor
                    : color
              })}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    );
  }

  render() {
    const {
      left,
      right,
      center,
      bold,
      italic,
      underline,
      lineThrough,
      title,
      heading,
      ul,
      ol,
      body,
      image,
      foreColor,
      highlight,
      style
    } = this.props;

    const styleButtons =
      !bold &&
      !italic &&
      !underline &&
      !lineThrough &&
      !left &&
      !center &&
      !right;
    const tagButtons = !title && !heading && !ul && !ol && !body;
    const extraButtons = !image && !foreColor && !highlight;

    const size = this.props.size ? this.props.size : defaultSize;
    const color = this.props.color ? this.props.color : defaultColor;
    const bgColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : defaultBgColor;
    const selectedColor = this.props.selectedColor
      ? this.props.selectedColor
      : defaultSelectedColor;
    const selectedBgColor = this.props.selectedBackgroundColor
      ? this.props.selectedBackgroundColor
      : defaultSelectedBgColor;

    return (
      <View style={[styles.toolbarContainer, style]}>
        {styleButtons === false
          ? this.renderStyleButtons(
              size,
              color,
              bgColor,
              selectedColor,
              selectedBgColor
            )
          : null}
        {styleButtons === false && tagButtons === false ? (
          <View style={styles.separator} />
        ) : null}
        {tagButtons === false
          ? this.renderTagButtons(
              size,
              color,
              bgColor,
              selectedColor,
              selectedBgColor
            )
          : null}
        {tagButtons === false && extraButtons === false ? (
          <View style={styles.separator} />
        ) : null}
        {extraButtons === false
          ? this.renderExtras(
              size,
              color,
              bgColor,
              selectedColor,
              selectedBgColor
            )
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    top: 2
  },
  iconContainer: {
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconSetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 1
  },
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: defaultSelectedBgColor,
    borderRadius: 4,
    padding: 2,
    backgroundColor: '#fff'
  },
  separator: {
    width: 2,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: defaultSelectedBgColor
  }
});

export default CNToolbar;
