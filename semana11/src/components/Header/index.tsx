'use client'
import Image from 'next/image'
import styles from './styles.module.css'
import logo from '@/assets/logo.svg'
import ModalNewTransection from '../ModalNewTransection'
import { useState } from 'react'

export default function Header(){
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleClose(){
        setOpenModal(false)
    }

    function handleOpen(){
        setOpenModal(true)
    }

    return(
        <div className={styles.container}>
            <ModalNewTransection open={openModal} handleClose={handleClose}/>
            <div className={styles.content}>
                <Image src={logo} alt='Logo'/>
                
                <button className={styles.newTransaction} onClick={handleOpen}>
                    Nova Transação
                </button>
            </div>
        </div>
    )
}