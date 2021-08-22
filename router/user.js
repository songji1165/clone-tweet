import express from "express";
import tweetService from "../service/tweetService.js"
import postService from "../service/postService.js"

const router = express.Router();

router.put('/posts/:id',(req, res)=>{
    try{
        const {id, body: {content}} = req;
        if(!content) new Error('수정할 내용을 확인해 주세요.');

        const tweet = tweetService.getTweet(id);
        if(!tweet) new Error('수정할 트윗을 확인해주세요.');

        const updatePost = updatePost(tweet.post, content);
        if(updatePost) res.status(200).send('트윗의 내용이 수정되었습니다.');

    }catch (err){
        res.status(400).send(err)
    }
});

router.delete('/tweets/:id',(req, res)=>{
    try{
        const tweet = tweetService.getTweet(id);
        if(!tweet) new Error('삭제할 트윗을 확인해주세요.');

        req.status(204);

    }catch (err){
        res.status(400).send(err)

    }
})



export default router;