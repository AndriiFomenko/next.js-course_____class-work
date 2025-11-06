import { ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
  stats: ReactNode
  tasks: ReactNode
  messages: ReactNode
  login: ReactNode
}

export default function DashboardLayout({ children, stats, tasks, messages, login }: DashboardLayoutProps) {
  const isLoggedIn = true
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="grid grid-cols-2 w-full gap-4">
        <div>{stats}</div>
        <div>{tasks}</div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-3">{messages}</div>
      </div>
    </>
  ) : (
    login
  )
}
