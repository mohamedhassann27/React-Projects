import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Contact = () => {

    // Web3Forms APi JS Framwork React "not install"  
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "59ac392c-f140-4b41-a419-47b6008fcaa9");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            // Toastify Api 
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <motion.div
        initial={{opacity:0, x:-200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >
        <section className='overflow-x-hidden my-12 px-32 max-md:px-10 max-xl:px-13 py-10'>
            <h2 className='text-4xl font-bold text-center'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With US</span></h2>
            <p className='my-4 mb-11 mx-auto max-w-85 text-center text-gray-600'>Ready to Make a Move? Let's Buils Your Future Together</p>

            <form className="flex flex-wrap max-md:flex-col gap-6 text-black max-w-2xl mx-auto mt-20" onSubmit={onSubmit}>
                <div className='w-1/2 max-md:w-full'> 
                    <p>Your Name</p>
                    <input type="text" name='Name' required className='border border-gray-400 w-full mt-1 py-2 px-4 rounded' placeholder='Your Name'/>
                </div>
                <div className='flex-1'> 
                    <p>Your Email</p>
                    <input type="email" name='Email' required className='border-gray-400 border w-full mt-1 py-2 px-4 rounded' placeholder='Your Email'/>
                </div>
                <div className="w-full">
                    <p>Message</p>
                    <textarea name='Massege' required className='w-full border border-gray-400 mt-1 py-2 px-4 h-50 resize-none' placeholder='Message'></textarea>
                </div>
                <button className='bg-blue-600 py-2 px-10 rounded text-white mx-auto cursor-pointer'>{result ? result: "Send Message" }</button>
            </form>
        </section>
        </motion.div>
    )
}

export default Contact
