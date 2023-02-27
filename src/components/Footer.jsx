import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mt-10'>
          <img
            src={logo}
            alt='hoobank'
            className='w-[266px] h-[72px] object-contain'
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum.</p>
        </div>
      </div>
      <div className='flex-[1.5] flex flex-row w-full justify-between flex-wrap'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col min-w-[150px] ss:my-0 my-4'>
            <h4 className='text-white font-poppins font-medium mb-4'>{footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins text-dimWhite font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length-1 ? 'mb-4' : 'mb-0'}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45] mt-6'>
        <p className={`font-poppins text-white font-normal text-[18px] leading-[27px] text-center`}>
          2022 HooBank. All rights reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain ${index != socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer