import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../model/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../model/post.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  //   createPost(feedPost: FeedPost): Observable<FeedPost> {
  //     return from(this.feedPostRepository.save(feedPost));
  //   }

  // use Async await and return promise แทนการใช้ method ของ rxjs
  async createPost(feedPost: FeedPost): Promise<FeedPost> {
    const savedPost = await this.feedPostRepository.save(feedPost);
    return savedPost;
  }

  async findAllPost() {
    // จริงๆต้อง return เป็น Promise<FeedPost[]> เป็น array
    return await this.feedPostRepository.find();
  }

  async findOnePost(id: string) {
    const numId = parseInt(id);
    return this.feedPostRepository.findOneBy({ id: numId });
  }

  async deletePost(id: string) {
    const postForDelete = await this.feedPostRepository.findOneBy({ id: parseInt(id) });
    return await this.feedPostRepository.remove(postForDelete); // need entity instance for delete
  }
}
