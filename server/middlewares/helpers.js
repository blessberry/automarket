
const isEmpty = (value, key) => (!value ? `${key} is empty` : false);
const isNotString = (value, key) => (value.match(/[^a-z]/i) ? `${key} has invalid characters` : false);
const isLong = (value, key, length) => (value.length > length ? `${key} exceeds the maximum length of ${length}` : false);


export const isInvalid = (value, key, length) => (
  !!(isEmpty(value, key) || isNotString(value, key) || isLong(value, key, length))
);

export const error = (res, statusCode, message) => res.status(statusCode).json({ status: 'error', message });
