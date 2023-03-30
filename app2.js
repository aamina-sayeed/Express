import express from "express"
       // port no
//react-3000
//backend-5000

const port=5000
const app=express()

//middleware handles-req,res
//they have access to req.res and next fn like
//(req,res,next)=>{

//}

app.get("/home/aamina",(req,res)=>{
    // res.send("<h1>Hello World!</h1>")
    setTimeout(()=>{res.json(obj) },5000)
    console.log(req.url)
    console.log(req.method)
    console.log(req.params)
    console.group(req.headers)
    console.log(req.socket.remoteAddress)
    //no need to convert obj to string using stringify /parse etc like in nodejs
})

app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})
const obj={
    "login": "aamina-sayeed",
    "id": 85497394,
    "node_id": "MDQ6VXNlcjg1NDk3Mzk0",
    "avatar_url": "https://avatars.githubusercontent.com/u/85497394?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aamina-sayeed",
    "html_url": "https://github.com/aamina-sayeed",
    "followers_url": "https://api.github.com/users/aamina-sayeed/followers",
    "following_url": "https://api.github.com/users/aamina-sayeed/following{/other_user}",
    "gists_url": "https://api.github.com/users/aamina-sayeed/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aamina-sayeed/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aamina-sayeed/subscriptions",
    "organizations_url": "https://api.github.com/users/aamina-sayeed/orgs",
    "repos_url": "https://api.github.com/users/aamina-sayeed/repos",
    "events_url": "https://api.github.com/users/aamina-sayeed/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aamina-sayeed/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Aamina Sayeed",
    "company": null,
    "blog": "",
    "location": "Hyderabad,India",
    "email": null,
    "hireable": null,
    "bio": "Learning front-end development",
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 2,
    "followers": 2,
    "following": 0,
    "created_at": "2021-06-07T12:49:22Z",
    "updated_at": "2023-03-21T15:29:40Z"
    }
