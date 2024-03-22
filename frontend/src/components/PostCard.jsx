import "./PostCard.css";

export default function postCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <p>{props.user}</p>
            <p>{props.date}</p>
            <p>{props.category}</p>
            <p>{props.likes}</p>
            <p>{props.comments}</p>
        </div>
    );
}