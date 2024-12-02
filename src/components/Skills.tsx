'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export default function Skills() {
    return (
        <Card className="bg-green-50">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Frameworks & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React Js', 'Spring Boot', 'Node.js', 'Git'].map((tool) => (
                                <Badge key={tool} variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">{tool}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Key Competencies</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Data Structures & Algorithms</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Problem Solving</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Software Design</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">SOLID Priciples</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Design patterns</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Version control systems</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Soft Skilss</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">TeamWork</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Leadership</Badge>
                            <Badge variant="outline" className="bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-1">Eager to learn</Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}