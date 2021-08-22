import express from "express";
import tweetService from "../service/tweetService.js"
import postService from "../service/postService.js"
import userService from "../service/userService.js"
import {UserData} from "../model/table.js";

const router = express.Router();

// 전체 작성글 보기
router.get('/',async (req,res)=>{
    try{
        const userId = req.query.userId;
        const user = userService.getUser(userId);
        console.log(userId);
        let list;

        if(userId) { // 특정 사용자의 트윗

            list = tweetService.getUserTweets(userId);

        }else{ // 전체 사용자 트윗
            list = await tweetService.getAllTweets();
        }

        // TODO : list 클라이언트 형식으로 바꾸기
        res.status(200).send({list});
    } catch (err){

    }
});

router.get('/:userId', async (req, res)=>{
    try{
        const findUser = userService.getUser(req.userId);
        const list = tweetService.getUserTweets(findUser);
        if(findUser){
            res.status(200).send({list});
        }else{
            new Error('옳지 않은 사용자 id 입니다.')
        }
    }catch (err){
        res.status(400).send(err);
    }
});

router.post('/', (req, res)=>{
    try{
        const {userId} = req.query;
        const user = userService.getUser(userId);
        if(!user) new Error('로그인 후 이용가능합니다.');

        const {content} = req.body;
        if(!content) new Error('트윗의 내용을 확인해주세요.');

        const post = postService.setPost(content);
        const tweet = tweetService.setTweet(user.id, post.id);

        res.status(200).send('등록완료되었습니다.');
    }catch(err){
        res.status(400).send(err);
    }
})

export default router;