import React, { Component } from 'react';
import './App.css';
//import react-bootstrap components
import {Modal,Button} from 'react-bootstrap';

class App extends Component {
  //constructor function
  constructor(props) {
    //make a call to super
    super(props);
    //set the state
    this.state = {
      fieldText: [],
    };
  }

  render() {
    return (

      <Modal.Dialog>

        <Modal.Header>
          <Modal.Title className='field'>{this.state.fieldText}</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <div className="container-fluid">

            <div className="row">

              <div className='col-md-7'>

                {/* numbers, dots, equal buttons*/}
                <div className='btn-group btn-group-justified' role='group'>

                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(1)} ); }
                    }>1</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(2)} ); }
                    }>2</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(3)} ); }
                    }>3</Button>
                  </div>

                </div>

                <div className='btn-group btn-group-justified' role='group'>

                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(4)} ); }
                    }>4</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(5)} ); }
                    }>5</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(6)} ); }
                    }>6</Button>
                  </div>

                </div>

                <div className='btn-group btn-group-justified' role='group'>

                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(7)} ); }
                    }>7</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(8)} ); }
                    }>8</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(9)} ); }
                    }>9</Button>
                  </div>

                </div>

                <div className='btn-group btn-group-justified' role='group'>

                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat(0)} ); }
                    }>0</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('.')} ); }
                    }>.</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { 
                      // eslint-disable-next-line
                      this.setState( { fieldText: [ eval( this.state.fieldText.join('') ).toFixed(9) ] } );
                    }
                    }>=</Button>
                  </div>

                </div>

              </div>

              <div className='otherButtons col-md-5'>

                <div className='btn-group btn-group-justified' role='group'>

                  <div className="btn-group" role="group">
                    {/*clear all Button */}
                    <Button bsStyle="danger" onClick={()=>{
                      this.setState( { fieldText:[] } );
                    }}>clear all</Button>
                  </div>
                  <div className="btn-group" role="group">
                    {/*clear entry button */}
                    <Button bsStyle="warning" onClick={()=>{
                      this.setState( { fieldText:this.state.fieldText.slice(0, this.state.fieldText.length-1) } );
                    }}>clear entry</Button>
                  </div>

                </div>

                <div className='btn-group btn-group-justified' role='group'>
                  {/*number & operation buttons */}
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('%')} ); }
                    }>%</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('*')} ); }
                    }>*</Button>
                  </div>
                </div>
                
                <div className='btn-group btn-group-justified' role='group'>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('/')} ); }
                    }>/</Button>
                  </div>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('-')} ); }
                    }>-</Button>
                  </div>
                </div>

                <div className='btn-group btn-group-justified' role='group'>
                  <div className="btn-group" role="group">
                    <Button onClick={()=> { this.setState( {fieldText:this.state.fieldText.concat('+')} ); }
                    }>+</Button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </Modal.Body>
        
      </Modal.Dialog>
      
    );
  }

}

export default App;
