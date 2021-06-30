import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import React from "react";

import { INPUT_ALIGN_STYLES } from "../../constants";
import { ALIGN } from "../../constants/enums";
import styles from "./Button.module.scss";

type Props = {
  children: string;
  containerClassName?: string;
  href?: LinkProps["href"];
  as?: LinkProps["as"];
  replace?: boolean;
  align?: ALIGN;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
};

const Button = ({
  children,
  containerClassName,
  href,
  as,
  replace,
  align,
  disabled,
  onClick,
}: Props) => {
  const button = (
    <button
      className={styles.buttonContainer__button}
      disabled={disabled}
      aria-label={children}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const anchor = (
    <Link href={href || ""} as={as} replace={replace}>
      <a
        className={styles.buttonContainer__button}
        aria-label={children}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );

  return (
    <div
      className={classNames(styles.buttonContainer, containerClassName)}
      style={INPUT_ALIGN_STYLES[align || ALIGN.center]}
    >
      {href ? anchor : button}
    </div>
  );
};

export default Button;
