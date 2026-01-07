import Scroll from "./components/Scroll";


const App = () => {

   function btnClicked(){
    console.log('button is clicked');
   }
   function btnDClicked(){
    console.log('button is  double clicked');
   }
   function MouseEnter(){
    console.log('Mouse');
    }

  function inputChanging(val){
      console.log(val.target.value); //instead of creating a function we can can a function using another function
    }

    
  //also there is onwheel and funtion and deltaY to check the scrolling speed
  return (


   <div>
        
    <div onMouseMove={(elem) =>{
      
      console.log(elem.clientX);
    }} className="box">
      
      <button  onMouseEnter={MouseEnter} onDoubleClick={btnDClicked} onClick={btnClicked}> Click Me</button>
      <input onChange={function (elem){
         inputChanging(elem); //instead of creating a function we can can a function using another function
    }} type="text" placeholder="Enter your Name" />
      
    
    </div>
    <Scroll />
   </div>


  );
}

export default App;
