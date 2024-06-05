//isi tarah se react me kam hota hai , yehi hai hamara custom react

function customRender(reactElements, mainContainer) {
    
    // // version 1

    // //dom elements ko create krna padega fir use inject krna padega
    // const domElement = document.
    //     createElement(reactElements.type) // direct bhi create kr skte hai 'p','div',etc.. but hume ise modulus function banana hai reactElement se lena hai aur tag kis type ka hai isiliye humne reactElement me kye value pair me diya hai .// reactElements ke through create krna hai ;'


    // domElement.innerHTML = reactElements.children
    // domElement.setAttribute('href', reactElements.props.href)
    // domElement.setAttribute('target', reactElements.props.target)

    // container.appendChild(domElement)


    // version 2 

    // if agar hamare pass div or h1 rahta to uske attribute kaise set krte ? agar 3rd attribute set krna hota to problem ho jati 
    // isiliye looping krte hai

    // continuesly isi tarah se elements create hote rahte hai 

    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    for (const prop in reactElements.props) {
       if (prop === 'children') continue 
       domElement.setAttribute(prop,reactElements.props[prop])
    }
    mainContainer.appendChild(domElement)
}     





// a tag me uski khudki properties bhi hogi 
// react me tag render krne ke liye kis tarah se process hota hai 
//react hum used nhi kr rhe hai, customize likh rhe hai hai .
//humne kaha ki hamari library jisko bhi used krni hai usko isi tarah se used krna padega 

// isi tarah se elements ka tree graph banta rhata hai

const reactElements = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
      
    },
    children: 'click me to visit google'  //ye kam actually me react ka hota hai under the hood //but hum to customize likh rhe hai 
}

const mainContainer = document.querySelector('#root')

// ab muze pata hai ki muze ise render krna hai
// for ex. <a></a> tag elements ko render krna hai 

/*
ab mai ye chahta hu ki ek elements ya method ho hamare pass
jo method us tags ko render kr de aur render kaise krde
rectElements ko add kr de root ke ander (div ke ander jiski id root hai)
*/

customRender(reactElements, mainContainer)  //(kisko inject kru , kaha inject kru)

//maze ki bat ye hai ki ye customRender method kam kaise krega 