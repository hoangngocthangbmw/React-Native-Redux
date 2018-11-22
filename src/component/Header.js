import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { clickButtonAddInHeader } from '../redux/action/actionCreator';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onClickAdd() {
        // this.props.dispatch({
        //     type: "CLICK_BUTTON_ADD_IN_HEADER",
        // })

        // this.props.dispatch(clickButtonAddInHeader())

        this.props.clickButtonAddInHeader()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text>MY WORDS</Text>
                    <TouchableOpacity
                        style={styles.buttonAdd} onPress={() => this.onClickAdd()}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "blue"
    },

    buttonAdd: {
        backgroundColor: 'grey',
        width: 24, height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default connect(null,{clickButtonAddInHeader})(Header);