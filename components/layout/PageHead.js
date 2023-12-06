import Head from "next/head";

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "CPP Roofing - Roofing Services"}</title>
            </Head>
        </>
    );
};

export default PageHead;
