import ForgotPasswordForm from '@/app/(components)/ForgotPasswordForm';
import Head from 'next/head';

const ForgotPasswordPage = () => {
    return (
        <div>
            <Head>
                <title>Forgot Password - Social Media App</title>
                <meta name="description" content="Reset your password for the Social Media App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <ForgotPasswordForm />
            </main>
        </div>
    );
};

export default ForgotPasswordPage;
