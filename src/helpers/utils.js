export const validate = async (ValidationSchema, data) => {
    const values = await ValidationSchema.validate(data)
    return values
}
export const capitalize = (word) =>{
    return word.split(' ').map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}