import { ADD_TOPIC, REMOVE_TOPIC } from "../../actions";

const mapStatetoProps = (state) => {
  return {
    topics: state && state.TopicsReducer ? state.TopicsReducer.topics : [],
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addTopic: (topic) =>
      dispatch({
        type: ADD_TOPIC,
        topic,
      }),

    removeTopic: (index) =>
      dispatch({
        type: REMOVE_TOPIC,
        index,
      }),
  };
};

export { mapDispatchtoProps, mapStatetoProps };
