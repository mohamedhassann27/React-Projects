
function SelectMenu({apiDetails,setApiDetails}) {

    const handleSelectClick= (e)=>{
        setApiDetails({
            ...apiDetails,
            category :e.target.value,
            page:1
        })
    }
    
    return (
        <div>
            <select onClick={handleSelectClick} name="category" id="category" className='border bg-white text-black w-40 p-2 rounded-sm mr-20'>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
            </select>
        </div>
    )
}

export default SelectMenu
