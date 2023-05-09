import React , {useState} from 'react'

export default function Textform(props) {
  const handleupclick =()=>{
    console.log("clicked");
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleupclick2 =()=>{
    console.log("clicked");
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleupclick3 =()=>{
    console.log("clicked");
    alert(text.length);
  }
  const handleupclick4 =()=>{
    console.log("clicked");
    let newText="";
    setText(newText)
  }

  const handleupclick5 =()=>{
    console.log("clicked");
    let newText=text.replace();
    setText(newText)
  }
  const handleupclick6 =()=>{
    console.log("clicked");
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleupclick7 =()=>{
    console.log("clicked");
    alert(text.length);
  }
  const handleupclick8 =()=>{
    console.log("clicked");
    let newText="";
    setText(newText)
  }

  const handleupclick9 =()=>{
    console.log("clicked");
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleupclick10 =()=>{
    console.log("clicked");
    alert("character at first position:"+" "+text.charAt(0));
    
  }
  const handleupclick11 =()=>{
    console.log("clicked");
    let newText=text.split(",");
    setText(newText)
  }
  const handleupclick12 =()=>{
    console.log("clicked");
    let newText="";
    setText(newText)
  }
  const handleonChange =(event)=>{
    console.log("on change");
    setText(event.target.value)
  }

  const [text, setText]=useState("enter text here");
  return (
    <div> 
<div className="mb-3">
<textarea className="form-control" mx="9" value={text} onChange={handleonChange}  id="myBox" rows="8"></textarea>
</div>
    <button className="btn btn-primary"  my="9" onClick={handleupclick}> upper case</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick2}> lower case</button>
    <button className="btn btn-primary"  my="9" mz="9"margin="2px" onClick={handleupclick3}> count word</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick4}> erase  word</button>
    <button className="btn btn-primary"  my="9" onClick={handleupclick5}> replace</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick6}>truncate </button>
    <button className="btn btn-primary"  my="9" mz="9"margin="2px" onClick={handleupclick7}> substr</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick8}> slice</button>
    <button className="btn btn-primary"  my="9" onClick={handleupclick9}> trim</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick10}> char at 1</button>
    <button className="btn btn-primary"  my="9" mz="9"margin="2px" onClick={handleupclick11}> split</button>
    <button className="btn btn-primary"  my="9" mz="9" margin="2px" onClick={handleupclick12}> erase  word</button>
    </div>
  )
}
