import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

export const Bottom = () => {
  return (
    <div className='bottom'>
        <div className='icons'>
            <BsFacebook/>
            <AiFillGoogleCircle/>
            <AiFillTwitterCircle/>
        </div>
        <div>
        <small className='copyright'>©2020 PadPayment- 2020</small>
         </div>
    </div>
  )
}
