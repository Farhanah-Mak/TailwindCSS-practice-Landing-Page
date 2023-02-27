import styles, { layout } from '../styles'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

function Testimonials() {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute w-[60%] h-[60%] -right-[50%] blue__gradient z-[0] rounded-full'/>
      <div className='w-full flex justify-between align-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What people are<br className='sm:block hidden' /> saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt harum porro eaque officia ducimus!</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-[full] feedback-container relative z-[1]'>
        {feedback.map((card, index) => (
          <FeedbackCard
            key={card.id}
            {...card}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials