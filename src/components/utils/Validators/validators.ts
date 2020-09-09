export const required = (value: string) => {
    if (value) return undefined

    return "Field must be not empty!"
}

export const maxLengthCreater = (maxLength: number) => (value: string) => {
    if (value.length > maxLength)
        return `Fields max length is ${maxLength}!`
    return undefined
}
