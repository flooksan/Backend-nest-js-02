import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './model/post.entity';
import { FeedController } from './controllers/feed.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity]) // insert entity from model
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
