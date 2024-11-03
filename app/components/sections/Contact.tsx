'use client'

import React from 'react'
import type { SectionProps } from '@/types/components'
import config from '@/config.json'
import styles from './styles.module.css'

export default function Contact({ className = '' }: SectionProps) {
    return (
        <section className={`${styles.section} ${className}`} data-page="contact">
            <header className={styles.header}>
                <h2 className={styles.articleTitle}>Contact</h2>
            </header>
            <div className={styles.contactInfo}>
                <p>Email: {config.personal.email}</p>
                <p>Phone: {config.personal.phone}</p>
                <p>Location: {config.personal.location}</p>
            </div>
        </section>
    )
} 