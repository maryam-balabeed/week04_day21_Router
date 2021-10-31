import React from 'react'

function Home({history}) {

   const goToContact =()=>{
       history.push("'/ContantUS'")
   };
   const goBack = () => {
    history.goBack();
  };
  const goForward = () => {
    history.goForward();
  };
   

    return (
      
        <div>
        <h1>Home</h1>
        <button onClick={goToContact}> Go to contact</button>
        <button onClick={goBack}> Go Back</button>
        <button onClick={goForward}> Go Forward</button>
      </div>
    );

      
    
        
    
}

export default Home
