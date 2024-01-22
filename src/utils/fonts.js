import { Oswald, Poppins } from 'next/font/google';

export const oswaldFont = Oswald({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export const poppinsFont = Poppins({
	weight: ['500', '600'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});
