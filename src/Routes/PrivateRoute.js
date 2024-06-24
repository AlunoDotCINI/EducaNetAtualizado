import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Modal from "../Components/js.desing/Model/Model";
export default function PrivateRoute({children}){
  const [resultbody,setResultForm] = useState('')
  const upadateResult = r =>{
    setResultForm(r)
  }

  <Modal handleResult={upadateResult}/>
  const user  = resultbody
  if(user.userVerification === "A"){
  return  user ? children:<Navigate to="/teacher"  />
  }

}