import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faEarthAmericas, faMoneyBillTrendUp, faPlaneDeparture, faTruckRampBox, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Membership = () => {
    return (
        <section className="py-[60px] md:py-[100px] bg-white">
            <div className="innerDiv mx-auto">
                <div className='flex flex-col lg:flex-row gap-16 lg:items-start'>
                    <div className=''>
                        <h2 className="text-[36px] font-semibold text-primary">AIB Membership</h2>
                        <p className='mt-7'>The Association of International Businessmen (AIB) is the leading organisation operating from Delhi and is reckoned as one of the most forward-looking chambers of the country. The AIB has been working pro-actively towards creating a conducive and sustainable environment to enable social, industrial and economic growth of the country through policy advocacy and has been contributing effectively towards facilitating business since 2021. The AIB has also been engaging in various initiatives in different parts of the country and abroad with a view to extend all possible services to our Members and Industry Players to enhance their competitiveness.
</p>
<p className="mt-3">The Association of International Businessmen headquartered in Delhi, over the last few years has truly emerged as a national Chamber of repute, with full-fledged offices in New Delhi, Mumbai, Hyderabad, Chennai, Pune, Bangalore, Kochi and Kolkata  functioning efficiently, and building meaningful synergies among Industry and Government by addressing strategic issues of national significance.</p>
                    </div>
                    <div className='shrink-0 w-full lg:max-w-[300px]'>
                        <div className='bg-[#f1f3f4] text-black py-8 px-4'>
                            <h3 className="text-[22px] text-primary font-[600] mb-4">Expert Committe</h3>
                            <p>Mr. Rajat Dalmia, Director, Quality Tea Plantation Pvt. Ltd.</p>
                        </div>
                        <div className='bg-[#f1f3f4] text-black py-8 px-4 mt-7'>
                            <h3 className="text-[22px] text-primary font-[600] mb-4">Contact us</h3>
                            <p>Rajarshi Ghosh</p>
                            <p>Email: rajarshi.ghosh@gmail.com</p>
                        </div>
                        <div className="bg-[#f1f3f4] py-8 px-4 mt-7">
                            <h3 className="text-[22px] font-[600] text-primary">Are you looking for?</h3>
                            <div className='mt-4 flex flex-wrap gap-6'>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ccf2ff] text-[#025f80]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faCalendarMinus} />
                                    <p className='text-sm max-w-[160px] text-center'>Current Events</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#EFE1D1] text-[#331D2C]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faUserSecret} />
                                    <p className='text-sm max-w-[160px] text-center'>Business Advice</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#e3e2ed] text-[#615AA7]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faEarthAmericas} />
                                    <p className='text-sm max-w-[160px] text-center'>International Busniess & Export Services</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#F9EDE5] text-[#FF6200]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faPlaneDeparture} />
                                    <p className='text-sm max-w-[160px] text-center'>International Events</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ddffcc] text-[#008000]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faTruckRampBox} />
                                    <p className='text-sm max-w-[160px] text-center'>Invest & Trade with India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Membership

