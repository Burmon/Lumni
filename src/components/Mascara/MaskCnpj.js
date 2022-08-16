import React from "react";
import InputMask from "react-input-mask";
import styles from "./Mask.module.css"
const InputCnpj = (props) => (
  <InputMask mask="99.999.999/9999-99" className={styles.inputmask}  placeholder="CNPJ da empresa" value={props.value} onChange={props.onChange} />
);

export default InputCnpj;