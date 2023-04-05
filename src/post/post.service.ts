import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getAllPosts() {
    return { message: `get all post` };
  }

  async getPostById(id: string, name: string) {
    return { message: `el id del post es: ${id} y mi nombre es ${name}` };
  }

  createPost(): string {
    return 'createPost';
  }
}
