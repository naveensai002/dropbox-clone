import Image from 'next/image';

import { FaArrowRightLong } from "react-icons/fa6";
import Link  from 'next/link';


export default function Home() {
	return (
		<header className='pt-8 flex flex-col items-center leading-8  bg-[#1f1819] text-[#f7f5f2] p-18 pb-12'>
			<div className='leading-8 w-3/4 justify-center flex items-center flex-col gap-y-4 '>
				<h1 className='tracking-widest text-3xl'>Welcome to the Dropbox</h1>
				<h2 className='text-2xl tracking-widest '>
					{' '}
					Securely collaborate on your content anywhere, anytime
				</h2>
				<p className='tracking-tight pb-12'>
					With Dropbox, you get a full suite of tools designed to help you
					create, share, manage, and track content <br />
					more efficiently. Plus, proven cloud storage you can trust.
				</p>
				
					<Link href='/dashboard' className='btn btn-lg btn-primary tracking-widest bg-[#3984ff] pt-6 pb-12'>
						Get started now
						<span>
							<FaArrowRightLong />
						</span>
					</Link>
				

				{/* video */}
				<video muted autoPlay loop className='rounded-lg'>
					<source
						src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
		</header>
	);
}
