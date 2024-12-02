'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Image from 'next/image'


export default function Projects() {
    const [activeProject, setActiveProject] = useState('whizz')

    return (
        <Card className="bg-purple-100">
            <CardHeader>
                <CardTitle className="text-2xl">Featured Projects</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs value={activeProject} onValueChange={setActiveProject}>
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
                        <TabsTrigger
                            value="whizz"
                            className="px-4 py-2 text-center font-bold rounded-full transition-colors data-[state=active]:bg-purple-300 data-[state=active]:text-black bg-purple-100 text-gray-700 hover:bg-purple-200"
                        >
                            Whizz IDE
                        </TabsTrigger>
                        <TabsTrigger
                            value="interview"
                            className="px-4 py-2 text-center font-bold rounded-full transition-colors data-[state=active]:bg-purple-300 data-[state=active]:text-black bg-purple-100 text-gray-700 hover:bg-purple-200"
                        >
                            Interview Tracker
                        </TabsTrigger>
                        <TabsTrigger
                            value="payment"
                            className="px-4 py-2 text-center font-bold rounded-full transition-colors data-[state=active]:bg-purple-300 data-[state=active]:text-black bg-purple-100 text-gray-700 hover:bg-purple-200"
                        >
                            Payment System
                        </TabsTrigger>
                    </TabsList>

                    <div className="mt-16"> {/* Added margin-top to avoid overlap */}
                        <TabsContent value="whizz">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <h2 className="text-xl font-semibold mb-2">Whizz Smart IDE Assistant</h2>
                                    <h3 className="mb-2">
                                        AI-driven code co-pilot to assist developers during the software development process.
                                    </h3>
                                    <h4 className="text-xl font-semibold mb-2">Used technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Node.js", "React", "VSCode Extension", "Python"].map((tech) => (
                                            <Badge
                                                key={tech}
                                                className="bg-gray-800 text-white px-4 py-2 rounded-full"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <h4 className="text-xl font-semibold mb-2" >Features:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Explain large code base to decrease learning time for new developers</li>
                                        <li>Fix bugs and errors in place with one click</li>
                                        <li>Generate documentation automatically for your project in any format</li>
                                        <li>Generate unit tests for any functionality</li>
                                        <li>Switch code from one language to another</li>
                                        <li>AI assistant to chat with inside your IDE!</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <Image
                                        src="/whizz.jpeg?height=200&width=300"
                                        width={300}
                                        height={200}
                                        alt="Whizz IDE Assistant interface"
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="interview">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold mb-2">Interview Tracker</h3>
                                    <p className="mb-2">Interview tracking System to be used by Siemens managers and employees to automate and manage the hiring process.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <h4 className="text-xl font-semibold mb-2">Used technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Java Spring boot", "React", "PostgreSQL", "docker"].map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="bg-gray-800 text-white px-4 py-2 rounded-full"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-semibold mb-2" >My role :</h4>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Backend Lead</li>
                                        <li>Backend developer</li>
                                        <li>Front-end developer</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <Image
                                        src="/interviewtracker.jpeg?height=200&width=300"
                                        width={300}
                                        height={200}
                                        alt="Interview tracker dashboard"
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="payment">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold mb-2">Online Payment System</h3>
                                    <p className="mb-2">Software for online payment services including wallets and card payments.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <h4 className="text-xl font-semibold mb-2">Used technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Java Spring boot", "Java fx", "SQL"].map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="bg-gray-800 text-white px-4 py-2 rounded-full"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </CardContent>

        </Card>
    )
}