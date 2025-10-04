import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function SelectLanguage() {
    const {t, i18n } = useTranslation();
    const [select, setSelect] = useState(false);
    const [lang, setLang]= useState(i18n.language)

    const changeLanguage= (language)=>{
        i18n.changeLanguage(language)
        document.dir= i18n.dir()
        setSelect(false)
        setLang(language)
        console.log(lang);
        
    }

    useEffect(()=>{
        document.dir= i18n.dir()
        document.documentElement.lang= i18n.language
    },[i18n.language])

    return (
        <div className="relative">

            <div className={`${lang=="en"? 'inline-flex': 'hidden'} items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse `}>
            <button
                onClick={() => setSelect(!select)}
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <svg
                className="w-5 h-5 rounded-full me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
                >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth={300}
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                    <g id="d">
                    <g id="c">
                        <g id="e">
                        <g id="b">
                            <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use xlinkHref="#a" y={420} />
                            <use xlinkHref="#a" y={840} />
                            <use xlinkHref="#a" y={1260} />
                        </g>
                        <use xlinkHref="#a" y={1680} />
                        </g>
                        <use xlinkHref="#b" x={247} y={210} />
                    </g>
                    <use xlinkHref="#c" x={494} />
                    </g>
                    <use xlinkHref="#d" x={988} />
                    <use xlinkHref="#c" x={1976} />
                    <use xlinkHref="#e" x={2470} />
                </g>
                </svg>
                {t('english')}
            </button>
            </div>

            <div className={`${lang=="ar"? 'inline-flex': 'hidden'}  items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse`}>
            <button
                onClick={() => setSelect(!select)}
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/egypt-flag-round-circle-icon.png"
                    alt="Egypt Flag Round Circle Icon in SVG, PNG formats"
                    title="Egypt Flag Round Circle Icon"
                    className="me-2 w-5 h-5"
                ></img>
                {t('arabic')}
            </button>
            </div>

{/* select menu */}
            <div
            className={`${
                select ? "absolute" : "hidden"
            } right-0 top-8 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 w-35`}
            id="language-dropdown-menu"
            >
                <ul className="py-2 font-medium">

                    <li onClick={()=> changeLanguage('en')}>
                    <a
                        href="#"
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white flex"
                        // role="menuitem"
                    >
                        <svg
                        className="w-5 h-5 rounded-full me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 3900 3900"
                        >
                        <path fill="#b22234" d="M0 0h7410v3900H0z" />
                        <path
                            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                            stroke="#fff"
                            strokeWidth={300}
                        />
                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        <g fill="#fff">
                            <g id="d">
                            <g id="c">
                                <g id="e">
                                <g id="b">
                                    <path
                                    id="a"
                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                    />
                                    <use xlinkHref="#a" y={420} />
                                    <use xlinkHref="#a" y={840} />
                                    <use xlinkHref="#a" y={1260} />
                                </g>
                                <use xlinkHref="#a" y={1680} />
                                </g>
                                <use xlinkHref="#b" x={247} y={210} />
                            </g>
                            <use xlinkHref="#c" x={494} />
                            </g>
                            <use xlinkHref="#d" x={988} />
                            <use xlinkHref="#c" x={1976} />
                            <use xlinkHref="#e" x={2470} />
                        </g>
                        </svg>
                        {t('english')}
                    </a>
                    </li>

                    <li onClick={()=> changeLanguage('ar')}>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                    >
                        <div className="inline-flex items-center">
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/egypt-flag-round-circle-icon.png"
                            alt="Egypt Flag Round Circle Icon in SVG, PNG formats"
                            title="Egypt Flag Round Circle Icon"
                            className="me-2 w-5 h-5"
                        ></img>
                        {t('arabic')}
                        </div>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SelectLanguage;
