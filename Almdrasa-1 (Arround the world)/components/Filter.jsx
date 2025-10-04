import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

function Filter({searchValue, setSearchValue, selectValue, setSelectValue}) {
    
    const { t } = useTranslation();

    return (
        <div className="flex justify-between">
            <div className="relative rounded-full w-[50%] md:w-[30%] shadow-md dark:text-white">
                <input type="text" placeholder={t('search')} className="rounded-full px-12 py-2 w-full dark:text-white dark:border dark:border-white border-transparent focus:outline-gray-400" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <CiSearch className="absolute left-4 top-2.5 text-xl font-bold"/>
            </div>

            <select name="region" id="region" className="px-4 py-2 shadow-md  dark:bg-gray-900 dark:text-white dark:border dark:border-white" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                <option value="All">{t('select.1')}</option>
                <option value="Africa">{t('select.2')}</option>
                <option value="Americas">{t('select.3')}</option>
                <option value="Asia">{t('select.4')}</option>
                <option value="Europe">{t('select.5')}</option>
                <option value="Oceania">{t('select.6')}</option>
            </select>
        </div>
    )
}

export default Filter
