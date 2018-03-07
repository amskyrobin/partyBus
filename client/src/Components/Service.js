import React from "react";

class Service extends React.Component {
  constructor(props){
    super(props)
    console.log("props", this.props)
   

    
  }

  componentWillReceiveProps(){
    console.log("props 2", this.props)
    this.setState()
  }


render (){
  return (
    <div>
    <p>services</p>
    <p>{}</p>
    <p></p>
    </div>)
}
}

export default Service