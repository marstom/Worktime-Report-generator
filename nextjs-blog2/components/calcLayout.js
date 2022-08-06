import styles from './calcLayout.module.scss'
import Head from 'next/head'

export default function CalcLayout ({children}) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/calc.ico" />
                <title>Hours calculator</title>
            </Head>

            <main>{children}</main>
        </div>
    )
}