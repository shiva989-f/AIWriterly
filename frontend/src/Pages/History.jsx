import axios from 'axios'
import { useEffect, useState } from 'react';
import { TemplateData } from '../Utils/TemplateData';
import { errorMessage } from '../Utils/HandleToast';
import HistoryTemplate from '../components/HistoryTemplate';

const History = () => {

    const [history, setHistory] = useState([])
    const [selectedTemplate, setSelectedTemplate] = useState([])

    const showHistory = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/show-history`);
            const fetchedHistory = res.data.history || [];
            setHistory(fetchedHistory);

            const selectedTemplates = fetchedHistory.map(item =>
                TemplateData.find(template => template.slug === item.templateSlug)
            );
            setSelectedTemplate(selectedTemplates);
        } catch (error) {
            errorMessage('Something went wrong!');
        }
    };

    useEffect(() => {
        showHistory()
    }, [])

    return (
        <div className="w-full h-full overflow-y-scroll ">
            <div className='bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 m-6'>
                <h1 className='font-[poppinsBold] text-center font-black text-3xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent '>History</h1>
            </div>
            <div>
                {
                    history.map((item, index) => (
                        <HistoryTemplate key={index} icon={selectedTemplate[index].icon} name={selectedTemplate[index].name} output={item.aiOutput} date={item.createdAt} />
                    ))
                }
            </div>
        </div>
    )
}

export default History