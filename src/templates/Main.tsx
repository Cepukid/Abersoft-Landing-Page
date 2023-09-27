import Link from 'next/link';
import type { ReactNode } from 'react';
import '@/styles/global.css';
import { Background } from '@/background/Background';
import { Section } from '@/layouts/Section';
import { Navbar } from '@/navigation/Navbar';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { Form } from './Form';
type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const listMenu = [
    {
       "text":"Home",
       "link":"/"
    },
    {
       "text":"Service",
       "link":"/service"
    },
    {
       "text":"About us",
       "link":"/about-us"
    },
    {
       "text":"References",
       "link":"/references"
    },
    {
       "text":"Contact",
       "link":"/contact"
    }
  ] 
  return(
    <div className="text-gray-600 antialiased">
      <header>
        {props.meta}
      </header>
      <div>
        <Background color="bg-white">
          <Section yPadding="py-8">
            <Navbar>
              {listMenu.map((item)=> 
                <li key={item.link} className={router.pathname === item.link ? 'button-home-selected' : 'button-home-deselected'}>
                  <Link href={item.link}>
                    {item.text}
                  </Link>
                </li>
              )}
            </Navbar>
          </Section>
        </Background>
        <main className="content py-5 text-xl">{props.children}</main>
        <Form/>
        <Footer/>
      </div>
    </div>
  )
};

export { Main };
