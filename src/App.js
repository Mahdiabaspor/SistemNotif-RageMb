import { useEffect, useState } from 'react';
import { Store } from 'react-notifications-component';
import NotifIcon from "./assets/icons8_Notification.svg"
function App() {
  const [nextComponentName,setnextComponentName]=useState("defult")
  const [NotifTitle,setNotifTitle]=useState("defult")
  const [IsTriggred,setIsTriggred]=useState(false)
  
  var keycode = require('keycode');

  // do somting to change state of isTrigred to true to show notif 

  document.addEventListener('keydown', function(e) {
    if(keycode(e) ==="e"){
      //do somting
      // close this componets
      // run the next component
    }
  })
  useEffect(()=>{
    if(IsTriggred){

      Store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],

        content:(
          <div className='notif'>
            <img src={NotifIcon} alt="" />
            <h4 className='title'>{NotifTitle}</h4>
            <p className='msg' style={{display:"inline"}} >If you want to use {nextComponentName} </p>
            <p style={{display:"inline"}} className='usage'> <span className='pink'>press</span>  <span className='btn'>E</span></p>
          </div>
        )
      });
      setIsTriggred(false)
      setnextComponentName("defult")
      setNotifTitle("defult")
    }

  },[IsTriggred])
  
  const test = ()=>{
    setIsTriggred(true)
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
