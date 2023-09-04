import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faEarthAmericas, faMoneyBillTrendUp, faPlaneDeparture, faTruckRampBox, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const MembershipCharges = () => {
    return (
        <section className="py-[60px] md:py-[100px] bg-white">
            <div className="innerDiv mx-auto">
                <div className='flex flex-col lg:flex-row gap-16 lg:items-start'>
                    <div className="w-full">
                        <h2 className='text-[36px] font-semibold text-primary'>Membership Charges</h2>
                        <h3 className="font-[500] text-[18px] mb-10">The Annual Subscription payable by each member shall be at the following rates: </h3>
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full">
                                <div className="overflow-hidden">
                                    <table className="min-w-full border text-sm text-center">
                                        <thead className="border-b font-medium ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-4 "
                                                >
                                                    Types Of Membership
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-4 text-center "
                                                >
                                                    Fee for One Year
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-4 text-center "
                                                >
                                                    Fee for Five Year
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b ">
                                                <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                    Indian
                                                </td>
                                                <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                    Rs. 20,000
                                                </td>
                                                <td className="whitespace-nowrap text-center border-r px-6 py-4 ">
                                                    Rs. 80,000
                                                </td>
                                            </tr>
                                            <tr className="border-b ">
                                                <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                    Overseas
                                                </td>
                                                <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                    USD 300
                                                </td>
                                                <td className="whitespace-nowrap text-center border-r px-6 py-4 ">
                                                    USD 1,200
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shrink-0 w-full lg:max-w-[300px]'>
                        {/* <div className='bg-[#f1f3f4] text-black py-8 px-4'>
                            <h3 className="text-[22px] text-primary font-[600] mb-4">Contact us</h3>
                            <p>Rajarshi Ghosh</p>
                            <p>Email: rajarshi.ghosh@gmail.com</p>
                        </div> */}
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

export default MembershipCharges;

