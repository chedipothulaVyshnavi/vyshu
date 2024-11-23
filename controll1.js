@Post('preferences')
async createPreference(@Body() createPreferenceDto: CreatePreferenceDto) {
  return this.userPreferencesService.create(createPreferenceDto);
}