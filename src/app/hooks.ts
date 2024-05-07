import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
//para sincrnizar la data a traves de nuestros elementos
export const useAppDispatch = () => useDispatch<AppDispatch>();

// use app selector permite traer la lista de tareas
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
