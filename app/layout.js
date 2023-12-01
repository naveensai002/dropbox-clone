import { Inter } from 'next/font/google';
import './globals.css';
import Header from './../components/Header';

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

import Providers from '@/lib/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dropbox.com',
	description: 'Secure all files at one place',
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<Providers>
				<html lang='en' data-theme='cupcake'>
					<body className={inter.className}>
						<Toaster position='top-center' richColors />
						<Header />
						{children}
					</body>
				</html>
			</Providers>
		</ClerkProvider>
	);
}
