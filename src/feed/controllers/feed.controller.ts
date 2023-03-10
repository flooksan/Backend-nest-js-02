import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../model/post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  // @Post()
  // create(@Body() post: FeedPost): Observable<FeedPost> {
  //   return this.feedService.createPost(post);
  // }

  @Post() // ใช้แทน Observable ของ rxjs
  create(@Body() post: FeedPost): Promise<FeedPost> {
    const id = Math.round(Math.random()*999);
    return this.feedService.createPost({
      ...post,
      body: `Test save data to database ${id}`
    });
  }

  @Get()
  findAllPost() { // จริงๆต้อง return เป็น Promise<FeedPost[]> เป็น array
    return this.feedService.findAllPost();
  }

  @Get(':id')
  findOnePost(@Param('id') id:string) {
    return this.feedService.findOnePost(id);
  }

  @Delete(':id')
  deletePost(@Param('id') id:string) {
    return this.feedService.deletePost(id)
  }
}
