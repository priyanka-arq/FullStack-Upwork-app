import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

export const createRenderer = (Component) => ({
  mount: (props) => mount(<Component {...props} />),
  mountWithStore: (props, state) =>
    mountWithStore(<Component {...props} />, createStore(state)),
  shallow: (props) => shallow(<Component {...props} />),
  shallowWithStore: (props, state) =>
    shallowWithStore(<Component {...props} />, createStore(state)),
  snapshot: (props) => renderer.create(<Component {...props} />).toJSON(),
  snapshotWithStore: (props, state) =>
    renderer
      .create(
        <Provider store={createStore(state)}>
          <Component {...props} />
        </Provider>
      )
      .toJSON(),
});
