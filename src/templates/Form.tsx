import { Background } from '@/background/Background';
import { Section } from '@/layouts/Section';
import Image from 'next/image';
import Link from 'next/link';

const Form = () => (
  <Background color="bg-white">
    <Section yPadding="py-4">
      <div className='flex'>
        <div className='flex-1'>
          <div className='title'>
            Contact us.
          </div>
          <div className='text mt-6 break-normal'>
            We know that it sometimes can be hard to know where to start. Let’s chat and see if we can help you!
          </div>
        </div>
        <div className='flex-1 flex flex-col'>
          <input className='form' type="name" placeholder="Name" name="name" value="" />
          <input className='form mt-4' type="email" placeholder="Email" name="email" value="" />
          <textarea className='text-area' placeholder="Message" name="textarea"></textarea>
          <button className='button-form self-end' type="submit">Send</button>
        </div>
      </div>
    </Section>
  </Background>
);

export { Form };
