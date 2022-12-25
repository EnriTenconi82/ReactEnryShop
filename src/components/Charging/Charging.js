import React, {useState }  from "react";

const Charging = () =>{
const [cargando,setCargando]=useState(false)


setTimeout((()=>{
    setCargando(!cargando)
}), 300);


return(
    <div>
    {(cargando)?
      <div>CaRgAnDo...</div>
      :
      <div>cArGaNdO...</div>
    }
    </div>
)
}


export default Charging