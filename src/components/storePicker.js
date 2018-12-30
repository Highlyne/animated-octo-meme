import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    
    goToStore = (event) => {
        // stopping default action of form submit
        event.preventDefault();
        console.log('Go to the store');
        console.log(this);
        // Grab the value of the input
       const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };
    render () {
        return (
            
            <form className="store-selector" onSubmit={this.goToStore}> 
            <h2>Please select a store.</h2>
            <input
                type="text"
                ref={this.myInput}
                required
                placeholder="Enter Store Name"
                defaultValue={getFunName()}
            />
            <button type="submit">Visit Store -></button>

            </form>
         
        )
    }
}

export default StorePicker;