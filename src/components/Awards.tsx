'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from 'next/image'

export default function Awards() {
    return (
        <Card className="bg-blue-100 col-span-full">
            <CardHeader>
                <CardTitle className="text-2xl">Problem Solving Achievements</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/leetcode100.gif?height=200&width=200"
                            width={200}
                            height={200}
                            alt="100 Day LeetCode Streak"
                            className="rounded-lg object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">100 Day LeetCode Streak</h3>
                        <p className="text-center">Consistent daily problem-solving on LeetCode for 100 consecutive days.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/codeforces.png"
                            width={400}
                            height={500}
                            alt="500+ Problems Solved"
                            className="rounded-lg object-cover mb-4"
                        />
                        <br></br>
                        <h3 className="text-xl font-semibold mb-2">500+ Problems Solved</h3>
                        <p className="text-center">Successfully solved over 500 coding problems across various platforms.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/meecpc.jpg?height=200&width=200"
                            width={200}
                            height={200}
                            alt="ECPC Participation"
                            className="rounded-lg object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">ECPC Participation</h3>
                        <p className="text-center">Participated in the Egyptian Collegiate Programming Contest, ranking 27th with my team.</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <Image
                        src="/ecpc.JPG"
                        width={400}
                        height={200}
                        alt="ecpc team"
                        className="rounded-lg object-cover"
                    />
                </div>
            </CardContent>
        </Card>
    )
}