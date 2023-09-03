'use client'
import React, { useState } from 'react'

const MembershipForm = () => {
    const [companyName, setCompanyName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [pincode, setPincode] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [country, setCountry] = useState<string>('')
    const [telephone, setTelephone] = useState<string>('')
    const [fax, setFax] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [website, setWebsite] = useState<string>('')
    const [contactPersonTitle, setContactPersonTitle] = useState<string>('')
    const [contactPersonName, setContactPersonName] = useState<string>('')
    const [contactPersonSurname, setContactPersonSurname] = useState<string>('')
    const [contactPersonDesignation, setContactPersonDesignation] = useState<string>('')
    const [contactPersonMobile, setContactPersonMobile] = useState<string>('')
    const [contactPersonPhone, setContactPersonPhone] = useState<string>('')
    const [contactPersonEmail, setContactPersonEmail] = useState<string>('')
    const [executive1Title, setExecutive1Title] = useState<string>('')
    const [executive1Name, setExecutive1Name] = useState<string>('')
    const [executive1Surname, setExecutive1Surname] = useState<string>('')
    const [executive1Designation, setExecutive1Designation] = useState<string>('')
    const [executive2Title, setExecutive2Title] = useState<string>('')
    const [executive2Name, setExecutive2Name] = useState<string>('')
    const [executive2Surname, setExecutive2Surname] = useState<string>('')
    const [executive2Designation, setExecutive2Designation] = useState<string>('')
    const [companyType, setCompanyType] = useState<string>('')
    const [foundationYear, setFoundationYear] = useState<string>('')
    const [totalEmployees, setTotalEmployees] = useState<string>('')
    const [turnover, setTurnover] = useState<string>('')
    const [businessDesc, setBusinessDesc] = useState<string>('')
    const [businessInterests, setBusinessInterests] = useState<string>('')
    const [referralName, setReferralName] = useState<string>('')
    const [referralContact, setReferralContact] = useState<string>('')
    const [services, setServices] = useState<string>('')
    const [membershipType, setMembershipType] = useState<string>('')
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setLoading(true);
        console.log('Sending')
        let data = {
            companyName,
            address,
            city,
            pincode,
            state,
            country,
            telephone,
            fax,
            email,
            website,
            contactPersonTitle,
            contactPersonName,
            contactPersonSurname,
            contactPersonDesignation,
            contactPersonMobile,
            contactPersonPhone,
            contactPersonEmail,
            executive1Title,
            executive1Name,
            executive1Surname,
            executive1Designation,
            executive2Title,
            executive2Name,
            executive2Surname,
            executive2Designation,
            companyType,
            foundationYear,
            totalEmployees,
            turnover,
            businessDesc,
            businessInterests,
            referralName,
            referralContact,
            services,
            membershipType
        }
        fetch('/api/membership', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                setLoading(false);
                console.log('Response succeeded!')
                setCompanyName('')
                setAddress('')
                setCity('')
                setPincode('')
                setState('')
                setCountry('')
                setTelephone('')
                setFax('')
                setEmail('')
                setWebsite('')
                setContactPersonTitle('')
                setContactPersonName('')
                setContactPersonSurname('')
                setContactPersonDesignation('')
                setContactPersonMobile('')
                setContactPersonPhone('')
                setContactPersonEmail('')
                setExecutive1Title('')
                setExecutive1Name('')
                setExecutive1Surname('')
                setExecutive1Designation('')
                setExecutive2Title('')
                setExecutive2Name('')
                setExecutive2Surname('')
                setExecutive2Designation('')
                setCompanyType('')
                setFoundationYear('')
                setTotalEmployees('')
                setTurnover('')
                setBusinessDesc('')
                setBusinessInterests('')
                setReferralName('')
                setReferralContact('')
                setServices('')
                setMembershipType('')
            }
        })
    }

    return (
        <div className=''>
            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Membership Application Form</h3>
            {/* <p className='text-[#444444] text-lg font-medium mb-5'>Looking forward to hear from you!</p> */}
            <form>
                <div className='space-y-3 mt-10'>
                    <div className="bg-primary py-3 px-4 text-white">General Details</div>
                    <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Company/Applicant Name'
                            type='text'
                            id='companyName'
                            name='companyName'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Address'
                            type='text'
                            id='address'
                            name='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='City'
                            type='text'
                            name='city'
                            id='city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Pincode'
                            type='text'
                            name='pincode'
                            id='pincode'
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='State'
                            type='text'
                            name='state'
                            id='state'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Country'
                            type='text'
                            name='country'
                            id='country'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Telephone'
                            type='text'
                            id='telephone'
                            name='telephone'
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Fax'
                            type='text'
                            name='fax'
                            id='fax'
                            value={fax}
                            onChange={(e) => setFax(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Email'
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Website'
                            type='text'
                            name='website'
                            id='website'
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                </div>
                <div className='space-y-3 mt-10'>
                    <div className="bg-primary py-3 px-4 text-white">Contact Person</div>
                    <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Title'
                            type='text'
                            id='contactPersonTitle'
                            name='contactPersonTitle'
                            value={contactPersonTitle}
                            onChange={(e) => setContactPersonTitle(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Name'
                            type='text'
                            id='contactPersonName'
                            name='contactPersonName'
                            value={contactPersonName}
                            onChange={(e) => setContactPersonName(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Surname'
                            type='text'
                            id='contactPersonSurname'
                            name='contactPersonSurname'
                            value={contactPersonSurname}
                            onChange={(e) => setContactPersonSurname(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Designation'
                            type='text'
                            name='contactPersonDesignation'
                            id='contactPersonDesignation'
                            value={contactPersonDesignation}
                            onChange={(e) => setContactPersonDesignation(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Mobile'
                            type='text'
                            name='contactPersonMobile'
                            id='contactPersonMobile'
                            value={contactPersonMobile}
                            onChange={(e) => setContactPersonMobile(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Direct Phone'
                            type='text'
                            id='contactPersonPhone'
                            name='contactPersonPhone'
                            value={contactPersonPhone}
                            onChange={(e) => setContactPersonPhone(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Personal Email'
                            type='text'
                            name='contactPersonEmail'
                            id='contactPersonEmail'
                            value={contactPersonEmail}
                            onChange={(e) => setContactPersonEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='space-y-3 mt-10'>
                    <div className="bg-primary py-3 px-4 text-white">Name of the two top additional executives</div>
                    <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Title'
                            type='text'
                            id='executive1Title'
                            name='executive1Title'
                            value={executive1Title}
                            onChange={(e) => setExecutive1Title(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Name'
                            type='text'
                            id='executive1Name'
                            name='executive1Name'
                            value={executive1Name}
                            onChange={(e) => setExecutive1Name(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Surname'
                            type='text'
                            id='executive1Surname'
                            name='executive1Surname'
                            value={executive1Surname}
                            onChange={(e) => setExecutive1Surname(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Designation'
                            type='text'
                            name='executive1Designation'
                            id='executive1Designation'
                            value={executive1Designation}
                            onChange={(e) => setExecutive1Designation(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Title'
                            type='text'
                            id='executive2Title'
                            name='executive2Title'
                            value={executive2Title}
                            onChange={(e) => setExecutive2Title(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Name'
                            type='text'
                            id='executive2Name'
                            name='executive2Name'
                            value={executive2Name}
                            onChange={(e) => setExecutive2Name(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Surname'
                            type='text'
                            id='executive2Surname'
                            name='executive2Surname'
                            value={executive2Surname}
                            onChange={(e) => setExecutive2Surname(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Designation'
                            type='text'
                            name='executive2Designation'
                            id='executive2Designation'
                            value={executive2Designation}
                            onChange={(e) => setExecutive2Designation(e.target.value)}
                        />
                    </div>
                </div>
                <div className='space-y-3 mt-10'>
                    <div className="bg-primary py-3 px-4 text-white">Additional Information</div>
                    <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Company Type (Ltd, Pvt, etc)'
                            type='text'
                            id='companyType'
                            name='companyType'
                            value={companyType}
                            onChange={(e) => setCompanyType(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Year of Foundation'
                            type='text'
                            id='foundationYear'
                            name='foundationYear'
                            value={foundationYear}
                            onChange={(e) => setFoundationYear(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='No of Employees'
                            type='text'
                            id='totalEmployees'
                            name='totalEmployees'
                            value={totalEmployees}
                            onChange={(e) => setTotalEmployees(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Turnover (latest FY)-Rs. (Optional)'
                            type='text'
                            name='turnover'
                            id='turnover'
                            value={turnover}
                            onChange={(e) => setTurnover(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <textarea
                            rows={7}
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                            id='businessDesc'
                            placeholder='Business Description'
                            name='businessDesc'
                            value={businessDesc}
                            onChange={(e) => setBusinessDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className='mt-10 space-y-3'>
                    <div className="bg-primary py-3 px-4 text-white">Business Interests</div>
                    <textarea
                        rows={7}
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                        id='businessInterests'
                        placeholder='Give a brief description about your business interests'
                        name='businessInterests'
                        value={businessInterests}
                        onChange={(e) => setBusinessInterests(e.target.value)}></textarea>
                </div>
                <div className='mt-10 space-y-3'>
                    <div className="bg-primary py-3 px-4 text-white">Referred By</div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Name'
                            type='text'
                            id='referralName'
                            name='referralName'
                            value={referralName}
                            onChange={(e) => setReferralName(e.target.value)}
                        />
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Contact No'
                            type='text'
                            name='referralContact'
                            id='referralContact'
                            value={referralContact}
                            onChange={(e) => setReferralContact(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-10 space-y-3'>
                    <div className="bg-primary py-3 px-4 text-white">Products & Services</div>
                    <div className='flex gap-3'>
                        <input
                            className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                            placeholder='Mention your products and services'
                            type='text'
                            id='services'
                            name='services'
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                        />

                    </div>
                </div>
                <div className='mt-10 space-y-3'>
                    <div className="bg-primary py-3 px-4 text-white">Products & Services</div>
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
                <p className='font-[600] mt-12'>Subscribe now and avail of a free two-month trial. You can cancel your subscription anytime.</p>
                <div className='mt-4 space-y-3'>
                    <div className="bg-primary py-3 px-4 text-white mb-8">DOCUMENTS REQUIRED: Latest Balance Sheet, PAN No., Registration of Company, Address Proof - Telephone Bill/Electricity Bill</div>
                    <div className=''>
                        I/We hereby subscribe to be a (see membership table)
                        <input
                            className='placeholder:text-slate-400 -mt-12 border-b border-b-slate-300 py-2 px-4 focus:outline-none focus:ring-1'
                            placeholder=''
                            type='text'
                            id='membershipType'
                            name='membershipType'
                            value={membershipType}
                            onChange={(e) => setMembershipType(e.target.value)}
                        />
                        member of the Association of International Businessmen (AIB) and declare that all the information provided in this membership application form is true and complete.
                    </div>
                </div>
                <div className='text-center mt-7 float-right'>
                    <button onClick={handleSubmit} type='submit' className='bg-primary text-white px-12 rounded-full py-3 flex items-center justify-center'> { /* onClcik={handleContact} disabled={loading} */}
                        {loading && <span className='spinner-loader mr-2'></span>}
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MembershipForm
