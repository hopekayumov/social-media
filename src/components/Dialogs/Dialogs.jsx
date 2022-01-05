import React from "react";
import "./Dialogs.css";
import DialogsUser from "./DialogsUser/DialogsUser";

function Dialogs() {
  return (
    <div className="dialogs">
      <div className="dialogs__users">
          <DialogsUser id="1" fullname="Farruh Mahkamov" />
          <DialogsUser id="2" fullname="Ozodbek Abuhalikov" />
          <DialogsUser id="3" fullname="Husnidin Botirov" />
          <DialogsUser id="4" fullname="Bobur Abdusatorov" />
          <DialogsUser id="5" fullname="Muslima Sobirova" />
          <DialogsUser id="6" fullname="Zarina Ruziyeva" />
         </div>
      <div className="dialogs__messages">
        
      </div>
    </div>
  );
}

export default Dialogs;
