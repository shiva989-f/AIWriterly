import { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import FormSection from '../components/FormSection';
import OutputSection from '../components/OutputSection';
import { TemplateData } from '../Utils/TemplateData';
import { chatSession } from '../Utils/AIModel';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { errorMessage } from '../Utils/HandleToast';
import { useContentStore } from '../store/contentStore';
import { userSubscriptionStore } from '../store/UserSubscriptionStore';

const GenerateContent = () => {
  const { slug } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState("")
  const { user } = useAuthStore()
  const { totalUsage } = useContentStore()
  const { isUserSubscribed } = userSubscriptionStore()
  const navigate = useNavigate()
  const apiURl = import.meta.env.VITE_API_BASE_URL

  const selectedTemplate = TemplateData.find(item => item.slug === slug)

  const generateAIContent = async (formData) => {
    setIsLoading(true)
    try {
      if (totalUsage >= 10000 && !isUserSubscribed) {
        errorMessage("You've reached your free limits!")
        navigate('/dashboard/billing')
        return 
      }

      
      const selectedPrompt = selectedTemplate.aiPrompt
      const finalAiPrompt = JSON.stringify({ formData, selectedPrompt });
      const aiResponse = await chatSession.sendMessage(finalAiPrompt)
      const result = aiResponse.response.text()
      setAiOutput(result)

      const payload = {
        userFormInput: JSON.stringify({ formData }),
        aiOutput: result,
        templateSlug: slug,
        generatedBy: user.email
      }
      await axios.post(`${apiURl}/ai-output`, payload)

      setIsLoading(false)
    } catch (error) {
      errorMessage("Something Went Wrong!")
      setIsLoading(false)
    }

  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className='w-full h-screen p-4 overflow-x-hidden text-white'
    >

      <div className="w-full h-full overflow-y-scroll bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* FormSection */}
        <FormSection isLoading={isLoading} selectedTemplate={selectedTemplate} formInputData={(v) => generateAIContent(v)} />
        {/* OutputSection */}
        <OutputSection aiOutput={aiOutput} />
      </div>

    </motion.div>
  )
}

export default GenerateContent