'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from 'next/image'

export default function About() {
    return (
        <Card className="bg-pink-100">
            <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-2/3">
                        <p className="mb-4">
                            I&apos;m a dedicated software engineer with a passion for solving complex problems and creating innovative solutions. My experience spans competitive programming, academic excellence, and practical software development.
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Ranked 27th in ECPC qualifications with my team</li>
                            <li>Top 50 student with a GPA of 3.45 (Excellent)</li>
                            <li>100-day streak on LeetCode, demonstrating consistent skill improvement</li>
                            <li>Solved 500+ programming problems across various platforms</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/aboutme.jpeg?height=200&width=200"
                            width={300}
                            height={300}
                            alt="Habiba working on a project"
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}