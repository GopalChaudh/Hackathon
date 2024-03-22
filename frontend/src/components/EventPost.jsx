import "./EventPost.css"

export default function eventPost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.org}</p>
            <p>{props.body}</p>
            <p>{props.location}</p>
            <p>{props.dateAndTime}</p>
            <p>{props.category}</p>
        </div>
    );
}