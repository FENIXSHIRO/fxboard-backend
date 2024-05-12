import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Connection } from './connection.schema';
import { Frame } from './Frame.schema';
import { Item } from './item.schema';
import { User } from './user.schema';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Item' }], required: false })
  items: Item[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Connection' }],
    required: false,
  })
  connections: Connection[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Frame' }], required: false })
  frames: Frame[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: User;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
