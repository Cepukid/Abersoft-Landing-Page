import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon.svg`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href={`${router.basePath}/favicon.svg`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href={`${router.basePath}/favicon.svg`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.svg`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
      />
    </>
  );
};

export { Meta };
