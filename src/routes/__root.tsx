import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-2'>Nyaomaru</div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
