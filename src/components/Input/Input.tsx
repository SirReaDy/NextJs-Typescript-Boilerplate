import classNames from "classnames";
import React, { ChangeEvent, useState } from "react";

import { INPUT_ALIGN_STYLES } from "../../constants";
import { ALIGN } from "../../constants/enums";
import { isGenericInputValidated } from "../../utils/common";
import styles from "./Input.module.scss";

type Props = {
  className?: string;
  value?: string;
  customPlaceholder?: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  max?: number;
  min?: number;
  align?: ALIGN;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const Input = ({
  className,
  value: customValue,
  placeholder,
  customPlaceholder,
  type,
  min,
  max,
  maxLength,
  align,
  disabled,
  onChange,
}: Props) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const placeholderStyle = showPlaceholder
    ? {}
    : {
        opacity: 0,
      };
  const alignStyle = INPUT_ALIGN_STYLES[align || ALIGN.center];

  const inputElement = React.createRef<HTMLInputElement>();

  const handleFocus = () => setShowPlaceholder(false);
  const handleBlur = () =>
    inputElement.current && inputElement.current.value
      ? null
      : setShowPlaceholder(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const setValue = (val: string) => {
      if (value !== undefined) {
        setInputValue(val);
      }
      return onChange && onChange(val);
    };

    if (!value.length) {
      return setValue("");
    }

    if (isGenericInputValidated(type || "text", value, maxLength || 999)) {
      return setValue(value);
    }
  };

  const element = (
    <input
      className={classNames(styles.inputContainer__input, className)}
      placeholder={placeholder}
      style={alignStyle}
      ref={inputElement}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={customValue || inputValue}
      disabled={disabled}
      type={type || "text"}
      min={min}
      max={max}
    />
  );

  return customPlaceholder ? (
    <div className={styles.inputContainer} style={alignStyle}>
      {element}
      <div
        className={styles.inputContainer__placeholder}
        style={placeholderStyle}
      >
        {customPlaceholder}
      </div>
    </div>
  ) : (
    element
  );
};

export default Input;
