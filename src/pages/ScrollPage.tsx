import React, { useState, useEffect, useRef } from "react"

function ScrollPage() {
    const [isVisible, setIsVisible] = useState(false)
    const secondSectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 }
        );

        if (secondSectionRef.current) {
            observer.observe(secondSectionRef.current)
        }

        return () => {
            if (secondSectionRef.current) {
                observer.unobserve(secondSectionRef.current)
            }
        }
    }, [])

    return (
        <div className="min-h-screen">
            <section className="h-screen bg-gray-600 flex flex-col justify-center items-center text-white">
                <h1 className="text-5xl font-bold">Pagina Principal</h1>
                <p className="text-lg mt-4">Scroll de la pagina web</p>
            </section>

            <section
                ref={secondSectionRef}
                className={`h-screen bg-gray-100 flex flex-col justify-center items-center transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <h2 className="text-4xl font-bold text-black">Pagina tras Scrollear havia abajo</h2>
                <p className="text-lg mt-4 text-gray-700">
                    Este es el contenido despues de hacer Scroll
                </p>
            </section>
        </div>
    )
}

export default ScrollPage