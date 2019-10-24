const initialState = {
    packageList: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "ADDPACKAGE":
            return {...state, 
                packageList: [...state.packageList, payload]
            }
        default:
            return state;
    }
};