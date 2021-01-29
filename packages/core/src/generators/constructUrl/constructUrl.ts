export default (base: string, parameters: { [key: string]: any }): string => {
  const qs = Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join('&');
  return base + qs;
};
