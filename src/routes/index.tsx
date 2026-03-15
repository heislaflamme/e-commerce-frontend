import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
   <>
   <main className='flex items-center justify-center min-h-screen'>
    <div className='flex justify-center gap-4'>
      <Link to='/signup' className='bg-black hover:bg-black/90 text-white py-2 px-4 rounded'>
        Sign Up
      </Link>
      <Link to='/login' className='bg-black hover:bg-black/90 text-white py-2 px-4 rounded'>
        Login
      </Link>
    </div>
   </main>
   </>
  )
}
