import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'

class App extends Component{

constructor(props){
  super(props);
  this.state={label:'Search term'}
}



  render(){
    return(
    <div>
    <Search label={this.state.label} />
    </div>
  );
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));



import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router , browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />,document.getElementById('app'));
