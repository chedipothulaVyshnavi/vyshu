async sendNotification(dto: SendNotificationDto) {
  const user = await this.userPreferenceModel.findOne({ userId: dto.userId });
  if (!user || !user.preferences[dto.type] || !user.preferences.channels[dto.channel]) {
    throw new BadRequestException('Notification type or channel not enabled.');
  }

  const log = new this.notificationLogModel({
    userId: dto.userId,
    type: dto.type,
    channel: dto.channel,
    status: 'sent',
    sentAt: new Date(),
    metadata: dto.content,
  });

  return log.save();
}