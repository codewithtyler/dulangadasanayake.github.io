'use client'

import React from 'react'
import type { SectionProps } from '@/types/components'
import config from '@/config.json'
import styles from './styles.module.css'

export default function Portfolio({ className = '' }: SectionProps) {
    return (
        <section className={`${styles.section} ${className}`} data-page="portfolio">
            <header className={styles.header}>
                <h2 className={styles.articleTitle}>Portfolio</h2>
            </header>
            {/* Portfolio content from config */}
        </section>
    )
} 