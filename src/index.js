import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Auther(props) {
    return(
        <div className={"auther"} >
            <img src={props.auther.avatar} />
            {props.auther.name}
        </div>
    )
}

function CommentText(props) {
    return(
        <div className={"comment-text"}>
            {props.text}
        </div>
    )
}

function CommentDate(props) {
    return(
        <div className={"comment-date"}>
            {props.date}
        </div>
    )
}

function App(props){
    return(
        <div>
            <Auther auther={props.comment.auther} />
            <CommentText text={props.comment.text} />
            <CommentDate date={props.comment.date} />
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


