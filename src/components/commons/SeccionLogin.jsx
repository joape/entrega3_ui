import { useState } from "react";
import { api } from "../../api/api";

export function SeccionLogin(){
    return (<div className="login">        
            <div className="login caja">                
                <div className="cont">
                    <h2 className="titulo">LOGIN</h2>
                     <h3>Usuario:</h3> <input name="usuario" type="text"></input>
                     <h3>Password:</h3> <input name="clave" type="text"></input>                      
                </div>
                <div className="cont">
                     <button type="submit" className="btnlogin"> Login</button>
                     <span className="text-danger d-block"></span>                     
                </div>                                        
            </div> 
    </div>);
}