import React, { useState} from 'react';
import DayPickerRangeController from './Components/DayPickerRangeController';


const App = () => {

    return (
      <div style={{
              display:'flex', 
              alignContent:'center', 
              justifyContent:'center', 
              width:'100%', 
              height:'1000px'
           }}
      >
        <DayPickerRangeController />
      </div>
     
    );
    
}

export default App;
