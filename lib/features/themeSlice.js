'use client';

import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'sonner';


const themes = {
	light: 'light',
	dark: 'dark',
};

const getThemeFromLS = () => {
	
		const theme = localStorage.getItem('theme') || themes.light;
		document.documentElement.setAttribute('theme', theme);
		return theme;
	
};

const initialState = {
	theme: getThemeFromLS(),
};

const themeSlice = createSlice({
	name: 'theme',
	initialState: initialState,
	reducers: {
		themeToggle: (state) => {
			const { light, dark } = themes;
			state.theme = state.theme === light ? dark : light;
			document.documentElement.setAttribute('data-theme', state.theme);
			localStorage.setItem('theme', state.theme);
			toast.success(`theme set to ${state.theme}`);
		},
	},
});

export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;
