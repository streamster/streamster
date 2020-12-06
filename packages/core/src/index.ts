export const validateKeys = (keys: string[], requiredKeys: string[]) => {
  const errorCount = requiredKeys.reduce((acc: string[], curr: string) => {
    if (!keys.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  if (errorCount.length > 0) {
    return {
      error: 'Missing required keys',
      message: `The following required keys were missing: ${errorCount.join(
        ', '
      )}`,
    };
  }
  return true;
};
