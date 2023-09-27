import { Background } from '@/background/Background';
import { Meta } from '@/layouts/Meta';
import { Section } from '@/layouts/Section';
import { Main } from '@/templates/Main';
import Image from 'next/image';

export default function Home() {
  const listServices = [
    {
       "title":"App Development",
       "desc":"We help you build native and cross-platform apps. We have helped clients reach Top Grossing apps with over 400 million downloads world wide.",
       "img": '/app.png'
    },
    {
      "title":"Websites",
      "desc":"We work with all the most common websites systems such as Wordpress och WooCommerce. But we also build websites from scratch for you.",
      "img": '/web.png'
    },
    {
      "title":"MVP & Prototype",
      "desc":"If you have an MVP that you need help getting developed or an idea of a prototype, let us know and we will assist you with the whole process.",
      "img": '/mvp.png'
    },
    {
      "title":"UI/UX Design",
      "desc":"Besides development we also have a great team of UI/UX designers that will take your old design to a whole new level or create new one from scratch.",
      "img": '/desain.png'
    },
    {
      "title":"Consultant",
      "desc":"We can also provide you with an ongoing consultant that will be a great addition to your already established team.",
      "img": '/consultant.png'
    },
    {
      "title":"Software Systems",
      "desc":"We work with all kinds of software technologies such as Unity, Strapi & other useful integrations that will help you and your company.",
      "img": '/software.png'
    },
  ]
  return (
    <Main
      meta={
        <Meta
          title="Abersoft Technologies AB"
          description="Apputvecklare. IT konsulter - appar, hemsidor och mjukvaruutveckling"
        />
      }
    >
      <Background color="bg-white">
        <Section>
          <div className='flex items-center'>
            <div className='flex-1'>
              <div className='title'>
                We help you build the tech solutions of the future.
              </div>
              <div className='text mt-4 break-normal'>
                When you need help with development or design we are here to create the best solutions for you. With over a decade of experience in software development.
              </div>
            </div>
            <div className='flex-1'>
              <Image
                src="/iphone.png"
                width={800}
                height={800}
                alt="iphone Abersoft"
              />
            </div>
          </div>
        </Section>
      </Background>
      <Background color="bg-white">
        <Section>
          <div className="grid grid-cols-3 gap-4 gap-y-10 justify-between">
            {listServices.map((item)=>
              <div key={item.title}>
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={item.title}
                />
                <div className='title-section'>
                  {item.title}
                </div>
                <div className='text-section break-normal'>
                  {item.desc}
                </div>
              </div>
            )}
          </div>
        </Section>
      </Background>
    </Main>
  )
}
