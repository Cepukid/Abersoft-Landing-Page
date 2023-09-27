import { Background } from '@/background/Background';
import { Meta } from '@/layouts/Meta';
import { Section } from '@/layouts/Section';
import { Main } from '@/templates/Main';
import Image from 'next/image';

export default function Home() {
  const listServices = [
    {
       "title":"App Development",
       "subtitle": "With over 10 years of experience of creating apps on both Android and iOS we can create the perfect app for you.",
       "desc":"We have built app portfolios with over 400 million downloads world wide ranging from AR Games to complicated business apps. We always strive to build apps with the latest technology and that will be easy for our clients to manage and handle in the future. We use frameworks such as React Native and Flutter to create amazing cross platform applications.",
    },
    {
      "title":"Websites",
      "subtitle": "Having a professional website can sometimes be the difference between getting a new client or not.",
      "desc":"With long experience of creating websites both from scratch and using many frameworks such as Wordpress, WooCommerce and other platforms we can create the perfect website for you. We always try making the website as smooth and fast as possible with the right SEO to help you get found online.",
    },
    {
      "title":"UI/UX Design",
      "subtitle": "If your tech is like the brain, design is like the heart. In order to get clients to fall in love with your product you need to have great design in place.",
      "desc":"We know design can be tricky so we are here to assist you creating beautiful UI/UX Design following the latest trends and designs. We always use industry standard softwares such as Figma, Adobe and Photoshop.",
    },
    {
      "title":"Consultants",
      "subtitle": "For already established companies we offer ongoing consultants at unbeatable prices.",
      "desc":"Sometimes you do not need or want to employ a full time worker because it is more flexible with an ongoing consultant. We can offer a wide variety of services ranging from really cost effective remote consultants with Swedish project management to on site Swedish developers.",
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
                We make your ideas become reality.
              </div>
              <div className='text mt-4 break-normal'>
                Whether or not you are an established company or a new start up, we will create the solution you need.
              </div>
            </div>
            <div className='flex-1'>
              <Image
                src="/jelly_bear.png"
                width={500}
                height={500}
                alt="jelly bear Abersoft"
              />
            </div>
          </div>
        </Section>
      </Background>
      <Background color="bg-white">
        <Section>
          <div className="grid grid-cols-2 gap-16 gap-y-24 justify-between">
            {listServices.map((item)=>
              <div key={item.title}>
                <div className='title-section'>
                  {item.title}
                </div>
                <div className='subtitle-section break-normal mt-6'>
                  {item.subtitle}
                </div>
                <div className='text-section break-normal  mt-6'>
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
