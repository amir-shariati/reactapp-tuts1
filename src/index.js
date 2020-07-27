import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props){
    return(
        <div>
            <div className={"auther"} >
                <img src={props.comment.auther.avatar} />
                {props.comment.auther.name}
            </div>
            <div className={"comment-text"}>
                {props.comment.text}
            </div>
            <div className={"comment-date"}>
                {props.comment.date}
            </div>
        </div>
    )
}

const comment = {
    auther: {name: "Amir", avatar: "url"},
    text: "my first comment",
    date: new Date().toDateString()
};

ReactDOM.render(
    <App comment={comment} />,
    document.getElementById('root')
)


