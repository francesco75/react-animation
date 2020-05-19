import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenMax,{ Power1 }from "gsap";
//import Power1 from 'gsap';


// Position Random Position


export  const randomPos = (WrappedComponent) =>{
   return class RandomPos extends React.Component {
       constructor(props){
       super(props);
       this.state ={
              position : {
                              top:`${Math.floor(Math.random()*100)}vh`,
                              left:`${Math.floor(Math.random()*100)}vw` 
              }};
}

render(){
      return <WrappedComponent {...this.props} position = 
             {this.state.position}/>

}
   };
}

//const ref=React.createReF()
// Fade the Image Animation

export const fadeIn = (WrappedComponent) =>{
  return class Fadein extends React.Component {
      componentDidMount(){                   	     
            const el=findDOMNode(this)
              TweenMax.fromTo(el,0,3,{
           
                 opacity:0,
            },
            {
            	opacity:1
            }
            );
  	}

render(){
        	
           return <WrappedComponent {...this.props}   />

};
}
}  

///Pulse Animation


export const eff3d = (WrappedComponent) =>{
   return class Eff3d extends React.Component{
        componentDidMount(){
               const el=findDOMNode(this);             
               TweenMax.to(el,0,{transformOrigin:'center center -150px'});
               TweenMax.to(el,0.5,{
                     scaleX:0.8,
                     scaleY:0.8,
                     force3D:true,
                     yoyo:true,
                     repeat:-1,
                     ease:Power1.easeInOut

               }); 
         }
         render(){
         	   return <WrappedComponent {...this.props}   />      
         };
}
}
