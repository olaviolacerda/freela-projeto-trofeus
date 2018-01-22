export const capitalize = (str) => `${str.charAt(0).toUpperCase()+str.slice(1)}`; 

export const background = (image) => `url(${image})`;

export const clearFields = (matches) => matches.forEach(match => { match.value = ''});