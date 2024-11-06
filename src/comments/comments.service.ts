import { Injectable, HttpStatus, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import{Prisma, SiteComments} from '@prisma/client'

@Injectable()
export class CommentsService {
    constructor(private readonly prisma: PrismaService){}

    private logger = new Logger('Comments Service')


    async createComment(data: Prisma.SiteCommentsCreateInput): Promise<SiteComments>{
        this.logger.log('createComment')
            const createComment = await this.prisma.siteComments.create({
                data,
            })
            return createComment
    }

    async getAllComments(){
        this.logger.log('getAllComments');
            const comments = await this.prisma.siteComments.findMany();
            return comments
    }
}
