import Swal from 'sweetalert2'
// werrt alert library

const showPopus= ()=>{     
        return Swal.fire({
            showCloseButton:true,
            html: `
                <form class='flex flex-col gap-5 m-auto bg-white backdrop-blur-2xl'>
                    <h2 class='text-xl'>Order Now</h2>
                    <input type="text" name="name" id="name" placeholder='Name' class='border-gray-400 border-1 py-2 px-4 rounded-full w-[85%] m-auto'/>
                    <input type="email" name="email" id="email" placeholder='email' class='border-gray-400 border-1 py-2 px-4 rounded-full w-[85%] m-auto'/>
                    <input type="text" name="addewss" id="address" placeholder='address' class='border-gray-400 border-1 py-2 px-4 rounded-full w-[85%] m-auto'/>
                </form>
                
            ` ,
            // text: 'Do you want to continue',
            // icon: 'error',
            confirmButtonText: 'Order Now',
            preConfirm: () => {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                if (!name || !email) {
                    Swal.showValidationMessage('Please enter all data');
            }
            },
            customClass: {
                confirmButton: ' text-white px-5 py-2 rounded-md',
            },
            buttonsStyling: false, // ✅ ضروري علشان الـ Tailwind يشتغل
        })
}
export default showPopus