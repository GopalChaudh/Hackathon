
# EventHub

Welcome to our open-source web platform for community event organization! This platform provides a space for organizations to start events, seek donations and volunteers, and engage with users interested in community initiatives. Users can create both organization and volunteer accounts, host events, join events, and interact with the community through posts, likes, and comments.

## Features

- **Organization Accounts:** Organizations can create accounts to start events, seek donations, and recruit volunteers.

- **Volunteer Accounts:** Users can create volunteer accounts to participate in events, donate, and offer their time for community causes.

- **Event Hosting:** Organizations can host events, specifying details such as location, time, and nature of the event.

- **Donations:** Users can make donations to support organizations' initiatives, contributing to community welfare.

- **Volunteer Recruitment:** Organizations can attract volunteers for their events, fostering community engagement.

- **Rankings:** Users and organizations will be ranked based on various metrics such as hours volunteered, number of events hosted, donations made/generated, and number of volunteers gained.

- **Community Interaction:** Users can post updates, engage with posts through likes and comments, fostering a sense of community.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git
```

2. Navigate to the project directory:

```bash
cd project-directory
```

3. Install dependencies:

```bash
npm install
```

4. Set up the database according to the provided schema.

5. Configure environment variables for database connection, API keys, etc.

6. Start the server:

```bash
npm start
```

7. Access the platform through your web browser at `http://localhost:3000`.

_________________


## Database Schema

This repository contains the schema definitions for a community website, including schemas for users, organizations, posts, and events.

### Root Schema (Global Schema)

#### Description:
The root schema serves as the backbone for the entire community website, connecting users, organizations, posts, and events.

#### JSON Format:
```json
{
  "users": [],
  "organizations": [],
  "events": [],
  "posts": []
}
```


### User Schema
#### Description:
The user schema represents a user profile on the community website.

#### JSON Format:
```json
{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "password": "string",
  "name": "string",
  "bio": "string",
  "profilePic": "string",
  "socialMediaLinks": {
    "facebook": "string",
    "twitter": "string",
    "instagram": "string",
    "linkedin": "string"
  },
  "dateJoined": "Date",
  "posts": ["ObjectId"],
  "organizations": ["ObjectId"],
  "eventsParticipated": ["ObjectId"],
  "followers": ["ObjectId"],
  "following": ["ObjectId"],
  "volunteerRating": "number",
  "totalFollowers": "number",
  "totalFollowing": "number"
}
```
### Organization Schema
#### Description:
The organization schema represents an organization on the community website.

#### JSON Format:
```json
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "admins": ["ObjectId"],
  "members": ["ObjectId"],
  "events": ["ObjectId"],
  "posts": ["ObjectId"],
  "creationDate": "Date",
  "socialMediaLinks": {
    "facebook": "string",
    "twitter": "string",
    "instagram": "string",
    "linkedin": "string"
  },
  "contactInformation": {
    "email": "string",
    "phone": "string"
  },
  "logo": "string",
  "coverPhoto": "string",
  "moderators": ["ObjectId"],
  "chatChannels": ["string"],
  "tags": ["string"],
  "applicationList": ["ObjectId"],
  "founder": "ObjectId"
}
```
### Post Schema
#### Description:
The post schema represents a post made by users on the community website.

#### JSON Format:
```json
{
  "_id": "ObjectId",
  "content": "string",
  "authorId": "ObjectId",
  "dateTime": "Date",
  "likes": "number",
  "comments": [
    {
      "commentId": "ObjectId",
      "content": "string",
      "authorId": "ObjectId",
      "dateTime": "Date",
      "likes": "number"
    }
  ],
  "attachments": ["string"],
  "location": {
    "latitude": "number",
    "longitude": "number"
  },
  "reactions": {
    "like": "number",
    "love": "number",
    "laugh": "number"
  },
  "reports": "number"
}
```


## Contributing

We welcome contributions from the community to enhance this platform. Here's how you can contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

Please ensure your code adheres to our coding standards and practices.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For any queries or issues, please contact [support@example.com](mailto:support@example.com).

## Acknowledgments

We would like to thank all contributors and users who have helped improve and use this platform to serve community causes.

___



**Note:** This README provides basic setup instructions. For detailed documentation, refer to the project's documentation directory or online documentation.