async create(createPreferenceDto: CreatePreferenceDto) {
  const createdPreference = new this.userPreferenceModel(createPreferenceDto);
  return createdPreference.save();
}