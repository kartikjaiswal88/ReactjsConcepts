import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked!");
  }

  function handleMouseOver(){
    alert("Mouse mere upar click mat kro.....");
  }

  function handleInputChange(e)
  {
    console.log("Value till now is:",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    // I am writing my custom behaviour down
    alert(e.target.name);
    console.log(e.target.name.value)
  }

  return (
    <div>

      <button onClick={()=> alert("Click kiya hai")}>Click me</button>
      <form action="" onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleInputChange}/> 
        <button type='submit'>Submit</button>
      </form>
      {/* <p onMouseOver={handleMouseOver}>I am Paragraph</p>
      <button onClick={handleClick}>Click Me</button> */}
    </div>
  )
}

export default App
