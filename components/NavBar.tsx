import { Button } from "./Button";


interface NavBarProps {
  title?: string;
  dynamicBgColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({ title='Abstract', dynamicBgColor}) => {
  const navBarStyle =  { backgroundColor: dynamicBgColor }

  return (
    < >
      <nav className='fixed top-0 w-full z-10'>
        <div className={`text-white bg-black`}  style={navBarStyle}>
          <div className='flex items-center justify-between px-8 py-4'>
            <div className='flex'>
              <p>{title}|</p>
              <a>Help Center </a>
            </div>
            <div className=" hidden md:flex justify-between space-x-8">
             <Button label="Subscribe here"/>
             <Button label="Sing Up"/>
            </div>
          </div>
          <div className="md:hidden flex justify-end items-center fixed top-0 right-0">
            <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            </button>
          </div>
        </div>

        <div className='bg-[#dadbf1] p-4'>
          <div className='text-center'>
            <h2 className='text-2xl py-4'>How can I help you?</h2>
            <input type='search' placeholder='Search' className='border-none rounded-lg shadow-lg mr-5 px-4 py-2' />
            <Button label="Search"/>
          </div>
        </div>

      </nav>
    </>
  )
}

export default NavBar
