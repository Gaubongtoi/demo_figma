// Tham số thứ nhất của tagged literals
//
export default function html([first, ...strings], ...values) {
  return (
    // values -> ${}: template string
    values
      .reduce(
        (acc, cur) => {
          return acc.concat(cur, strings.shift()); // shift -> lay ra phan tu dau va xoa bo chung khoi strings
        },
        [first]
      ) // []
      .filter((value) => {
        return (value && value !== true) || value === 0;
      })
      .join("")
  );
}

export function createStore(reducer) {
  // InitState || Store
  let state = reducer();
  const roots = new Map();
  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }
  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
        state = reducer();
        render()
    }
  };
}
