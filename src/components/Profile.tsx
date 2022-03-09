import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gabrielwin2908.png" alt="Gabriel Andrade" />
            <div>
                <strong>Gabriel Andrade</strong>
                <p>
                    <img src="icons/level.png" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}