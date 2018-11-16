import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: '100%', height: 150, backgroundColor: 'grey' }}>
                <TextInput placeholder="nhap tieng anh" />
                <TextInput placeholder="nhap tieng viet" />
                <TouchableOpacity style={{ backgroundColor: 'yellow', justifyContent: 'center' }}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
