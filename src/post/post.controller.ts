import { User } from 'src/decorator/user.decorator';
import { CreatePost } from './dto/post.dto';
import { PostService } from './post.service';
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts(@User() user) {
    console.log('user', user);
    return this.postService.getAllPosts();
  }

  @Get(':id/:name')
  getPostById(@Param('id') id: string, @Param('name') name: string) {
    return this.postService.getPostById(id, name);
  }

  @HttpCode(201)
  @Post()
  createPost(@Body() data: CreatePost) {
    console.log(data);
    return this.postService.createPost();
  }
}
