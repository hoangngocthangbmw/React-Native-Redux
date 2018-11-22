import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from '../component/Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Header />
                {this.props.myIsAdding ? <Form /> : null}
                <Text>{this.props.myFilter}</Text>
                <FlatList
                    // data={this.props.myWords}
                    data={this.getWordList()}
                    renderItem={({ item }) =>
                        <Word myWord={item} />
                    }
                    keyExtractor={(item, index) => {
                        return item.id.toString();
                    }}
                />
                <Filter />
            </View>
        );
    }

    getWordList() {
        if (this.props.myFilter === "MEMORIZED") {
            return this.props.myWords.filter(element => element.memorized);
        }
        if (this.props.myFilter === "NEED_PRACTICE") {
            return this.props.myWords.filter(element => !element.memorized);;
        }
        return this.props.myWords;
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myIsAdding: state.isAdding,
        myWords: state.arrWords,
    };
}

export default connect(mapStateToProps)(Main);