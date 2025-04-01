import { useEffect, useState } from "react"
import { TemplateData } from "../Utils/TemplateData"
import { Link } from "react-router-dom"

const TemplateList = ({ searchInput }) => {
  const [templateList, setTemplateList] = useState(TemplateData)

  useEffect(() => {
    if (searchInput) {
      const listData = TemplateData.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
      setTemplateList(listData)
    }else {
      setTemplateList(TemplateData)
    }
  }, [searchInput]);

  return (
    
    <>
      {
        (templateList.length <= 0) ? <p className="text-center">Sorry No Template Found 😢!</p>
          : <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 sm:p-6">
            {templateList.map((item, index) => (
              <Link key={index} to={`/dashboard/content/${item.slug}`}>
                <div className="bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl cursor-pointer p-6 hover:-translate-y-2 transition-all">
                  <img loading="lazy" src={item.icon} alt={item.name} className="w-10 mb-4" />
                  <h3 className='font-[poppinsBold] font-black text-xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent'>{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">{item.desc}</p>
                </div>
              </Link>
            ))
            }
          </div>
      }
    </>
  )
}

export default TemplateList        