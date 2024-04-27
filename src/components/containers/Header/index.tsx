// imports =================================================== //
import React from 'react';
import styles from './ui/index.module.css';
import type { HeaderFC } from './types';
import Container from '../Container';

// main ====================================================== //
const Header: HeaderFC = ({
    before,
    after
}) => {

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.header_container}>
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