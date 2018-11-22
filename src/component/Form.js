import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addWord } from '../redux/action/actionCreator';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: '',
        };
    }

    render() {
        return (
            <View style={{ width: '100%', height: 150, backgroundColor: 'grey' }}>

                <TextInput
                    placeholder="Nhập từ tiếng Anh"
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    style={{ backgroundColor: 'white' }}
                />

                <TextInput
                    placeholder="Nhập từ tiếng Việt"
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    style={{ backgroundColor: 'white' }}
                />

                <TouchableOpacity
                    style={{ backgroundColor: 'yellow', alignItems: 'center' }}
                    onPress={() => this.onClickAddNewWord(this.state.en, this.state.vn)}
                >
                    <Text>ADD</Text>
                </TouchableOpacity>

            </View>
        );
    }

    onClickAddNewWord(en, vn) {
        // this.props.dispatch({
        //     type: "CLICK_BUTTON_ADD_IN_FORM",
        //     en: en,
        //     vn: vn,
        // })

        // this.props.dispatch(addWord(en, vn))

        this.props.addWord(en, vn);
    }
}

export default connect(null, {addWord})(Form);