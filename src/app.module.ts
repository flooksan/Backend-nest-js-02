import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSGRES_PORT),
      username: process.env.POSGRES_USERNAME,
      password: process.env.POSGRES_PASSWORD,
      database: process.env.POSGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // only develope not in production
    }),
    FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
