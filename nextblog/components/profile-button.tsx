import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function ProfileButton() {
  // user is NOT connected => button login
  // user is connected => avatar + menu
  return (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  )
}
