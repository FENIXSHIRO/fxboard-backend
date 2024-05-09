import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from 'src/schemas/Board.schema';
import { Item, ItemSchema } from 'src/schemas/Item.schema';
import { User, UserSchema } from 'src/schemas/User.schema';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Board.name, schema: BoardSchema },
      { name: Item.name, schema: ItemSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
