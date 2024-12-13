import React from 'react'

function Booking() {
  return (
    <div className="relative -top-[10vh] w-full bg-opacity-70" id='Booking'>
    <form className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 items-center p-4 md:p-6 rounded-lg shadow-lg bg-white">
      <div>
        <label className="block text-sm font-semibold">Check-in</label>
        <input
          type="date"
          className="w-full mt-1 p-2 rounded border-primary border focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Check-out</label>
        <input
          type="date"
          className="w-full mt-1 p-2 rounded border-primary border focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Rooms</label>
        <select
          className="w-full mt-1 p-2 rounded border-primary border focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <option>Select Rooms</option>
          <option>Cozy Haven Room</option>
          <option>Spacious Serenity Suite</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold">Guests</label>
        <select
          className="w-full mt-1 p-2 rounded border-primary border focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <option>1 Person</option>
          <option>2 People</option>
          <option>3+ People</option>
        </select>
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center items-end pt-5 ">
        <button
          type="submit"
          className="bg-primary border text-white font-semibold py-2 px-4 rounded-lg  hover:shadow-lg"
        >
          <a href="https://api.whatsapp.com/send?phone=919007062180">Book Now</a>
        </button>
      </div>
    </form>
  </div>
  )
}

export default Booking