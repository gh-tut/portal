import React from 'react';

function IFrame({iframe}){
  return <div>
    <div dangerouslySetInnerHTML={{__html: iframe}}/>
  </div>
}

export default IFrame;