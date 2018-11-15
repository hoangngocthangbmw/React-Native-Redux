import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 50, width: '100%' }}>

                <TouchableOpacity>
                    <Text style={this.getTextStyle("SHOW_ALL")} onPress={() => this.setFilterStatus("FILTER_SHOW_ALL")}> show all </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={this.getTextStyle("MEMORIZED")} onPress={() => this.setFilterStatus("FILTER_MEMORIZED")}> memorized </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={this.getTextStyle("NEED_PRACTICE")} onPress={() => this.setFilterStatus("FILTER_NEED_PRACTICE")}> need practice </Text>
                </TouchableOpacity>
            </View>
        );
    }

    getTextStyle(statusName) {
        if (statusName === this.props.myFilterStatus) {
            return { color: 'yellow' }
        }
        return styles.myFilterStatus
    }

    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType })
    }
}

const styles = StyleSheet.create({

    textColorButton: {
        color: 'white'
    }

})

function mapStateToProps(state) {
    return {
        myFilterStatus: state.filterStatus,
    }
}

export default connect(mapStateToProps)(Filter)