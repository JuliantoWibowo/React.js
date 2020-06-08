import React ,{ Component } from 'react'


class GrandChild extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            
        }
    }

   minBeli = 3;
    render() {
        return (
           <div>
               <p>Grand Child </p>
               <p>{this.props.data}</p>
               
               </div>
        )
    }
}

export default GrandChild