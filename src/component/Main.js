import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from '../component/Word';
import Filter from './Filter';

class Main extends Component {
   
    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>

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
        if (this.props.myFilter === "SHOW_ALL") {
            return this.props.myWords;
        }
        if (this.props.myFilter === "MEMORIZED") {
            return ;
        }
        if (this.props.myFilter === "NEED_PRACTICE") {
            return;
        }
        return [];
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myCheck: state.isAdding,
        myWords: state.arrWords
    };
}

export default connect(mapStateToProps, null)(Main);