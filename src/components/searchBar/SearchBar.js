import React,{Component} from 'react';
import ResultList from './result_list';


class SearchBar extends Component{

constructor(props){
  super(props);
  this.onInputChange=this.onInputChange.bind(this);
  this.onClick=this.onClick.bind(this);
  this.state={term:'',results:[]};
}

onInputChange(event){

  this.setState({term:event.target.value});
}

onClick(event){
  this.setState({
    results:[
      {id:1,
        name:'Xavier',
       comment:'Hey'},

       {id:2,
         name:'Karan',
        comment:'Hello'},

        {id:3,
          name:'Kannan',
         comment:'Hi Sexy'}
    ]
  });
}


render(){
  return (
    <div>
    <input placeholder="Enter First Name" onChange={this.onInputChange}/>
    <button onClick={this.onClick}>Search</button>
    <ResultList results={this.state.results}/>
    </div>
  );
}
}

export default SearchBar;
