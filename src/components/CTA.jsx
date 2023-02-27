import styles from '../styles'
import Button from './Button'

function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>
          Lets try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, soluta.
        </p>
      </div>
      <div className={`${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA