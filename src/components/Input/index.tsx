import { ChangeEvent, useState } from "react";
import { Input, Label } from "./styles";
import { applyMask } from "../../utils/format";

type IInput = {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  mask?:
    | "###.###.###-##"
    | "### #### #### ####"
    | "(##) #####-####"
    | "#####-###"
    | "##.###.###/####-##";
  maxLength?: number;
};

export const InputComponent = (props: IInput) => {
  const { label, placeholder, name, mask, onChange, maxLength } = props;
  const [valueInput, setValueInput] = useState("");

  const changed = (value: ChangeEvent<HTMLInputElement>) => {
    const inputValue = value.currentTarget.value;
    setValueInput(mask ? applyMask(inputValue, mask) : inputValue);

    if (onChange) {
      onChange(valueInput);
    }
  };

  return (
    <Label>
      {label}
      <Input
        name={name}
        placeholder={placeholder ?? label}
        onChange={changed}
        onBlur={changed}
        value={valueInput}
        maxLength={maxLength ?? 250}
      />
    </Label>
  );
};
