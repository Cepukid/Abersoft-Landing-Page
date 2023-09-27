import { Background } from '@/background/Background';
import { Section } from '@/layouts/Section';
import Image from 'next/image';

const Footer = () => (
  <Background color="bg-abersoftBlue">
    <Section>
      <div className='flex'>
        <div className='flex-1'>
          <ul className='space-y-3'>
            <li className='title-section-footer'>
              Our Services
            </li>
            <li className='text-section-footer'>
              App Development
            </li>
            <li className='text-section-footer'>
              Websites
            </li>
            <li className='text-section-footer'>
              UI/UX Design
            </li>
            <li className='text-section-footer'>
              Ongoing Consultation
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <ul className='space-y-3'>
            <li className='title-section-footer'>
              Documents
            </li>
            <li className='text-section-footer'>
              Terms & Conditions
            </li>
            <li className='text-section-footer'>
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <ul className='space-y-3'>
            <li className='title-section-footer'>
              Inhouse
            </li>
            <li className='text-section-footer'>
              Haunted House AR
            </li>
            <li className='text-section-footer'>
              Abersoft Blog
            </li>
            <li className='text-section-footer'>
              Work with us
            </li>
          </ul>
        </div>
        <div className='flex-2'>
          <ul className='space-y-3 flex-col flex items-end'>
            <li className='title-section-footer text-right'>
              Address
            </li>
            <li className='text-section-footer text-right'>
              Kometvägen 3
              <br/>183 33 TÄBY
              <br/>Stockholm, Sweden
            </li>
            <li className='text-section-footer text-right'>
              Kampung Yadika Regency
              <br/>Blok H Nomer 4
              <br/>Pasuruan, Indonesia
            </li>
            <li>
              <Image
                src="/logo.svg"
                width={150}
                height={40}
                alt="Logo Abersoft"
              />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
