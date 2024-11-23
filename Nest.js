import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true, match: /.+\@.+\..+/ }) // Email validation
  email: string;

  @Prop({
    required: true,
    type: {
      marketing: Boolean,
      newsletter: Boolean,
      updates: Boolean,
      frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'never'], default: 'weekly' },
      channels: {
        email: Boolean,
        sms: Boolean,
        push: Boolean,
      },
    },
  })
  preferences: Record<string, any>;

  @Prop({ required: true, match: /^[a-zA-Z/_]+$/ }) // Simple timezone validation
  timezone: string;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);