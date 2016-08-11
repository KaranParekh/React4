import React,{Component} from 'react';



class Search extends Component{

  constructor(props){
    super(props);
    this.onInputChange=this.onInputChange.bind(this);
    this.state={term:''};
  }

  onInputChange(event){
    if(!isNaN(event.target.value))
    this.setState({term:event.target.value});

  }

render(){
return (
<div>
<div class="input-group">
     <input type="text" class="form-control" placeholder="Search for..." onChange={this.onInputChange} value={this.state.term} />
     <span class="input-group-btn">
       <button class="btn btn-default" type="button">Go!</button>
     </span>
   </div>
   <label>
   {this.props.label}

<input type="text" name="search" placeholder="Enter the name" onChange={this.onInputChange} value={this.state.term} />
</label>
Value of the input: {this.state.term}
</div>
      );
    }
  }

export default Search;
