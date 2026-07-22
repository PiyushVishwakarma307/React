import World from "./World"


function App() {

  return (
    <>
      <h1>Hii! This is my first react project.</h1>
      <h2>Hii! This is my first react project.</h2>
      <World/>
    </>
  )
}

export default App


// npm run dev : to run the project(starts the development server and opens the project in the browser)

// npm run build : to build the project (compiles the project into static files for production)

// npm run preview : to locally preview the production build

// npm run lint : to check for linting errors in the project

// npm run format : to format the code in the project

// npm run test : to run the tests in the project


// what is vite: vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
// 1. A development server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
// 2. A build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

// what is a bundler: A bundler is a tool that takes your code and its dependencies and combines them into a single file (or a few files) that can be loaded by the browser. This process is called bundling. Bundlers also often perform other tasks such as minification, transpilation, and code splitting to optimize the performance of your application.

// what is react: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their application in a declarative way. React uses a virtual DOM to efficiently update the UI when the state of the application changes, making it fast and responsive. It is maintained by Facebook and has a large community of developers contributing to its ecosystem.

// react as a framework: React is often referred to as a framework, but it is technically a library. The main difference between a library and a framework is that a library provides a set of functions and tools that developers can use to build their applications, while a framework provides a more structured approach to building applications by enforcing certain patterns and conventions. React is often used in conjunction with other libraries and frameworks to build full-featured web applications, which is why it is sometimes referred to as a framework.

// what is react-dom: ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. It is used to render React components into the DOM and manage their lifecycle.


// React is a single-page application (SPA) framework, which means that it allows developers to build web applications that load a single HTML page and dynamically update the content as the user interacts with the app. This approach provides a smoother and faster user experience compared to traditional multi-page applications, where each user action requires a full page reload. React achieves this by using a virtual DOM to efficiently update only the parts of the page that need to change, rather than reloading the entire page.