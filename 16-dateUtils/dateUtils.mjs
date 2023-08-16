import moment from './moment.js';

// Функция для форматирования даты
export function formatDate(date, format) {
    return moment(date).format(format);
}

// Функция для добавления времени к дате
export function addTimeToDate(date, amount, unit) {
  return moment(date).add(amount, unit);
}

// Функция для вычисления разницы между двумя датами
export function diffDates(date1, date2, unit) {
  return moment(date1).diff(date2, unit);
}