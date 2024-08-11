import styles from "./InputSubmit.module.css";

interface Props {
  text?: string;
}
export default function InputSubmit({ text }: Props) {
  return (
    <>
      <input type="submit" value={text} className={styles.InputSubmit}></input>
    </>
  );
}