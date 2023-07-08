import React,{useState} from "react";
import './App.css';

function App(){
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setmessage]=useState('');

  let calculatebmi = (event) =>{
    event.preventDefault();
    if(weight ===0 || height===0){
      alert("Invalid input");
    }
    else{
      let bmi=(weight / (height /100)**2)
      setbmi(bmi.toFixed(2))

      if(bmi<18.5){
        setmessage("UNDER WEIGHT")
      }else if(bmi>=18.5 && bmi<=24.9){
        setmessage("NORMAL WEIGHT")
      }else if(bmi>=25 && bmi<=29.9){
        setmessage("EXCESS WEIGHT")
      }else{ 
        setmessage("OBESE")
      }
    }
  }
  let imgsrc;
  if(bmi<1){
    imgsrc=require('./images/heart.avif');
  }
  else if(bmi<18.5){
    imgsrc=require('./images/thin.avif');
  }
  else if(bmi>=18.5&&bmi<=24.5){
    imgsrc=require('./images/normal.jpeg');
  }
  else if(bmi>=25&&bmi<=29.9){
    imgsrc=require('./images/excess.jpg');
  }
  else{
    imgsrc=require('./images/obesity.avif')
  }
  let reload=() =>{
    window.location.reload();
  }
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI CALCULATOR</h2>
        <form onSubmit={calculatebmi}>
          <div>
            <label>Weight (Kg)</label>
            <input value= {weight} onChange={(e) => setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value= {height} onChange={(e) => setheight(e.target.value)}/>
          </div>
          <button className="btn" type="submit">SUBMIT</button>
          <button className="btn btn-outline" type="submit"onClick={reload}> RELOAD</button>
        </form>
        <div className="center">
        <h3>YOUR BMI is: {bmi}</h3>
        <p>{message}</p>
        </div>
        <div className="img-container">
        <img src={imgsrc} alt=""></img>
        </div>
      </div>
    </div>
    
  )
}
export default App;