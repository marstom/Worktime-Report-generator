import styles from './calcLayout.module.scss'
import Head from 'next/head'
import { useEffect } from 'react'

export default function CalcLayout ({children}) {
    useEffect(() => {
        console.log("on load")

    }, [])

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