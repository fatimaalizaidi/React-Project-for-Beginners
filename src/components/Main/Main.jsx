import React from 'react';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.content}>
                    <h1 className='mt-5'>AIR JORDAN</h1>
                    <h3>Air Jordan Legacy 312 Low</h3>

                    <h2>$140</h2>

                    <h4>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
                </div>
            </div>

            <div className="col-lg-6">
                <div className={styles.shoes}>
                <img src="https://i.pinimg.com/originals/84/2c/2b/842c2b1c8fb08a239dc0298badcf3910.png" alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main