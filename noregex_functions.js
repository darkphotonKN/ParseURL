
const button = document.querySelector('.main-form #form .btn');


/* Function "Set" that takes a document id and gets it 
from the dom replaces the # symbol with nothing effectively 
removing it and set a value "text"*/
const set = (id, text) => {
    document
        .getElementById(id.replace("#", ""))
        .innerHTML = text
}

let a = document.createElement("a"); 

button.addEventListener('click', (event) => {
    event.preventDefault();
    const url = document.getElementById('input').value;
    console.log(url);

    // extrating parts of the url
    
    // creating elements by ourselves
   
    
    /* NOTE
    Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

    To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().

    Syntax:  Element.setAttribute(name, value);
    name: A DOMString specifying the name of the attribute whose value is to be set. 
          Automatically converted to lower-case when setAttribute is called on am HTML 
          element in an HTML doc. 
    value: A DOMString containing the value to assign to the attribute. Any none-string
           value is automatically converted into a string. 
           
    E.g. var b = document.querySelector("button");
    b.setAttribute("name", "helloButton");
    b.setAttribute("disabled", "");
    */
    // a.setAttribute('href', url); // setting the 'href' attribute of the "a" element as the url we enter into the text box
    // console.log(a);             
    
    // set('protocol', a.protocol);
    // set('domain', a.hostname); 
    // set('path', a.pathname);
    // set('search', a.search);    
   
    // NOTE THAT WE NEVER ADDED THE CREATED ELEMENT "a" TO THE DOM
    // We added it here to the function to be used but there's no need to add it to the dom
    
    // A new way of doing this is:
    const b = new URL(url);

    set('protocol', b.protocol);
    set('domain', b.hostname); 
    set('path', b.pathname);
    set('search', b.search);   

});

// test: https://www.youtube.com/watch?v=U_Z5FJbygJc