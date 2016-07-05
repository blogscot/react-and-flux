
## Study Notes

### Prototype Warnings

To see the PropType warnings, use the unminified version of react and react-dom (not sure if react-dom is required here).
You can import these by specifying the module's full path, e.g.

```
const React = require('../../node_modules/react/dist/react')
const ReactDOM = require('../../node_modules/react-dom/dist/react-dom')
```

### Updating the React Router

There is a great tutorial on the latest React Router at [CSS Tricks](https://css-tricks.com/learning-react-router/)


### Configuring the Gulp Connect server

The gulp connect server needs to be configured to send all requests to back the client. See [here](https://github.com/reactjs/react-router/issues/2108) for details.
