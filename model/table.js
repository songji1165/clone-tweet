const UserData = [
    {id:0, userId: 'user1', name: '사용자1', img: ""},
    {id:1, userId: 'user2', name: '사용자2', img: ""},
    {id:2, userId: 'user3', name: '사용자3', img: ""},
];

const PostData = [
    {id:0, text: '텍스트 1번입니다...', created: '2021.07.01', updated: '2021.07.15'},
    {id:1, text: '텍스트 2번입니다...', created: '2021.07.10', updated: ''},
    {id:2, text: '텍스트 3번입니다...', created: '2021.07.20', updated: '2021.07.22'},
    {id:3, text: '텍스트 4번입니다...', created: '2021.07.25', updated: ''},
    {id:4, text: '텍스트 5번입니다...', created: '2021.07.25', updated: ''},
];
const TweetData = [
    {id:0, user: 0, post: 0},
    {id:1, user: 0, post: 1},
    {id:2, user: 1, post: 2},
    {id:3, user: 2, post: 3},
    {id:4, user: 2, post: 4},
];

export {TweetData, UserData, PostData};