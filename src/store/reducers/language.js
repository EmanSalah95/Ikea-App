const initial = {
    language: '',
};

export default function languageReducer(state = initial, action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
}