import { authClient } from '#/lib/auth-client'
import { authMiddleware } from '#/lib/middleware/middleware.server'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware]
  }
})

function RouteComponent() {

  const { data: session } = authClient.useSession()
  const navigate = useNavigate();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: '/'});
        }
      }
    });
  }

  return (
    <>
    <main className="flex items-center justify-center min-h-screen">
      <div>
      <h1>{`Hi ${session?.user?.name || ""}!`}</h1>
      <p>Welcome to your dashboard!</p>
      {
        session && 
        <button onClick={logout} className='bg-black rounded text-white py-2 px-4'>Logout</button>
      }
      </div>
    </main>
    </>
  )
}
