@Post('notifications/send')
async sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
  return this.notificationsService.sendNotification(sendNotificationDto);
}