export const required = (value) => {
  if (value) return undefined;
  return "you should input something";
};
export const setMaxlength = (maxLength) => {
  return (value) => {
    if (value.length > maxLength)
      return `max length should be ${maxLength} symbols`;
    return undefined;
  };
};
