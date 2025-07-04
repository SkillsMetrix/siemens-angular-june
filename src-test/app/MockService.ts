import { of } from "rxjs";
import { Post } from "./PostService.service";

export class MockService{
    private mockPosts:Post[]=[
        {
            userId:1,
            id:1,
            title:'mock title',
            body: 'dummy data'
        },
         {
            userId:2,
            id:2,
            title:'mock title2',
            body: 'dummy data2'
        }
    ]
    getPosts(){
        return of(this.mockPosts)
    }
}