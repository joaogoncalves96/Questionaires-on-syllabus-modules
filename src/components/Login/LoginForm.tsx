import Router from "next/router";
import { FormEvent, useRef, useState } from "react";
import database from "../../../database.json";
import styles from "./Login.module.css";

function LoginForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const[sucessLogin, setSucessLogin] = useState(false);

   
  const handleUsernameChange = (e) => {
    setSucessLogin('');
    setUsernameError(' ');
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSucessLogin('');
    setPasswordError(' ');
    setPassword(e.target.value);
  };
    
  async function verifyLogin({ username, password }) {
    return new Promise<void> ((resolve, reject) => {
      setTimeout(() => {
        const user = database.users.find((user) => user.username === username && user.password === password);
       if (!user) {
      reject();
    }
   resolve();
      }, 1000);
    });
  }


    function handleSubmit(e) {
        e.preventDefault();
        /*
      const username1 = inputRef.current.value;
        const password1 = inputRef.current.value;*/
    
        
       
    

        console.log(username, password);
        verifyLogin({ username, password })
          .then(() => {
            setSucessLogin(true);
            setTimeout(() => {
              Router.push("/profile")
              const json = Buffer.from(JSON.stringify({ username, password })).toString("base64");

             document.cookie = `token=${json}; max-age=9000`;
            }, 2000);
    
          }
          )
          .catch(() => {
            setUsernameError("Username or password incorrect");
            setPasswordError("Username or password incorrect");
          }
          );
      };
   

     return (
      <form onSubmit={handleSubmit} className={styles.login} autoComplete="off">
        <label>Username</label>
        <input
        required
          type="text"
          placeholder="Enter your username"
          value={username}
         onChange={handleUsernameChange}
        /><br></br>
        <label>Password</label>
        <input
        required
          type="password"
          placeholder="Enter your password"
          value={password}
           onChange={handlePasswordChange}
          /><br></br>
         {passwordError&&<div className={styles.error}>{passwordError}</div>}
        <button type="submit" className={styles.submit}>Login
        </button>
        {sucessLogin&& <div className={styles.sucess}>Login Sucess</div>}
      </form>
    );
  }

export default LoginForm;






/*import styles from "./Login.module.css";
import database from "../../../database.json";
import Router from "next/router";
import React, { useState} from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const[sucessLogin, setSucessLogin] = useState(false);

  const handleUsernameChange = (e) => {
    setSucessLogin('');
    setUsernameError(' ');
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSucessLogin('');
    setPasswordError(' ');
    setPassword(e.target.value);
  };

  async function verifyLogin({ username, password }) {
    return new Promise<void> ((resolve, reject) => {
      setTimeout(() => {
        const user = database.users.find((user) => user.username === username && user.password === password);
       if (!user) {
      reject();
    }
   resolve();
      }, 1000);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    verifyLogin({ username, password })
      .then(() => {
        setSucessLogin(true);
        setTimeout(() => {
          Router.push("/profile")
        }, 2000);

      }
      )
      .catch(() => {
        setUsernameError("Username or password incorrect");
        setPasswordError("Username or password incorrect");
      }
      );
  };


  return (
    <form onSubmit={handleSubmit} className={styles.login} autoComplete="off">
      <label>Username</label>
      <input
      required
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}/><br></br>
      <label>Password</label>
      <input
      required
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}/><br></br>
       {passwordError&&<div className={styles.error}>{passwordError}</div>}
      <button type="submit" className={styles.submit}>Login
      </button>
      {sucessLogin&& <div className={styles.sucess}>Login Sucess</div>}
    </form>
  );
}
export default LoginForm;*/
