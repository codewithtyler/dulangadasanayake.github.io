'use client'

import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import type { TransitionStatus } from 'react-transition-group'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Resume from './components/sections/Resume'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import './styles.css'

const TIMEOUT = 300

interface SectionProps {
    className: string;
}

export default function Home() {
    const [activeSection, setActiveSection] = useState('about')

    return (
        <main>
            <Sidebar />

            <div className="main-content">
                <Transition in={activeSection === 'about'} timeout={TIMEOUT}>
                    {(state: TransitionStatus) => <About className={`section ${state}`} />}
                </Transition>
                <Transition in={activeSection === 'resume'} timeout={TIMEOUT}>
                    {(state: TransitionStatus) => <Resume className={`section ${state}`} />}
                </Transition>
                <Transition in={activeSection === 'portfolio'} timeout={TIMEOUT}>
                    {(state: TransitionStatus) => <Portfolio className={`section ${state}`} />}
                </Transition>
                <Transition in={activeSection === 'contact'} timeout={TIMEOUT}>
                    {(state: TransitionStatus) => <Contact className={`section ${state}`} />}
                </Transition>
            </div>

            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
        </main>
    )
} 