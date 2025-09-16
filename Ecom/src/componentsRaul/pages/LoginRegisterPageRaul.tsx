import { useState } from 'react';
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import LoginForm from '../ui/LoginForm';
import RegisterForm from '../ui/RegisterForm';

export default function LoginRegisterPageRaul() {
    const [view, setView] = useState<'login' | 'register'>('login');

    return (
        <div>
            <NavBar />
            <section className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center bg-gradient-to-br from-contrast-main via-contrast-secondary to-main h-[90vh] w-[35%] gap-4'>
                    {/*Botón de inicio de sesión */}
                    <button
                        className={`text-white font-semibold py-2 px-4 rounded-full transition ${view === 'login' ? 'bg-contrast-secondary' : 'bg-contrast-main text-contrast-secondary'}`}
                        onClick={() => setView('login')}>Iniciar sesión</button>
                    {/*Botón de registro */}
                    <button
                        className={`text-white font-semibold py-2 px-4 rounded-full transition ${view === 'register' ? 'bg-contrast-secondary' : 'bg-contrast-main text-contrast-secondary'}`}
                        onClick={() => setView('register')}
                    >Registrarse</button>
                </div>
                <div className='flex flex-col items-center justify-center h-[90vh] w-[65%]'>
                    {/* Este div lo que hace es cargar el formulario de inicio de sesión o de registro */}
                    {view === 'login' ? <LoginForm /> : <RegisterForm />}
                </div>
            </section>
            <Footer />
        </div>
    );
}
