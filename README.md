TODO : Tweets API 만들기, Tweets react Client 만들기

Tweets API

1. 전체 작성글 보기
2. 나의 작성글 보기
3. 수정
4. 삭제
5. user의 작성글 보기
6. 글 작성하기

** 게시글 : 글 , 작성자 정보(아이디, 사진), 작성일자 및 시간
tweet schema : {
user: {id, name, img},
post: {id, text, created, updated},
myPost
}

GET
req
res

1. GET /tweets
   req
   - user token
   res 200
   - list [ tweet, tweet, ... ]

2. GET /tweets/:userId
   req
   - user token
   res 200
   - list [ tweet, tweet, ... ]

3. PUT /users/tweets/:id
   (PUT /users/tweets/:id)
   req
   - user token
   - body {content}
   res 200
   - { tweet }

4. DELETE /users/tweets/:id
   req
   - user token
   res 204
   - message : 삭제 완료

5. GET /tweets?userId=:userId (/users/:id/posts)
   req
   - user token
   res 200
   - list [ tweet, tweet, ... ]

6. POST /tweets
   req
   - user token
   - body {content}
   res 200
   - {
   user: {
   id: string,
   img: string
   },
   post: {
   content: string,
   created: string,
   updated: string
   }
   myPost: boolean
   }