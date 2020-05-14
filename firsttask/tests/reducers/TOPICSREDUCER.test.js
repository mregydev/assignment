import reducer from "../../src/reducers/TopicsReducer";

import { ADD_TOPIC, REMOVE_TOPIC } from "../../src/actions";

describe("reducer test cases", () => {
  const state = {
    topics: [],
  };

  test("Should hamdle ADD_TOPIC correclty", () => {
    let topic = { topicType: "pass" };

    let newState = reducer(state, {
      type: ADD_TOPIC,
      topic,
    });

    expect(newState.topics.length).toEqual(1);
  });

  test("Should hamdle REMOVE_TOPIC correclty", () => {
    let newState = reducer(state, {
      type: REMOVE_TOPIC,
      index: 0,
    });

    expect(newState.topics.length).toEqual(0);
  });
});
