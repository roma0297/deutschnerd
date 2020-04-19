import React from 'react'
import styles from './Episode.module.scss'

const Episode = props => {
    return (
        <div className={styles.Episode}>
            <h3>{props.title}</h3>
            <details>
                <summary>Description</summary>
                <p>{props.description}</p>
            </details>
        </div>
    )
}

export default Episode
