import React from 'react'
import Link from 'next/link'
import { NavStyled } from './styled'

const Nav = () => {
  return (
    <NavStyled>
      <Link href="/items">
        <a>Items</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/sign-up">
        <a>Sign Up</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </NavStyled>
  )
}

export default Nav
