'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { ScrollArea } from "./ui/scroll-area"

export default function Experience() {
    return (
        <Card className="bg-orange-100">
            <CardHeader>
                <CardTitle className="text-2xl">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="font-semibold">Giza Systems — Software Engineering intern</h3>
                            <p className="text-sm">Sep 2024 - Present</p>
                            <p>Fullstack software engineering intern.</p>

                        </li>
                        <li>
                            <h3 className="font-semibold">Siemens EDA — Software Engineering Diploma</h3>
                            <p className="text-sm">Aug 2024 - Present</p>
                            <p>Ongoing advanced software engineering training and projects.</p>
                            <p>Gained valuable experience in designing and implementing software solutions, focusing on efficient, high-quality code.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">First Gulf Solutions — Software Development Intern</h3>
                            <p className="text-sm">Aug 2023 - Jan 2024</p>
                            <p>Worked on automation systems using Python and AARI, improving operational efficiency.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">ElSewedy Electric — Software Engineering Internship</h3>
                            <p className="text-sm">Aug 2022 - Sep 2022</p>
                            <p>Developed backend software using .NET and C#, applying design patterns and SOLID principles.</p>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}