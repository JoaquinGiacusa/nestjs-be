import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthenticationMiddleware } from '../middleware/authentication.middleware';

@Module({
  controllers: [PostController],
  providers: [PostService],
})
// export class PostModule {}
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('post');
  }
}
