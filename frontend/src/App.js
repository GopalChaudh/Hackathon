import './App.css';
import HomePageLayout from './layouts/homePageLayout';

const posts = [
    {
        key: 1,
        title: "Post 1",
        body: "This is the body of post1",
        user: "User 1",
        date: "2021-01-01",
        category: "General",
        likes: 10,
        comments: 5
    },
    {
        key: 2,
        title: "Post 2",
        body: "This is the body of post2",
        user: "User 2",
        date: "2021-01-02",
        category: "General",
        likes: 20,
        comments: 10
    }
];

const events = [
    {
        key: 1,
        title: "Event 1",
        body: "This is the body of event1",
        org: "User 1",
        date: "2021-01-01",
        category: "General",
        location: "Location 1",
    },
    {
        key: 2,
        title: "Event 2",
        body: "This is the body of event2",
        org: "User 2",
        date: "2021-01-02",
        category: "General",
        location: "Location 2",
    }
];

function App() {
  return (
    <HomePageLayout posts={posts} events={events} />
  );
}

export default App;
