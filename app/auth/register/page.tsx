import SignUpForm from '@/app/(components)/auth/signup';
import Head from 'next/head';


const SignUpPage = () => {
    return (
        <div>
            <Head>
                <title>Sign Up - Social Media App</title>
                <meta name="description" content="Sign up for the Social Media App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <SignUpForm />
            </main>
        </div>
    );
};

export default SignUpPage;
