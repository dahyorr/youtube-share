export const validate = async (ValidationSchema, data) => {
    const values = await ValidationSchema.validate(data)
    return values
}
