import React, { useState, MouseEvent } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import PropTypes from 'prop-types'

const NavBar = () => {
  
  const [firstMenu, setFirstMenu] = useState<null | HTMLElement>(null)
  const [secondMenu, setSecondMenu] = useState<null | HTMLElement>(null)
  const [thirdMenu, setThirdMenu] = useState<null | HTMLElement>(null);
  const [fourthMenu, setFourthMenu] = useState<null | HTMLElement>(null)

  const openFirst = Boolean(firstMenu)
  const handleFirstClick = (event: MouseEvent<HTMLElement>) => setFirstMenu(event.currentTarget);
  const closeFirst = () => setFirstMenu(null)
  
  const openSecond = Boolean(secondMenu);
  const handleSecondClick = (event: MouseEvent<HTMLElement>) => setSecondMenu(event.currentTarget);
  const closeSecond = () => setSecondMenu(null);

  const openThird = Boolean(thirdMenu);
  const handleThirdClick = (event: MouseEvent<HTMLElement>) => setThirdMenu(event.currentTarget);
  const closeThird = () => setThirdMenu(null);

  const openFourth = Boolean(fourthMenu);
  const handleFourthMenu = (event: MouseEvent<HTMLElement>) => setFourthMenu(event.currentTarget);
  const closeFourth = () => setFourthMenu(null);

  return (
    <div className='hidden sm:flex justify-center 
        text-white text-xl space-x-1 font-medium pt-6
        lg:text-2xl
    '>
            <div>
                <button
                    id="basic-button"
                    className='uppercase text-blue px-8 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-slate-800 duration-300'
                >
                    <Link href='#/'>
                        Home
                    </Link>
                </button>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openFirst ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFirst ? 'true' : undefined}
                    onClick={handleFirstClick}
                    className='uppercase text-blue px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-slate-800 duration-300'
                >
                    About
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={firstMenu}
                    open={openFirst}
                    onClose={closeFirst}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFirst}>
                        <Link href='/about'>
                            About
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFirst}>
                        <Link href='/coaches'>
                            Coaching Staff
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openSecond ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSecond ? 'true' : undefined}
                    onClick={handleSecondClick}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-slate-800 duration-300
                    
                    '>
                    Teams
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={secondMenu}
                    open={openSecond}
                    onClose={closeSecond}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeSecond}>
                        <Link href='/teams'>
                            Overview of Teams
                        </Link>
                    </MenuItem>
                    {/* <MenuItem onClick={closeSecond}>
                        <Link href='/doom-squad'>
                            Doom Squad
                        </Link>
                    </MenuItem> */}
                    {/* <MenuItem onClick={closeSecond}>
                        <Link href='/diva-squad'>
                            Diva Squad
                        </Link>
                    </MenuItem> */}
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openThird ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openThird ? 'true' : undefined}
                    onClick={handleThirdClick}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-slate-800 duration-300'
                >
                    Events
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={thirdMenu}
                    open={openThird}
                    onClose={closeThird}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeThird}>
                        <Link href='/events'>
                            Calendar
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeThird}>
                        <Link href='/upcoming_events'>
                            Upcoming Events
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openFourth ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFourth ? 'true' : undefined}
                    onClick={handleFourthMenu}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-slate-800 duration-300'
                >
                    Contact
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={fourthMenu}
                    open={openFourth}
                    onClose={closeFourth}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFourth}>
                        <Link href='/contactus'>
                            Contact us
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFourth}>
                        <Link href='/get_involved'>
                            Get Involved
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
  )
}

NavBar.propTypes = {}

export default NavBar