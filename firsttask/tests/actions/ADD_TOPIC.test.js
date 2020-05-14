import configureStore from "redux-mock-store";
import { ADD_TOPIC } from "../../src/actions";

describe("ADD_EVENT action", () => {
  test("should bind ADD_TOPIC action when is called with dispatch", () => {
    let store = configureStore([])({});

    let param = { type: ADD_TOPIC, data: { topic: {} } };

    store.dispatch(param);

    let actions = store.getActions();

    expect(actions).toEqual([param]);
  });
});
