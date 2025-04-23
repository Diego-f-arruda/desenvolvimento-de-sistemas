import { PiArrowCircleDown, PiArrowCircleUp, PiCurrencyDollar } from 'react-icons/pi'
import styles from './styles.module.css'

export default function Summary(){

    const cards = [{

    }]

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <header>
                    <span>Entrada</span>
                    <PiArrowCircleUp size={32} color='#00b37e'/>
                </header>
                <strong>R$ 24.000,00</strong>
            </div>

            <div className={styles.card}>
                <header>
                    <span>Saida</span>
                    <PiArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>R$ 10.000,00</strong>
            </div>

            <div className={styles.cardTotal}>
                <header>
                    <span>Total</span>
                    <PiCurrencyDollar size={32} color='#ffffff'/>
                </header>
                <strong>R$ 14.000,00</strong>
            </div>
        </div>

    )
}