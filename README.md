# Check website - https://foodie-ecommercefmz.netlify.app/
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

 ***

 # JavaScript Module Exports

## 1. Named Export:
- **Syntax:** `export const myVariable = ...;` or `export function myFunction() { ... }`
- **Usage:** Imported using curly braces, e.g., `import { myVariable } from './module';`
- **Notes:** Allows exporting multiple variables or functions from a module.

## 2. Default Export:
- **Syntax:** `export default myDefault;`
- **Usage:** Imported without curly braces, e.g., `import myDefault from './module';`
- **Notes:** Allows exporting a single "default" value from a module.

## 3. `* as` Export:
- **Syntax:** `export * as myExports from './module';`
- **Usage:** Imported using an alias, e.g., `import { myExports } from './module';`
- **Notes:** Imports all exports from a module under a single alias.

# Importance of `config.js` File

- **Role:** The `config.js` file is commonly used to store configuration settings such as API keys, environment variables, or any values that might change between development and production.
- **Benefits:** Centralizing configuration settings makes it easier to manage, update, and ensure consistency across the application.

# React Hooks

## 1. What are React Hooks?
- **Definition:** React Hooks are functions provided by React that allow functional components to use state, lifecycle methods, and other React features that were previously only available in class components.
- **Purpose:** Facilitates state management and side effects in functional components, promoting code reuse and composability.

## 2. Importance of `useState` Hook:
- **Purpose:** The `useState` Hook is used in functional components to add local state to the component. It enables components to manage and update state without using class components.
- **Benefits:** Simplifies state management, enhances readability, and avoids the need for class components when using state in React applications.

 ***
 # Technical Concepts FAQ

## 1. What is a Microservice?
- **Definition:** Microservices are small, independent, and loosely coupled services that work together to form a complete application.

## 2. What is Monolith architecture?
- **Definition:** Monolith architecture is a single-tiered software application where the user interface and data management functions are combined into a single program from a single platform.

## 3. What is the difference between Monolith and Microservice?
- **Difference:**
  - **Monolith:** Single-tiered, tightly coupled components.
  - **Microservice:** Decentralized, independent, and loosely coupled components.

## 4. Why do we need a useEffect Hook?
- **Purpose:** `useEffect` is used in React to perform side effects in functional components. It's commonly used for data fetching, subscriptions, or manually changing the DOM.

## 5. What is Optional Chaining?
- **Definition:** Optional Chaining is a JavaScript feature that enables reading the value of a property located deep within a chain of connected objects without having to explicitly validate that each reference in the chain is valid.

## 6. What is Shimmer UI?
- **Definition:** Shimmer UI is a user interface design technique that uses subtle animations or placeholder elements to indicate that content is loading, providing a better user experience during data retrieval.

## 7. What is the difference between JS expression and JS statement?
- **Difference:**
  - **Expression:** Produces a value. e.g., `3 + 4` or `myFunction()`.
  - **Statement:** Performs an action. e.g., `if (x > 5) { /* do something */ }`.

## 8. What is Conditional Rendering, explain with a code example?
- **Explanation:** Conditional Rendering is displaying different components or content based on certain conditions. Example in React:
  ```jsx
  {isLoggedIn ? <UserProfile /> : <Login />}

## 9. What is CORS?
- **Definition:** Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls how web pages in one domain can request and interact with resources in another domain.

## 10. What is async and await?
- **Definition:** `async` is a keyword used to declare a function as asynchronous. `await` is used inside an asynchronous function to pause execution until a Promise is settled.

## 11. What is the use of `const json = await data.json();` in `getRestaurants()`?
- **Explanation:** It fetches data from an API using the `fetch` function, converts the response to JSON format, and assigns it to the `json` constant, allowing easy manipulation of the data in subsequent code.


*** 

# Adding Images to Your App

## Using HTML `<img>` Tag


```html
<img src="image.jpg" alt="Description">
```

## Using CSS background

```html
.element {
  background-image: url('image.jpg');
}
```

## Using react
```jsx
import React from 'react';
import image from './image.jpg';

function App() {
  return (
    <div>
      <img src={image} alt="Description" />
    </div>
  );
}

export default App;
```


## `console.log(useState())`

If you `console.log(useState())`, it will log an array with two elements: the current state value and the updater function. For example:

```javascript
const [state, setState] = useState();
console.log(useState());
// Output: [undefined, ƒ dispatchAction()]
```

### `useEffect` without Dependency Array

## `useEffect` without Dependency Array
```
If you don't provide a dependency array to `useEffect`, it will run after every render. This can lead to performance issues and unintended side effects. For example:

