import { IsEmail, IsEnum, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Channels {
  @IsNotEmpty()
  email: boolean;

  @IsNotEmpty()
  sms: boolean;

  @IsNotEmpty()
  push: boolean;
}

export class CreatePreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Channels)
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: Channels;
  };

  @IsString()
  @IsEnum(['America/New_York', 'Europe/London', 'Asia/Kolkata'], { message: 'Invalid timezone' })
  timezone: string;
}