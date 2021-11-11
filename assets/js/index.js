import { getPosts } from "./get-posts.js";
import {post} from "./post.js";

if(document.querySelector('#singlePost')) {
    post();
}

if (document.querySelector('#blog')) {
    getPosts();
}