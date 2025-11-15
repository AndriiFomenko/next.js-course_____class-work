import { ReactNode } from 'react'
import DashboardAuthGate from './DashboardAuthGate'

interface DashboardLayoutProps {
  children: ReactNode
  stats: ReactNode
  tasks: ReactNode
  messages: ReactNode
  login: ReactNode
}

export default function DashboardLayout({ children, stats, tasks, messages, login }: DashboardLayoutProps) {
  return (
    <DashboardAuthGate
      {...{ children, stats, tasks, messages, login }}
    />
  )
}
