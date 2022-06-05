import {useState, useEffect} from 'react'

function App() {

  const [N_number, setNumber] = useState(60);
  const [number2, setNumber2] = useState(60);


  useEffect(()=>{
   setInterval(()=>{
      setNumber(preState => preState-1)
    },10000)
      
  },[])

  useEffect(()=>{
    setInterval(()=>{
       setNumber2(preState2 => preState2 - 1)
     },1000)
       
   },[])

  
  return (

    <div className="App">

        {N_number}
        {number2}



      
    </div>
  );
}

export default App;
