import { createFileRoute } from '@tanstack/react-router'
import { SignUpForm }  from '../components/signup-form'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex items-center min-h-screen justify-center">
      <SignUpForm />
    </main>
  )
}
