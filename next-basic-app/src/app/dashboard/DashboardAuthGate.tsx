'use client'

import Button from '@/components/Button'
import { ReactNode, useState } from 'react'

interface DashboardAuthGateProps {
  children: ReactNode
  stats: ReactNode
  tasks: ReactNode
  messages: ReactNode
  login: ReactNode
}

export default function DashboardAuthGate({ children, stats, tasks, messages, login }: DashboardAuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Auth status</p>
          <p className="text-lg font-bold text-slate-800">{isAuthenticated ? 'Authenticated' : 'Guest'}</p>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsAuthenticated(false)}
            disabled={!isAuthenticated}
            className={!isAuthenticated ? 'cursor-not-allowed opacity-60' : ''}
          >
            Sign out
          </Button>
          <Button
            type="button"
            onClick={() => setIsAuthenticated(true)}
            disabled={isAuthenticated}
            className={isAuthenticated ? 'cursor-not-allowed opacity-60' : ''}
          >
            Sign in
          </Button>
        </div>
      </div>

      {isAuthenticated ? (
        <div className="space-y-4">
          <div>{children}</div>
          <div className="grid w-full grid-cols-2 gap-4">
            <div>{stats}</div>
            <div>{tasks}</div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3">{messages}</div>
          </div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  )
}
