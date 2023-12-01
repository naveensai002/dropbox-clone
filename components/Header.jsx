'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

import { themeToggle } from '../lib/features/themeSlice';
import { UserButton, SignedOut, SignInButton} from "@clerk/nextjs";

const Header = () => {
	const dispatch = useDispatch();

	const handleTheme = () => {
		dispatch(themeToggle());
	};

	return (
		<header className='flex sticky top-0 items-center justify-between gap-x-4'>
			<Link href='/' className='flex gap-x-4 items-center justify-between'>
				<div>
					<Image
						src='https://www.shareicon.net/data/128x128/2015/08/31/93614_dropbox_512x512.png'
						alt='logo'
						height={50}
						width={50}
					/>
				</div>
				<h1 className='tracking-widest text-3xl '>Dropbox</h1>
			</Link>

			<div>
				{/* theme toggle */}
				<div className='flex gap-x-4 mr-6'>
					<div>
						<label className='swap swap-rotate'>
							{/* this hidden checkbox controls the state */}
							<input type='checkbox' onChange={handleTheme} />
							<BsMoonFill className='swap-off h-6 w-6' />
							<BsSunFill className='swap-on h-6 w-6' />
						</label>
					</div>
					{/* user icon */}

					<UserButton afterSignOutUrl='/' />
					<SignedOut>
						<SignInButton afterSignInUrl='/dashboard' mode='modal' />
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
