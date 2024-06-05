
import Chai from "./chai"  // chai.jsx file import ho gyi hai App.jsx file me
function App() {
  // variables kaise inject krte hai react me ? function ke under variables banakr ya function ke bahar
  //but return ke under nhi chalega variables inject krna 
  const username = "himanshu bokde"
  return (
    //method 1. another file ka code function
    //  <Chai/> 

    // or 
    // method 2. is file ka code in one div 

    // <div>
    //   <h1>chai is ready</h1>
    //   <h2>chai is ready</h2>
    //   <h3>chai is ready</h3>
    //   <h4>chai is ready</h4>
    //   <h5>chai is ready</h5>
    //   <h6>chai is ready</h6>
    // </div>



    // or 
    // method 3. another file ka code function and is file ka code in one fragment only 

    /*
      this is fragment 
     <>
      aur is fragment me is file ka code and another file ka code bhi inject kr skte hai  
     </> 
    */

     // react me { } isme inject krte hai variables ko 
     // js me ${ } isme aise $ sign lagakar inject krte hai 
 
     /* note : {username} isko bolte hai expression aur ye hai evaluated expression 
      
     
     */
    <>
    <Chai/> 
      <h1>hi,{username}</h1> 
      <h2>chai is ready</h2>
      <h3>anything alse</h3>
      <h4>one pizza please</h4>
      <h5>yes , why not dear himanshu</h5>
      <h6>your pizza has ready sir,</h6>
    </>
  )
}

export default App
