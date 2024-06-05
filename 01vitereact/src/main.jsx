import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// aisa bhi likha to bhi koi problem nhi hai but aisa krna nhi hai 
function MyApp() {
  return (
    <div>
      <h1>custom App ! BY himanshu bokde </h1>
    </div>
  )
}


const ReactElements = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',

  },
  children: 'click me to visit google'  //ye kam actually me react ka hota hai under the hood //but hum to customize likh rhe hai 
}




const anotherElements = (
  <a href="https://google.com" target='_blank'>google</a>
)


const anotherUser = "chai aur react"
// ye syntax predifined hai react ka khudka 
const reactElements = React.createElement(
  'a',  // 1st para me tags expected hote hai 
  { href: "https:/google.com", target: '_blank' }, // 2nd para me object expected hote hai (yaha pr attributes dete hai , object ki properties dete hai but props name nhi dete hai  )
  'click me to visit google',               //3rd direct text 
  anotherUser // yaha direct inject ho jata hai 
)



ReactDOM.createRoot(document.getElementById('root')).
  render(

    // MyApp() // same function ko jaise execute krte hai waisa but aisa krna nhi hai 
    //end of the day function aisehi execute hota hai , only knowledge purpose

    <App/> // aisa hi krna hota hai 


    // reactElements
  )
