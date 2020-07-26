import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function sayHello(user){
    return(
        <span>
            Hello,
            {user.firstName} {user.lastName}
        </span>
    )
    // return "Hello, " + user.firstName + " " + user.lastName;
}

const user = {
    firstName: "Amir",
    lastName: "Shariati"
}

ReactDOM.render(
    <h1>
        {sayHello(user)}
    </h1>,
  document.getElementById('root')
);


