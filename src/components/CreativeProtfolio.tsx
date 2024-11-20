'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ScrollArea } from "../components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Briefcase, Award, GraduationCap, Github, Linkedin, Mail, Phone, Globe, Book } from 'lucide-react'
import Image from 'next/image'

export default function CreativePortfolio() {
    const [activeProject, setActiveProject] = useState('whizz')


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-1 space-y-8">
                    {/* Profile Section */}
                    <Card className="bg-blue-100 overflow-hidden">
                        <CardHeader className="relative h-48">
                            <Image
                                src="/cover.jpeg?height=200&width=400"
                                layout="fill"
                                objectFit="cover"
                                alt="Background"
                            />
                            {/* Increase the size of the Avatar */}
                            <Avatar className="w-32 h-32 border-4 border-white absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                <AvatarImage src="/personalpic.jpeg?height=100&width=100" alt="Habiba Ahmed" />
                                <AvatarFallback>HA</AvatarFallback>
                            </Avatar>
                        </CardHeader>
                        <CardContent className="pt-16 text-center">
                            <h1 className="text-3xl font-bold mb-2">Habiba Ahmed</h1>
                            <p className="text-xl mb-4">Software Engineer </p>
                            <div className="flex justify-center space-x-4">
                                <a href="https://github.com/habibaahmed11" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon" className="w-12 h-12 border-2">
                                        <Github className="h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="https://www.linkedin.com/in/habiba-ahmed-1738ab219/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon" className="w-12 h-12 border-2">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="mailto:habibaahmed3372@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon" className="w-12 h-12 border-2">
                                        <Mail className="h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="tel:+201018357556" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon" className="w-12 h-12 border-2">
                                        <Phone className="h-5 w-5" />
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Skills Section */}
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

                    {/* Education Section */}
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
                    <Card className="bg-teal-100">
                        <CardHeader>
                            <CardTitle className="text-2xl">Awards & Activities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Award className="mr-2" size={16} />
                                    <span>NASA Space Apps Hackathon - Mentorship & People's Choice Awards</span>
                                </li>
                                <li className="flex items-center">
                                    <Award className="mr-2" size={16} />
                                    <span>Valeo Hackathon for women in tech</span>
                                </li>
                                <li className="flex items-center">
                                    <Briefcase className="mr-2" size={16} />
                                    <span>IEEE Cairo University - Course Instructor for Web Development</span>
                                </li>
                                <li className="flex items-center">
                                    <GraduationCap className="mr-2" size={16} />
                                    <span>ICPC Community FCAI-CU Trainee</span>
                                </li>
                            </ul>
                            {/* <div className="mt-4">
                                <Image
                                    src="/nasa.jpg"
                                    width={100}
                                    height={100}
                                    alt="Habiba receiving an award"
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                            </div> */}
                        </CardContent>
                    </Card>
                </div>

                {/* Middle and Right Columns */}
                <div className="md:col-span-2 space-y-8">
                    {/* About Section */}
                    <Card className="bg-pink-100">
                        <CardHeader>
                            <CardTitle className="text-2xl">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-2/3">
                                    <p className="mb-4">
                                        I'm a dedicated software engineer with a passion for solving complex problems and creating innovative solutions. My experience spans competitive programming, academic excellence, and practical software development.
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

                    {/* Projects Section */}
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
                    <Card className="bg-orange-100">
                        <CardHeader>
                            <CardTitle className="text-2xl">Work Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px] pr-4">
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
                            </ScrollArea>
                        </CardContent>
                    </Card>
                    {/* Experience and Awards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Awards Section */}

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
                                        width={600}
                                        height={300}
                                        alt="ecpc team"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}