import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactNode } from "react";

export const withAuth = (WrappedComponent: (props: any) => JSX.Element) => {
    return function Wrapper(props: any) {
        return <WrappedComponent {...props} />;
    };
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth/sign-in",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};
