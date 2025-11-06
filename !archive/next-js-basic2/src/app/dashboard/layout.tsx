import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
  stats: ReactNode
  tasks: ReactNode
  messages: ReactNode
  login: ReactNode
}

export default function DashboardLayout({ children, stats, tasks, messages, login }: DashboardLayoutProps) {
  const isAuthenticated = true

  return isAuthenticated ? (
    <>
      <div>{children}</div>
      <div className="grid grid-cols-2 w-full gap-4">
        <div>{stats}</div>
        <div>{tasks}</div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-3">{messages}</div>
      </div>
    </>
  ) : (
    <div>{login}</div>
  )
}
