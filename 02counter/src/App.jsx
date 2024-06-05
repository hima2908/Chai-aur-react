/*React ke under me UI problem aarhi hai
ek button click krne se 5 jagah chije update ho rhi hai 
wo hi control react krna cha rha hai 
react bolta hai kya chij update hogi ye ap nhi mai decide krunga 
react  react krti hai variables ke updation pe
(imp pt.) => ek variable update hote hi har jagah react krti hai
agar wo variable jaha jaha pr hota wha wha dikhai dega 
but UI me update krna hai to react control krta hai.
kuch special method deta hai react UI update krne ke liye use hooks bolte hai 

UI updation ko react control krta hai aur control 
bhi kaise krte hai react ke pass khudke bhot sare special method hote 
hai use hum hooks bolte hai 
*/




import { useState } from "react";

function App() {
  
 let [Counter, updateCounter] = useState(15)

  // let Counter = 16

  const addvalue = () => {
    // console.log("value added", Counter);
    //  console.log( Counter = Counter + 1 );
    // Counter = Counter + 1 
 if (Counter == 20) {
  updateCounter(Counter = 20)
 }else{
  updateCounter(Counter+1)
 }
  }

  const removeValue = ()=>{
    
    if (Counter == 0) {
      updateCounter(Counter = 0)
    }else{
      updateCounter(Counter-1)
    }
  }

  return (
    <>
      <div>
      <h1>chai aur react</h1>
      <h2>Counter{Counter}</h2>
      <button onClick={addvalue}>added {Counter}</button>
      <button onClick={removeValue} >remove {Counter}</button>
      <p>footer: {Counter}</p>
      </div>
    </>
  )
}

export default App
