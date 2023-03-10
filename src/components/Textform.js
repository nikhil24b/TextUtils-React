import React , {useState} from 'react'

export default function Textform(props) {


  const handleUpClick = () => {
    //console.log("Upper case is clicked");
    let newText = text.toUpperCase();
    setText (newText);
    props.showAlert(" Converted to Uppercase", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText (newText);
  }
  const clearText = () => {
    let newText = "";
    setText (newText);
  }
  const handleOnChange = (event) => {
      //console.log("OnChange");
      setText(event.target.value);
    }

  const [text, setText] = useState("Enter Text here");
  // text = "abc"; Wrong way to set value of text
  //setText ("abc"); this only works inside the function
  return (
    <>
      <div className='container' style={{color : props.mode === 'dark' ? 'white':'black'}}>
      {document.title = "TextUtils - Home"}
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control"value={text} onChange = {handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#14162f':'white', color : props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1 " onClick= {handleUpClick} >Convert to Upper case</button>
          <button className="btn btn-primary mx-1 my-1" onClick= {handleLoClick} >Convert to Lower case</button>
          <button className="btn btn-primary mx-1 my-1" onClick= {clearText} >Clear Text</button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white':'black'}} >
        <h2>Your Text summary</h2>
        <p> <b>{text.split(" ").length }</b> words and <b>{text.length}</b> characters </p>
        <p> <b>{0.008 * (text.split(" ").length) }</b> Minutes for reading</p>
        <h2>Preview</h2>
        <p> {text.length >0 ? text:"Enter something to preview it here" } </p>
      </div>
    </>
  )
}
