'use client';

import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import Extracurriculars from './Extracurriculars';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Awards from './Awards';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-8">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-1 space-y-8">
                    <div id="profile">
                        <Profile />

                    </div>

                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="education">
                        <Education />
                    </div>
                </div>

                {/* Middle and Right Columns */}
                <div className="md:col-span-2 space-y-8">

                    <div id="about">
                        {/* <Navbar /> */}
                        <About />
                    </div>



                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="experience">
                        <Experience />
                    </div>
                    <div id="problem solving" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Awards />
                    </div>
                    <div id="extracurriculars">
                        <Extracurriculars />
                    </div>
                </div>
            </div>
        </div>
    );
}