```javascript
useEffect(() => {
  // This will run after every render
  console.log('Effect ran');
});
```


## SPA (Single Page Application)
### SPA (Single Page Application)

SPA is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This results in a smoother user experience.

## Client Side Routing vs Server Side Routing

### Client Side Routing

Client-side routing is handled by the browser, and navigation occurs without a full page refresh. Commonly used in SPAs.

```javascript
// Example with React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
}
```
### Server Side Routing

Server-side routing involves the server responding to each request with a new HTML page. A full page reload occurs with each navigation.

```javascript
// Example with Express
const express = require('express');
const app = express();

app.get('/page1', (req, res) => {
  // Render HTML for Page 1
});

app.get('/page2', (req, res) => {
  // Render HTML for Page 2
});
```

***

## Nested Routes with react-router-dom

To create nested routes using `react-router-dom`, follow these steps:

1. **Install `react-router-dom`:**
   ```bash
   npm install react-router-dom
    ```
Set up Main App Component:

```jsx
// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
```
Create Nested Routes:

Inside components like Dashboard, use additional Route components.
Example in Dashboard.js:
```jsx
// Dashboard.js
import { Route } from 'react-router-dom';
import Overview from './Overview';
import Settings from './Settings';

const Dashboard = ({ match }) => (
  <div>
    <h2>Dashboard</h2>
    <Route path={`${match.path}/overview`} component={Overview} />
    <Route path={`${match.path}/settings`} component={Settings} />
  </div>
);

export default Dashboard;
```

Adjust Links for Nested Routes:

In components or navigation, use Link components with correct paths.
Example in Dashboard component:
```jsx
// Dashboard.js
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <ul>
      <li><Link to="/dashboard/overview">Overview</Link></li>
      <li><Link to="/dashboard/settings">Settings</Link></li>
    </ul>
  </div>
);

export default Dashboard;
```

# React Router Dom - `createHashRouter` and `createMemoryRouter`

## `createHashRouter`
- Used for client-side routing with hash fragments in the URL.
- Ideal for static websites or environments without server-side configuration.
- Example usage:
  ```jsx
  import { createHashHistory } from 'history';
  import { createHashRouter } from 'react-router-dom';

  const history = createHashHistory();
  const App = () => <createHashRouter history={history}>...</createHashRouter>;
  ```
## `createMemoryRouter`
Creates an in-memory history object, useful for testing or non-browser environments.
Doesn't read or write to the address bar.
Example usage:
```jsx
import { createMemoryHistory } from 'history';
import { createMemoryRouter } from 'react-router-dom';

const history = createMemoryHistory();
const App = () => <createMemoryRouter history={history}>...</createMemoryRouter>;
```

## Class Based Components - Lifecycle Methods

 Order of lifecycle method calls:
   - `constructor`
   - `render`
   - `componentDidMount`
   - `shouldComponentUpdate`
   - `render`
   - `componentDidUpdate`
   - `componentWillUnmount`

## Why use `componentDidMount`:
   - Executes after the component is inserted into the DOM.
   - Used for initial setup, data fetching, and side effects.

## Why use `componentWillUnmount`:
   - Executes before the component is removed from the DOM.
   - Used for cleanup, like cancelling network requests or clearing timers.

## Why use `super(props)` in constructor:
   - `super(props)` is used to call the constructor of the parent class (React.Component).
   - Necessary to access `this.props` in the constructor.

## Why can't the `useEffect` callback function be async:
   - `useEffect` expects a cleanup function or undefined to be returned.
   - Async functions always return a promise, causing issues with cleanup.

***


# Lazy Loading and Suspense Q&A

### When and why do we need `lazy()`?
Use `lazy()` when you want to dynamically import a component only when it's actually needed, improving initial page load performance.

### What is suspense?
`Suspense` is a React feature that lets components "wait" for something before rendering. It's often used with dynamic imports and data fetching.

### Why do we get the "A component suspended..." error?
The error occurs when a component suspends while handling synchronous input. To resolve, wrap the updates causing suspension with `startTransition` to prevent UI replacement with a loading indicator.

### How does suspense fix the error?
`Suspense` with `startTransition` allows React to prioritize rendering updates, avoiding synchronous interruptions and UI replacement.

### Advantages and disadvantages of code splitting pattern?
**Advantages:**
- Faster initial load times.
- Efficient use of network resources.
  
