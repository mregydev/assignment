import configureStore from "redux-mock-store";
import { REMOVE_TOPIC } from "../../src/actions";

describe("REMOVE_TOPIC action", () => {
  test("should bind REMOVE_TOPIC action when is called with dispatch", () => {
    let store = configureStore([])({});

    let param = { type: REMOVE_TOPIC, data: { index: 1 } };

    store.dispatch(param);

    let actions = store.getActions();

    expect(actions).toEqual([param]);
  });
});
