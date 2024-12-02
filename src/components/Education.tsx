'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Globe, Book } from 'lucide-react'
import Image from 'next/image'

export default function Education() {
    return (
        <Card className="bg-yellow-100">
            <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
                <h3 className="font-semibold">Faculty of Computers and Artificial Intelligence, Cairo University</h3>
                <p>Bachelor of Computer Science</p>
                <p>GPA: 3.48 - Excellent (Top 50 student)</p>
                <p>2020 - 2024</p>
                <div className="flex flex-col items-center">
                    <Image
                        src="/graduation.jpg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Graduation"
                        className="rounded-lg object-cover mb-4"
                    />

                </div>
                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Achievements</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <Book className="mr-2" size={16} />
                            <span>100-day LeetCode Streak</span>
                        </li>
                        <li className="flex items-center">
                            <Globe className="mr-2" size={16} />
                            <span>445-day Duolingo German Streak</span>
                        </li>
                    </ul>
                </div>

            </CardContent>
        </Card>
    )
}