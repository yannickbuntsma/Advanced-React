import React from 'react'
import Link from 'next/link'

const MyComponent = () => {
  return (
    <div>
      <Link href="/">
        <a>To Home</a>
      </Link>
      <Link href="/sell">
        <a>To sell</a>
      </Link>
    </div>
  )
}

export default MyComponent
