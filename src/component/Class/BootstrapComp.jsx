import React ,{ Component } from 'react'
import {Button } from 'reactstrap';

class BootsrapComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            
        }
    }

   minBeli = 3;
    render() {
        return (
           <div> 
               <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
         </div>
        )
    }
}

export default BootsrapComp