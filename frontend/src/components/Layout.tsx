import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Toaster />
            <div className='min-h-[1000px] bg-[#efefef]'>
            
                <Outlet />

            </div>
        </div>
    )
}

export default Layout;