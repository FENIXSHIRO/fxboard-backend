import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ConnectionDocument = Connection & Document;

@Schema()
export class Connection {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  points: any[];

  @Prop({ required: true })
  stroke: string;

  @Prop({ required: false })
  fromId?: string;

  @Prop({ required: false })
  toId?: string;

  @Prop({ required: true })
  fromSide: string;

  @Prop({ required: true })
  toSide: string;
}

export const ConnectionSchema = SchemaFactory.createForClass(Connection);
