import React from 'react'

const CTA = () => {
  return (
   <>
   <section class="py-24 px-4">
<div class="max-w-7xl mx-auto rounded-[2.5rem] bg-brand-primary p-12 md:p-24 relative overflow-hidden shadow-2xl">
<div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg class="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0 100 Q 25 0 50 100 T 100 0" fill="transparent" stroke="white" stroke-width="0.5"></path>
</svg>
</div>
<div class="relative z-10 text-center flex flex-col items-center gap-8">
<h2 class="text-4xl md:text-6xl font-black text-white leading-tight">Ready to architect <br/> your future?</h2>
<p class="text-white/80 text-lg md:text-xl font-medium max-w-2xl">Join over 2 million professionals who have accelerated their careers through JobPortal. Signing up takes less than 2 minutes.</p>
<div class="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
<button class="px-10 py-5 bg-white text-brand-primary rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">Create Candidate Profile</button>
<button class="px-10 py-5 bg-brand-gray-900 text-white rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">Join as Employer</button>
</div>
</div>
</div>
</section>
</>
  )
}

export default CTA