'use client'

import React from 'react'
import config from '@/config.json'
import type { SectionProps } from '@/types/components'
import styles from './styles.module.css'

export default function About({ className = '' }: SectionProps) {
    return (
        <section className={`${styles.section} ${className}`} data-page="about">
            <header className={styles.header}>
                <h2 className={styles.articleTitle}>{config.sections.about.title}</h2>
            </header>
            <p>{config.sections.about.description}</p>
        </section>
    )
} 