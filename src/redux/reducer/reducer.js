import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import isAddingRuducer from './isAddingRuducer';
import filterStatusReducer from './filterStatusReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    isAdding: isAddingRuducer,
    filterStatus: filterStatusReducer,
})

export default reducer;