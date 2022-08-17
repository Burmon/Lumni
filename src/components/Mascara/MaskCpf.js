import React from "react";
import InputMask from "react-input-mask";
import styles from "./Mask.module.css";

const InputCpf = (props) => (
  <InputMask
    mask="999.999.999-99"
    placeholder="Seu CPF"
    className={styles.inputmask}
    value={props.value}
    onChange={props.onChange}
  />
);

export default InputCpf;
