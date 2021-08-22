import {PostData} from "../model/table.js";
import Post from "../meta/Post.js";
import moment from "moment";

const postService = {
    getPost,
    setPost,
    updatePost
}

function getPost(postId){
    return PostData.find(post => post.id == postId);
}

function setPost(postText){
    let post;
    if(postText){
        post = new Post(postText);
        postData.push(post);
    }

    return getPost(post && post.id);
}

function updatePost(postId, text){
    const post = getPost(postId);
    post.text = text;
    post.updated = moment().format('YYYY-MM-DD h:ss:mm');
    PostData[post.id] = post;

    return getPost(postId);
}

export default postService;