import AspectRatioSharpIcon from '@mui/icons-material/AspectRatioSharp';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='flex justify-between p-3 border-b items-center' >
            <div className='flex ml-20' >
                <AspectRatioSharpIcon />
                <h2>ResizeHub</h2>
            </div>
            <div className='mr-20'>
                <Link to="/auth" >
                    <button className='mr-5 hover:bg-gray-100 p-2 rounded-md px-6' >Login</button>
                </Link>
                <Link to="/auth" >
                    <button className='bg-black text-white p-2 rounded-md px-6' >Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar