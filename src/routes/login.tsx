import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "../components/login-form"

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className='flex items-center justify-center min-h-screen'><LoginForm /></main>
  )
}
