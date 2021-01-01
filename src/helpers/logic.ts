export const handleClick = (button: string, result: string): string => {
  switch (button) {
    case "=":
      return calculate(result);
    case "C":
      return reset();
    case "CE":
      return backspace(result);
    default:
      return result + button;
  }
}

export const calculate = (result: string): string => {
  let checkResult = '';

  if (result.includes('--')) {
    checkResult = result.replace('--', '+');
  } else {
    checkResult = result;
  }

  try {
    return eval(checkResult) + "";
  } catch (e) {
    return "error";
  }
};

export const reset = () => "";

export const backspace = (result: string): string => result.slice(0, -1);
