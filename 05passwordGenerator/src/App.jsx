import { useState, useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [lenght, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password ,setPassword] = useState()

  // useref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*(){}?"

    for(let i = 1; i<= lenght ; i++){
      let char = Math.floor(Math.random()* str.length + 1);

      pass += str.charAt(char) ;
    }

    setPassword(pass)



  } , [lenght ,numAllowed,charAllowed ,setPassword])
  
    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0 ,101)
      window.navigator.clipboard.writeText(password);
    },[password]) 


    useEffect(()=>{
      passwordGenerator();  
    },[lenght ,numAllowed ,charAllowed ,passwordGenerator])
 
 
 
    return (
    <>
      <div className= "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">
        <div>Password Generator</div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

         <input type="text" 
          value={password}
          className='bg-gray-300 outline-none w-full py-1 px-3 mb-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='mb-3 outline-none bg-blue-600 text-white 
          px-3 py-1 shrink-0'
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2 mb-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={lenght}
              className='cursor-pointer'
              onChange={(e) =>{setlength(e.target.value)}}
              />
              <label >Length:{lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             defaultChecked ={numAllowed}
             id='numberInput'
             onChange={()=>{
              setNumAllowed((prev) => !prev);
             }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div> 
            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             defaultChecked ={numAllowed}
             id='charInput'
             onChange={()=>{
              setCharAllowed((prev) => !prev);
             }}
             />
             <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
