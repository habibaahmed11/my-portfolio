'use client'

import React from 'react'
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
    return (
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

    )
}
