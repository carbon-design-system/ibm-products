import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { CommonHeader } from '../Example/CommonHeader'
import { ThemeDropdown } from '../ThemeSelector/ThemeDropdown'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className="example">
      <CommonHeader className="header-area" />
      <div className="content-area">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
      <ThemeDropdown />
    </div>
    </>
  ),
})