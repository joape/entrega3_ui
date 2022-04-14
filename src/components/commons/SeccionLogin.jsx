import { useState } from "react";
import { api } from "../../api/api";

export function SeccionLogin(){
    return (<div className="login">        
            <div className="login caja">                
                <form>
                    <h2 className="titulo">LOGIN</h2>                   
                    <div className="cont">
                        <label htmlFor="login-usuario">Usuario:</label>
                        <input name="usuario" type="text"></input>
                    </div>
                    <div className="cont">
                        <label htmlFor="login-password">Password:</label>
                        <input name="clave" type="text"></input>                      
                    </div>
                    <div className="cont2">
                        <button type="submit" className="btnlogin"> Login</button>
                        <span className="text-danger d-block"></span>                     
                    </div>
                </form>                                        
            </div> 
    </div>);
}