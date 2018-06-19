import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'


//import config from '../../../config';

class Social extends Component{
    
    render(){
        return(
            <div>
                <h2>Facebook, Google and Twitter login with ReactJs</h2>   
                <p>
                    <FacebookLogin />
                </p>
            </div>
        )
    }
}

export default Social;