import React, { useState } from 'react'
import Button from './Button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const FormSection = ({ isLoading, selectedTemplate, formInputData }) => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formInputData(formData)
  }

  return (
    <div>
      <Link to="/dashboard"><button type="submit" className='w-fit text-white font-[poppins] bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none' ><ArrowLeft /></button></Link>
      <div >
        <img src={selectedTemplate.icon} alt={selectedTemplate.name} className="w-16" />
        <h1 className='font-[poppinsBold] font-black text-2xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent mt-2'>{selectedTemplate.name}</h1>
      </div>
      <p className="text-gray-400 text-sm mt-2">{selectedTemplate.desc}</p>

      <form onSubmit={handleSubmit}>
        {
          selectedTemplate.form.map((item, index) => (
            <div className='mt-6' key={index} >
              <label className="text-gray-400">{item.label}</label>
              <item.field name={item.name} required={item.required} className={`w-full px-3 py-2 font-[poppins] bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 outline-none focus:border-foregroundColor focus:ring-cyan-600 text-white placeholder-gray-400 transition duration-200 resize-none mt-2 ${item.field == "textarea" && "h-32"}`} onChange={handleChange} />
            </div>
          ))
        }

        <Button isLoading={isLoading} buttonText={"Generate"} handleBtnFunc={handleSubmit} />
      </form>
    </div>
  )
}

export default FormSection