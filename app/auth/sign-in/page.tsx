import LoginForm from '@/app/(components)/LoginForm';
import Head from 'next/head';

const LoginPage = () => {
    return (
        <div>
            <Head>
                <title>Login - Social Media App</title>
                <meta name="description" content="Log in to the Social Media App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <LoginForm />
            </main>
        </div>
    );
};

export default LoginPage;
