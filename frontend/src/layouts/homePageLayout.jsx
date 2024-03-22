import React from 'react';
import EventPost from '../components/EventPost';
import PostCard from '../components/PostCard';
import "./homePageLayout.css";

function HomePageLayout(props) {
    const posts = props.posts.map((post) => {
        return (
            <li key={post.key}><PostCard
                title={post.title}
                body={post.body}
                user={post.user}
                date={post.date}
                category={post.category}
                likes={post.likes}
                comments={post.comments}
            /></li>
        );
        }
    );
    const events = props.events.map((event) => {
        return (
            <li key={event.key}><EventPost
                title={event.title}
                body={event.body}
                user={event.user}
                date={event.date}
                category={event.category}
                likes={event.likes}
                comments={event.comments}
            /></li>
        );
        }
    );
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <div className="mainSection">
                <ul className="postList">{posts}</ul>
                <ul className="eventList">{events}</ul>
            </div>
        </div>
    );
}

export default HomePageLayout;