import {TweetData} from "../model/table.js";

class Tweet {
    id;
    user;
    post;
    myPost;

    constructor(userId, postId) {
        this.id = TweetData.length;
        this.user = userId;
        this.post = postId;
    }
}

export default Tweet;