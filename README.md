# React FAQs

## 1. Is JSX mandatory for React?
- **Answer:** No, JSX is not mandatory, but it is a recommended syntax extension for describing UI components in a more readable way.

## 2. Is ES6 mandatory for React?
- **Answer:** No, ES6 is not mandatory, but it is commonly used and recommended for its enhanced features like arrow functions, classes, and destructuring.

## 3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX:
- **Answer:**
  - `{TitleComponent}`: Represents a reference to a component, not rendering it.
  - `{<TitleComponent/>}`: Renders the `TitleComponent` using a self-closing tag.
  - `{<TitleComponent></TitleComponent>}`: Also renders the `TitleComponent` using an opening and closing tag. The self-closing tag is equivalent in JSX.

## 4. How can I write comments in JSX?
- **Answer:** Use curly braces for inline comments, and for multi-line comments, wrap them in curly braces and use the JavaScript-style comment syntax.

## 5. What is `<React.Fragment></React.Fragment>` and `<></>`?
- **Answer:** Both are used for rendering multiple elements without introducing an extra parent div. `<React.Fragment>` is the older syntax, and `<></>` is the shorthand introduced in React 16.

## 6. What is Virtual DOM?
- **Answer:** Virtual DOM is a lightweight copy of the actual DOM that React uses to efficiently update and render components by minimizing direct manipulations to the real DOM.

## 7. What is Reconciliation in React?
- **Answer:** Reconciliation is the process of updating the real DOM to match the Virtual DOM efficiently, optimizing the rendering of components.

## 8. What is React Fiber?
- **Answer:** React Fiber is a reimplementation of the React core algorithm designed to improve the responsiveness and rendering of components, enabling better handling of asynchronous updates.

## 9. Why do we need keys in React? When do we need keys in React?
- **Answer:** Keys are used to give React a stable identity to each component during updates, aiding in efficient rendering and maintaining component state. Keys are needed when rendering dynamic lists of components.

## 10. Can we use index as keys in React?
- **Answer:** While it is possible, it is not recommended, especially when the list is dynamic and items can be added or removed. Using unique identifiers as keys is a better practice.

## 11. What is props in React? Ways to pass props.
- **Answer:** `props` are properties that allow passing data from parent to child components. Props can be passed directly in JSX or through component attributes.

## 12. What is a Config Driven UI?
- **Answer:** Config Driven UI is an approach where UI components' behavior and appearance are configured through external data or settings, making the UI more flexible and configurable.


