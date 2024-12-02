'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Briefcase, Award, GraduationCap } from 'lucide-react'
import Image from 'next/image'


export default function Extracurriculars() {
    return (
        <Card className="bg-teal-100">
            <CardHeader>
                <CardTitle className="text-2xl">Awards & Activities</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    <li className="flex flex-col items-center">

                        <span className="text-center font-bold text-lg flex items-center justify-center">
                            <Award className="mr-2" size={20} />
                            NASA Space Apps Hackathon - Mentorship & People&apos;s Choice Awards
                        </span>

                        <div className="flex flex-wrap w-full">
                            <p className="w-1/2 p-4">
                                My team and I participated in the NASA Space Apps Challenge, where we developed an educational gaming website designed to teach children about astronomy and raise awareness of astrological topics. Our project earned two prestigious awards: the Mentorship Award and the People&apos;s Choice Award.
                            </p>
                            <div className="w-1/2 flex justify-center p-4 group">
                                <Image
                                    src="/spaceapps.JPG"
                                    width={300}
                                    height={150}
                                    alt="ecpc team"
                                    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                                />
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-col items-center">
                        <span className="text-center font-bold text-lg flex items-center justify-center">
                            <Award className="mr-2" size={20} />Valeo Hackathon for women in tech
                        </span>
                        <div className="flex flex-wrap w-full">
                            <p className="w-1/2 p-4">
                                My team and I participated in VALEO&apos;s Women in Tech Hackathon, where we designed and implemented a solution to a real-world challenge faced by VALEO. Our approach combined design thinking, software engineering, and machine learning algorithms.
                            </p>
                            <div className="w-1/2 flex justify-center p-4 group">
                                <Image
                                    src="/valeo.JPG"
                                    width={300}
                                    height={150}
                                    alt="valeo team"
                                    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="w-full text-center font-bold text-lg mb-4" >Orange Digital Center SWE Hackathon</span>
                        <p className="w-1/2 p-4">
                            Developed a C++ game in 1 day and took 3rd rank!
                        </p>
                        <div className="flex flex-wrap w-full">
                            <div className=" flex justify-center p-4 group w-1/2">
                                <Image
                                    src="/odc.png"
                                    width={350}
                                    height={150}
                                    alt="odc certificate"
                                    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                                />
                            </div>
                            <div className="flex justify-center p-4 group w-1/2">
                                <video
                                    className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-125"
                                    width="300"
                                    height="150"
                                    controls
                                    muted
                                    loop
                                >
                                    <source src="/gamedemo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                    </li>
                    <li className="flex items-center">
                        <Briefcase className="mr-2" size={20} />
                        <span className=" text-center font-bold text-lg " >IEEE Cairo University - Course Instructor for Web Development</span>
                    </li>
                    <li className="flex items-center">
                        <GraduationCap className="mr-2" size={16} />
                        <span className=" text-center font-bold text-lg " >ICPC Community FCAI-CU Trainee</span>
                    </li>
                </ul>

            </CardContent>
        </Card>
    )
}