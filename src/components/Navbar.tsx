'use client';

import React from 'react';

export default function Navbar() {
    const navigateToSection = (sectionId: string) => {
        // Scroll to the section
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without using `useRouter`
        window.history.pushState(null, '', `#${sectionId}`);
    };

    return (
        <nav className="bg-white shadow-md p-4 z-10 mx-auto max-w-7xl">
            {/* This ensures that Navbar width matches the Profile */}
            <div className="flex justify-around">
                {[
                    'skills',
                    'education',
                    'projects',
                    'experience',
                    'problem solving',
                    'extracurriculars',
                ].map((section) => (
                    <button
                        key={section}
                        onClick={() => navigateToSection(section)}
                        className="text-gray-800 hover:text-blue-500 transition px-2"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>
        </nav>
    );
}
