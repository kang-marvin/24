
# **React projects template**

Hi, This is a template repo for all React based applications I will be building.

It uses :

> `React version 16 and above.`

> `React redux version 6 and above.`

> `Redux version 4 and above.`

# **Folder Structure**

## **public folder**

The **public** folder houses :

>_`favicon.ico`_

>_`index.html`_

>_`manifest.json`_

## **src folder**

The **src** folder is divided into sub folder which all handle separate functionalities. Also it contains individual files in its root. These files are :

>  `App.js`: App component with Header, Footer and children components based on the current redirect route.

>  `index.js`: Configure redux store, connect store to App and link ReactDOM to _index.html_ file for `root` ID element.

>  `routes.js`: Define what container handles what route being accessed.

The **src sub-folders** are explained below:

### **API folder**

The API folder houses all API related files, these include class files which house feature specific API endpoint calls.

>  `common/httpMethods.js`: REST helper methods for both GET, POST and DELETE. It also contains header values.

>  `common/utils.js`: Define the domain name for your backend app url based on the current app environment.

>  `index.js`: Define how to export your api classes to the redux actions.

### **Components folder**

The Components folder should only house stateless components. Also known as `Functional Componet`. Here is an example of stateless component

```
...
const StatelessComponent = props => {
  return (
    <div>
      <p>This is an example of a stateless component</p>
	</div>
  );
}
export default StatelessComponent;
```

### **Container folder**

The Container folder should only house stateful components. Also known as `Class Components` or `Pages`. These are what are imported in the `routes.js` file.  To use, stateless components in containers, you just import the required components.

```
...
import { bindActionCreators } from  "redux";
import { connect } from  "react-redux";
import StatelessComponent from ...

class StatefulComponent extends react.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){ console.log("Call API endpoint") }

  render() {
    <div>
      <p>This is an example of stateful component</p>
    </div>
  }
}

StatefulComponent.propTypes = {}

mapStateToProps = (state, ownProps) => {
  return {};
}

mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulComponent);

```
### **Data folder**

The data folder contains the initialState values of the Redux store. Also it houses additional JSON data files which may be required by your system.

### **Images folder**

House all the images used in your system.

### **Redux folder**

The redux folder is divided into 3 sub folders.

> `actions`:  Define all the actions endpoint that call the API endpoint and pass response to reducer. Also it houses `/actionTypes` that define what action / redux store data manipulation reducer should take.

>  `reducers`: Define all the feature reducers that update redux store based on the actionType and endpoint response from actions. In the `/index.js` include your reducer as part of the root Reducer to have access to it in **Container** folder.

> `store`: Configure the Redux store and link its initial state and also all reducers. It also sets up DevTools from developer debugging in Development Environment.

### **Styles folder**

House all the styles files.

### **Tests folder**

House all Stateless and Stateful component tests. It is advisable to group tests folder into folders based on features.

### **Utils folder**

The folder contains helper methods / functions. Example

```
/* Converts JSON params into url string query for GET request */

class urlUtils {
  static toQueryString(urlObject) {
    const queryString = Object
      .keys(urlObject)
      .map(key => key + '=' + urlObject[key]
      .join('&')
    return queryString;
  }
}
export default urlUtils;

```

## Do you want to contribute?

If you want to contribute in any way, Fork the repo and have fun.

I don't have any guidelines yet :)
