import React from 'react'
import { FaGithub } from "react-icons/fa";


const Cards = () => {
  return (
    
<section>
    <div class="py-16 m-8 justify-items-center h-screen shadow-lg border border-gray-800 p-8 rounded-lg">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
            <div class="text-center">
                <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Projects</h2>
                <p class="mt-6 text-gray-700 dark:text-gray-300">Here are some of the projects that I've worked on.</p>
            </div>
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        

                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <h1 className='text-sky-400 mb-4 text-2xl'>Transactions Dashboard</h1>
                            <p class="text-gray-700 dark:text-gray-300"> Successfully implemented a dynamic and interactive dashboard
                                web application that allows users to analyze transaction data for
                                specific months.</p>
                        </div>

                        <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            
                            <a href="https://github.com/tarun0808/transaction_dashboard.git" class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                <span class="sr-only">Source Code</span>
                                <FaGithub />

                            </a>
                        </div>
                    </div>
                </div>
                <div href="#" class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        
                        <h1 className='text-sky-400 mb-4 text-2xl'>HireWire- a labor hiring website</h1>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300"> Labor hiring website designed to streamline the process of connecting employers with job seekers across various industries. </p>
                        </div>

                        <div class="flex gap-3 mt-6 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            
                            <a href="https://github.com/tarun0808/HireWire/tree/main/Hire-Wire/job-portal-website" class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                <span class="sr-only">Source Code</span>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        
                        <h1 className='text-sky-400 mb-4 text-2xl'>DailyBlogs</h1>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Dynamic online platform dedicated to facilitating the creation, sharing, and discovery of engaging blog content across diverse topics and interests.</p>
                        </div>
                        <div class="flex gap-3 mt-6 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            
                            <a href="https://github.com/tarun0808/DailyBlogs" class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                <span class="sr-only">Source Code</span>
<FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
  )
}

export default Cards