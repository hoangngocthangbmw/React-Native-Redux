import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: this.props.myWord.memorized ? "green" : 'red' }}>
                    <Text>{this.props.myWord.en}</Text>
                    <Text>{this.props.myWord.vn}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(Word);
