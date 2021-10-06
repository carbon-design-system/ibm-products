# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Steps to create this example

1. npx create-react-app ccs-base-react-16
2. Downgraded react dependencies to 16.4.0 and ran yarn
3. yarn add @carbon/ibm-cloud-cognitive
4. Install carbon-components-react as per that packages instructions
   <https://www.npmjs.com/package/carbon-components-react>
5. Install @carbon/icons-react as per package instructions
   <https://www.npmjs.com/package/@carbon/icons-react>
6. Install @carbon/elements as per package instructions
   <https://www.npmjs.com/package/@carbon/elements>
7. Clear out `src/index.css` and `src/App.css`
8. Replace `import './index.css';` with
   `import '@carbon/ibm-cloud-cognitive/css/index-full-carbon.min.css';` in
   `src/index.js`
9. Add an example asset `src/assets/example-logo.svg`.
10. Replace the contents of App.js with

```jsx
import './App.css';

import { useState } from 'react';

import { AboutModal } from '@carbon/ibm-cloud-cognitive';
import { Button, Link } from 'carbon-components-react';

import ExampleLogo from './assets/example-logo.svg';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show AboutModal</Button>
      <AboutModal
        additionalInfo={[{ label: 'Version number', content: '1.3.41' }]}
        content={
          <>
            This is an example of the AboutModal from the ibm-cloud-cognitive
            component library. The library is designed and built on top of the
            Carbon Design System and Carbon Components React.
          </>
        }
        copyrightText={<>Copyright &copy; 2020 IBM corporation</>}
        links={[
          <Link
            href="https://ibm-cloud-cognitive.netlify.app/"
            key="View storybook"
          >
            View the components
          </Link>,
          <Link
            href="https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/LICENSE"
            key="link2"
          >
            License
          </Link>,
          <Link
            href="https://www.npmjs.com/package/@carbon/ibm-cloud-cognitive"
            key="npm"
          >
            Install from npm
          </Link>,
          <Link href="https://www.carbondesignsystem.com/" key="Carbon">
            Carbon Design System
          </Link>,
        ]}
        logo={
          <img
            src={ExampleLogo}
            alt="Example product or service logo"
            style={{ maxWidth: '6rem' }}
          />
        }
        title={
          <>
            IBM{' '}
            <span style={{ fontWeight: '600' }}>
              Cloud and Cognitive Components
            </span>
          </>
        }
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default App;
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
