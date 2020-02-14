// create conext

import React,{Component, createContext} from 'react';

export const ContactContext=createContext();

class ContactProvier extends Component {
  render() { 
    return (  
      <ContactContext.Provider value={{firstName:'Humayon',lastName:'kabir'}}>
      {this.props.children}
      </ContactContext.Provider>
      );
  }
}
 
export default ContactProvier;

//show
import {ContactProvider} from 'path';
//wrap app component
<ContactProvider>
<App/>
</ContactProvider>

// consume
import ContactContext from 'path';
// inside class
static contextType=ContactContext;
//show
console.log(this.context);
//another consume way
<ContactContext.consumer>
{
  (context)=>{
let {data,data2}=context
  }
}
</ContactContext.consumer>

// Multiple Context
<ContactContext>
<AnotherContext>
<Components/>
</AnotherContext>
</ContactContext>