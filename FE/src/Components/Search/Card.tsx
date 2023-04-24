import React from "react"
import style from "./Card.module.css"

export default function Card(){
  return (
    <div className={style.card2}>
      <div className={style.background2}/>
      <div className={style.content2}>
        <div className={style.title}>
          IT 플랫폼 사용 실태 조사
        </div>
        <div className={style.subtitle}>
          <img src="./public/icons/house.svg" alt='house' className='mr-5'/>
          <div className={style.subtitle_writer}>
            기관명
          </div>
        </div>
        <div className="flex items-start">
          <div className={style.subtitle}>
            <img src="./public/icons/clock.svg" alt='clock' className='mr-5'/>
            <div className={style.subtitle_date}>
              <div>
                2023.04.10 - 2023.04.13
              </div>
            </div>
          </div>

        </div>
        <div className={style.coin}>
          <div className={style.coin_content}>
            <img src="./public/icons/coin_color.svg" alt='coin' className='-ml-8'/>
            <div className='ml-5'>100</div>
          </div>
        </div>
      </div>
    </div>
  )
}