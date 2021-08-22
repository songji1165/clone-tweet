import {PostData, TweetData, UserData} from "../model/table.js";
import Tweet from "../meta/Tweet.js";
import userService from '../service/userService.js';
import postService from '../service/postService.js';

const tweetService = {
    getAllTweets,
    getUserTweets,
    getTweet,
    setTweet
};

function getAllTweets(userId){
    const tweets = TweetData;
    let user = userId && userService.getUser(userId);

    return tweets.map(tweet => {
        return {...tweet, myPost: (user && (tweet.user == user))}
    });
}

function getUserTweets(user, myUserId){
    let result;
    const userInfo = userService.getUser(userId);

    if(userInfo){
        const myPost = myUserId && userId == myUserId;
        result = TweetData.filter(tweet => tweet.user == userInfo.id).map(tweet => ({ ...tweet , myPost }));
    }

    return result;
}

function getTweet(tweetId){
    return TweetData.map(tweet => tweet.id == tweetId);
}

function setTweet(userId, postId){
    let tweet;
    if(userId && postId){
        const user = userService.getUser(userId);
        if(user){
            tweet = new Tweet(userId, postId);
            TweetData.push(tweet);
        }
    }

    tweet = getTweet(tweet && tweet.id);
    return tweet && {...tweet, myPost: true};
}

function deleteTweet(tweetId){
    const tweet = getTweet(tweetId);
    const {id} = tweet;

    const updateTweetData = tweetData.filter(tweet => tweet.id != id);

    TweetData = updateTweetData;

    console.log("삭제 후 ", TweetData);

}


export default tweetService;