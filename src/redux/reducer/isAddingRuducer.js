isAddingRuducer = (state = false, action) => {
    if (action.type === "CLICK_BUTTON_ADD_IN_HEADER")
        return !state;
    return state;
};

export default isAddingRuducer;