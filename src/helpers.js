import moment from 'moment';

//**FORMATS DATE FROM HTML FORMAT OF YYYY-MM-DD to DD/MM/YYYY **/
export const formatDate = date => moment(date).format('YYYY-MM-DD');