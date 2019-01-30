export const findByTestAttr = (wrapper, val, selector ='data-test') => {
  return wrapper.find(`[${selector}='${val}']`);
};
