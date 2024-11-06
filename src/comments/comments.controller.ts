import { Controller, Body, Post, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { SiteComments as SiteCommentsModel } from '@prisma/client';
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService){}

    @Post()
    async sendComment(@Body() commentData: {comment: string;}): Promise<SiteCommentsModel>{
        return this.commentService.createComment(commentData)
    }

    @Get()
    async getComments(){
        return this.commentService.getAllComments()
    }
}
