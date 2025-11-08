import { type ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="bg-amber-200 p-8">
      <h1 className="header-title-h3">With Auth Layout</h1>
      {children}
    </div>
  )
}

export default AuthLayout
