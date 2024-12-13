import React from 'react'

function SendMessage() {
  return (
    <div className='setContainer'>
        <h2 className='capitalize text-center p-4 font-semibold text-2xl text-primary'>Send your message</h2>
        <form className='px-2 flex flex-col justify-center items-center'>
            <div className='flex flex-col sm:flex-row gap-2 p-2 w-[65%]'>
                <input className='formInputElement' type="text" name="fname" id="fname" placeholder='First Name' required />
                <input className='formInputElement' type="text" name="lname" id="lname" placeholder='Last Name' required />
            </div>
            <div className='flex flex-col sm:flex-row gap-2 p-2 w-[65%]'>
                <input className='formInputElement' type="email" name="email" id="email" placeholder='Email' />
                <input className='formInputElement' type="text" name="mobno" id="mobno" placeholder='Phone Number' maxLength={10} />
            </div>
            <div className='flex justify-start p-2 w-[65%]'>
                <textarea className='formInputElement w-full' name="msg" id="msg" placeholder='Write your message here' rows={4} />
            </div>
            <div className='pt-10'>
                <button className='uppercase px-6 py-4 text-white bg-primary rounded-lg w-[10rem]'>Send Now</button>
            </div>
            
        </form>
    </div>
  )
}

export default SendMessage