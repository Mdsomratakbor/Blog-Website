import React from 'react'
import Image from 'next/image'
export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image
        className='border-4 border-black rounded-full
         shadow-black mx-auto mt-8 drop-shadow-xl border-solid border-slate-500'
        src="/images/profile-pic.jpg"
         width={200} height={200}
          alt='Md Samrat Akbor'
          priority={true}></Image>
    </section>
  )
}
