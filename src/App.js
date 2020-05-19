import React from 'react';
import { randomPos,fadeIn,eff3d  } from './Position';
import './App.css';

   

//Image Component
const StranImg = (props) =>{
return (
          <img 
                style={props.position}
                src="/Images/strand.jpg" alt=""
                                    
                />
)
}
 
 const Label = (props) =>{
        return(
                <label
                   style={props.position}
                                 
                   >WE STRAND TOGETHER </label>
)
}



const ExtendImg = eff3d(fadeIn(randomPos(StranImg )))
const ExtendLab = eff3d(fadeIn(randomPos(Label)))



//// Main Function Component call the ExtendImg Wrapped

class  App extends React.Component {
  constructor(props){
  super(props)
  this.state={
               
               count:0
                
  }
  
  this.increment=this.increment.bind(this)
  }
  

increment(){
    this.setState({

             count:this.state.count+1

    })


} 
    render(){
  

  const children=[];
        for(let i=0; i<this.state.count; i++){         
           children.push(<ExtendImg key={i} />);
           children.push(<ExtendLab key={i+500} />);        
      }
        
  return (
    
            


  <div className="container">
  <h2>Animation Strand Palace</h2>
  
  
     
      { children }
      
      <button type="button" onClick={this.increment}  >Press Me</button>             
      <img src="/Images/smile.jpg" id="item" alt="" title="Clik me" onClick={moveImage} />
    
  </div> 
        
     
  );
}
}
export default App;

function moveImage(){
  var object = document.getElementById('item');
  var x = Math.floor(Math.random()*700);
  var y = Math.floor(Math.random()*700);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
}
