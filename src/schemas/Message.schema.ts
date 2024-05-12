import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  taskId: string;
  @Prop({ required: true })
  date: Date;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
