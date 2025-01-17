export const cpfMask = "###.###.###-##";

export const cnsMask = "### #### #### ####";

export const phoneMask = "(##) #####-####";

export const cepMask = "#####-###";

export const cnpjMask = "##.###.###/####-##";

export const applyMask = (value: string, mask: string): string => {
  if (!value) {
    return "";
  }
  const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "");

  let maskPointer = 0;
  let valuePointer = 0;
  let maskedValue = [];

  while (maskPointer < mask.length && valuePointer < cleanValue.length) {
    if (mask[maskPointer] === "#") {
      maskedValue.push(cleanValue[valuePointer]);
      valuePointer++;
    } else {
      maskedValue.push(mask[maskPointer]);
    }
    maskPointer++;
  }
  value = maskedValue.join("");

  return value;
};

export const getNumbersFromString = (value: string) => {
  const numbers = value.replace(/[^0-9]/g, "");
  return numbers;
};