**Disadvantages:**
- Adds complexity to the codebase.
- Requires careful management to avoid over-splitting or under-splitting modules.

### When and why do we need suspense?
Use `Suspense` when dealing with asynchronous operations like dynamic imports or data fetching. It helps manage loading states and improves user experience.


***


# CSS Exploration
## some common CSS writing approaches:


Vanilla CSS: Traditional approach using plain CSS without any preprocessor or framework.

CSS Preprocessors: Utilize preprocessors like Sass, Less, or Stylus to add features like variables, nesting, and mixins to enhance CSS syntax.

CSS-in-JS: Write CSS directly within JavaScript files, often used in React applications. Popular libraries include styled-components and Emotion.

BEM (Block Element Modifier):Methodology for naming CSS classes in a structured and modular way, improving code readability and maintainability.

Atomic CSS:Create small, single-purpose utility classes and combine them to construct UI components. Tailwind CSS is a popular framework following this approach.

Object-Oriented CSS (OOCSS):Emphasizes creating reusable and modular CSS objects that can be combined to build UI components.

SMACSS (Scalable and Modular Architecture for CSS):Organizes stylesheets into five categories (Base, Layout, Module, State, Theme) to create a scalable and maintainable CSS architecture.

Responsive Design:Utilize media queries to adapt the styling based on the device's screen size, ensuring a consistent user experience across different devices.

CSS Frameworks: Use frameworks like Bootstrap, Foundation, or Bulma to leverage pre-designed components and a grid system, streamlining the development process.

Critical CSS: Identify and inline the minimal CSS required for above-the-fold content to improve page load performance.

Functional CSS: Write CSS in a functional programming style, focusing on small, single-purpose classes that can be composed to achieve styling goals.

PostCSS: Use PostCSS plugins to enhance the CSS development process, such as autoprefixing, linting, and minification.

## Tailwind Configuration
Tailwind CSS is a powerful utility-first CSS framework. To configure Tailwind, follow these steps:
1. Install Tailwind CSS: `npm install tailwindcss`
2. Create a configuration file: `npx tailwindcss init`
3. Customize `tailwind.config.js` according to project requirements.

## tailwind.config.js Keys
- `content`: Specifies files containing CSS content to be processed by Tailwind.
- `theme`: Allows customization of default styles, such as colors, fonts, spacing, etc.
- `extend`: Permits the addition or overriding of styles to extend Tailwind's default utility classes.
- `plugins`: Integrates additional plugins to enhance Tailwind's functionality.


## .postcssrc File
The `.postcssrc` file is used to configure settings for PostCSS, a tool that transforms styles with JS plugins. This file allows customization of PostCSS behavior, such as adding plugins, defining preset environments, and specifying other processing options.

Ensure that the `.postcssrc` file is appropriately configured to suit the project's needs.

***


## Prop Drilling
Prop drilling refers to the process of passing data through multiple layers of components in a React application by passing props down the component tree.

## Lifting State Up
Lifting state up is a React pattern where the state is moved from a lower-level component to a higher-level component to share the state among multiple components.

## Context Provider and Context Consumer
Context Provider and Context Consumer are part of React Context API. Provider is used to pass data to its descendants, and Consumer is used to access that data without prop drilling.

## Default Value in Context Provider
Yes, if you don't pass a value to the provider, it takes the default value specified in the createContext function.

***

# Redux

## useContext vs Redux
- `useContext`: React hook for accessing the context directly in a functional component.
- `Redux`: State management library for managing global state in complex applications.

## Advantage of using Redux Toolkit over Redux
- Simplifies common Redux patterns.
- Includes utilities like `createSlice` and `configureStore` for easier setup.
- Helps reduce boilerplate code.

## Explain Dispatcher
- Dispatcher is a function in Redux that sends actions to the store.
- Actions are plain JavaScript objects describing the change.

## Explain Reducer
- Reducer is a pure function that specifies how the application's state changes in response to an action.
- It takes the current state and an action, returning the new state.

## Explain slice
- `slice` in Redux refers to a piece of the Redux state.
- It can be created using `createSlice`, encapsulating reducer logic and actions.

## Explain selector
- A selector is a function that takes the Redux state and computes derived data from it.
- It helps to efficiently extract and transform data from the state.

## Explain createSlice and the configuration it takes
- `createSlice` is a function from Redux Toolkit to define a slice of the Redux store.
- Configuration:
  - `name`: String, the slice name.
  - `initialState`: The initial state value.
  - `reducers`: Object, mapping action types to reducer functions.

***
