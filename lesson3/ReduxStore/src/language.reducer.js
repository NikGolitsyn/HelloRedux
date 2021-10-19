import { SET_LANGUAGE } from './language.actions';

const initialValue = {
  language: 'en',
};

const languageReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload.language };

    default:
      return state;
  }
};

export default languageReducer;
