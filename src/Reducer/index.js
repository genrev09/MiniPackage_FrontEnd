const initialState = {
    packageList: [],
    filterType: 'all'
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "ADDPACKAGE":
            return {...state, 
                packageList: [...state.packageList, payload]
            }
        case "CHANGE_FILTER_TYPE":
            return {...state, filterType: payload}
        default:
            return state;
    }
};