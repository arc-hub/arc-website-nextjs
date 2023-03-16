export const titleCase = (str: string): string => {
  if (str === undefined || !str) {
    return str
  }

  const words = str?.split(' ')

  const result = words.map((word) => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  })

  return result.join(' ')
}
