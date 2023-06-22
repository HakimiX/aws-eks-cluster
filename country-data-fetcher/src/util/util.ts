export const consistsOfLetters = (str: string): boolean => {
    return /^[a-zA-Z]+$/.test(str);
}
