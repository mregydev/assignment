import { ADD_TOPIC, REMOVE_TOPIC } from "../actions";

export default (
  state = {
    topics: [],
  },
  action
) => {
  if (action.type === ADD_TOPIC) {
    return { ...state, topics: [action.topic, ...state.topics] };
  }

  if (action.type === REMOVE_TOPIC) {
    return {
      ...state,
      topics: state.topics.reduce((acc, el, index) => {
        if (index !== action.index) acc.push(el);
        return acc;
      }, []),
    };
  }

  return state;
};
