export const required = (value) => {
    if (value) return undefined

    return "Field must be not empty!"
}

export const maxLengthCreater = (maxLength) => (value) => {
    if (value.length > maxLength)
        return `Fields max length is ${maxLength}!`
    return undefined
}
