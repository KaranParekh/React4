import React,{Component} from 'react';

class ResultItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <p>Name:{this.props.name}</p>
      <p>Comment:{this.props.comment}</p>
      <hr/>
      </div>

    );
  }
}
export default ResultItem;
