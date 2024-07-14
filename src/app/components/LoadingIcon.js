import Image from "next/image";
import styles from "./loadingIcon.module.css";

export default function LoadingIcon() {
    return(
     <div className={styles.loading}>
      <Image
      width={80}
      height={80}
      src="/bars-scale-middle.svg"
      alt="Imagem carregando" 
      />
     </div>
    );
}