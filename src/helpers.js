//**FORMATS DATE FROM HTML FORMAT OF YYYY-MM-DD to DD/MM/YYYY **/
export const formatDate = date => date.split('-').reverse().join('/');