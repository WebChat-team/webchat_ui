// imports =================================================== //
import React from 'react';
import styles from './ui/index.module.css';
import type { Header } from './types/index.d.ts';
import Container from '@components/containers/Container';

// main ====================================================== //
const Header: Header = ({ before, after }) => {

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.header_contaier}>
                        <div>
                            {before}
                        </div>
                        <div>
                            {after}
                        </div>
                    </div>
                </Container>
            </header>
            <div className={styles.padding_header}></div>
        </>
    );

};

// exports ================================================== //
export default Header;