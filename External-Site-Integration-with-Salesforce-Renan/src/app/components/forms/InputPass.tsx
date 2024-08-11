"use client"
import styles from "./InputPass.module.css"

interface passTypess
{
   passTypes :
   {
     label : string
     changeEvent?: (e : React.ChangeEvent<HTMLInputElement>) => void;

   }
}

export default function InputPass({passTypes} : passTypess)
{
    return(
        <div>
            <input className={styles.input} onChange={passTypes.changeEvent} type="password" placeholder={passTypes.label}></input>
        </div>
    )
}