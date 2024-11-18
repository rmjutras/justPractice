import {LikeComponent} from "./like.component"

function main() {
    let likes = new LikeComponent(3);
    likes.click();
    console.log(`${likes.liked ? 'Liked' : 'Not Liked'} (${likes.numLikes} total likes)`)

    likes.click();
    console.log(`${likes.liked ? 'Liked' : 'Not Liked'} (${likes.numLikes} total likes)`)
}

main()