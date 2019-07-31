import React from 'react';
import { WhiteCard } from '../WhiteCard';
import { Content } from '../About/about';

export default function Legal() {
    return (
        <div style={styles.div}>
            <WhiteCard>
                <Content>
                    <h1 style={styles.h1}>Legal</h1>
                    <br/>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>These terms and conditions are divided into the following parts:</h3>
                    <ul style={styles.ul}>
                        <li>(A) a disclaimer of liability;</li>
                        <li>(B) terms and conditions governing the use of this website;</li>
                        <li>(C) a licence for our free legal documents;</li>
                        <li>(D) terms and conditions governing Lawlistic memberships;</li>
                        <li>(E) general and interpretive provisions.</li>
                    </ul>
                    <p style={styles.p}>By using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website. If you register with our website or buy any product or service from our website, we will ask you to expressly agree to these terms and conditions.</p>
                    <br/>
                    <p style={styles.p}>Our website uses cookies. By using our website and agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our privacy policy.</p>
                    <br/>

                    <p style={styles.p}>Much of the legal information on this website consists of summaries of complex legal issues. Legal and factual details and nuances are inevitably omitted from such summaries. Particular circumstances often radically affect the law that applies, and the way that the law applies.</p>
                    <br/>

                    <p style={styles.p}>You should therefore never apply the legal information to your own situation without conducting additional research or engaging a lawyer. Nor should you assume that all of the relevant legal material is included on our website.</p>
                    <br/>

                    <p style={styles.p}>The law changes constantly, and legal information is always liable to become out-of-date.</p>
                    <br/>

                    <p style={styles.p}>Most of the legal information on this website relates to the laws of England and Wales or the United Kingdom, or European Union law. However, this is not always the case. Do not assume that any particular item of legal information relates to any particular jurisdiction.</p>
                    <br/>

                </Content>
            </WhiteCard>
        </div>
    )
}

let styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        textIndent: '30px',
        fontSize: '16px',
    },
    h1: {
        display: 'flex',
        justifyContent: 'center',
    },
    ul: {
        textDecoration: 'none',
        margin: '20px',
        fontSize: '20px',
    }
}