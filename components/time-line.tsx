"use client";

import { dataAboutPage } from "@/data";
const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto md:pb-20 md:pt-10">
                <div className="-my-4">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-4 pl-6 sm:pl-24 group">
                            <h3 className="mb-1 text-xl font-bold sm:mb-0">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-16 h-5 mb-2 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{data.date}</time>
                                <div className="text-lg font-bold text-green-400">{data.subtitle}</div>
                            </div>
                            <div className="text-sm text-slate-200">{data.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;