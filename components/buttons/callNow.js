import Link from 'next/link'
import React from 'react'

export default function CallNow({className}) {
    return (
        <Link title="Call Us Now" href="tel:+17797711143" className={`btn fs-19 rounded-1 ${className} `}>Call Now</Link>
    )
}
