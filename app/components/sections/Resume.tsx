'use client'

import React from 'react'
import type { SectionProps } from '@/types/components'
import styles from './styles.module.css'

export default function Resume({ className = '' }: SectionProps) {
    return (
        <section className={`${styles.section} ${className}`} data-page="resume">
            <header className={styles.header}>
                <h2 className={styles.articleTitle}>Resume</h2>
            </header>
            {/* Resume content will come from config */}
        </section>
    )
} 