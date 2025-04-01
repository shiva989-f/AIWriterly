import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';

const OutputSection = ({ aiOutput }) => {
  const editorRef = useRef()

  const handleCopy = ()=> {
    navigator.clipboard.writeText(aiOutput)
  }

  useEffect(() => {
    if (editorRef.current) {
      const sanitizedMarkdown = aiOutput.replace(/<\/?[^>]+(>|$)/g, "")
      const editorInstance = editorRef.current.getInstance();
      setTimeout(() => {
        editorInstance.setMarkdown(sanitizedMarkdown);
      }, 100);
    }

  }, [aiOutput]);

  return (
    <div className='h-screen md:h-full'>
      <div className="flex items-center justify-between p-3 text-white bg-gray-800 bg-opacity-50 rounded-2xl backdrop-blur-xl mb-2">
        <h2 className='font-medium text-lg'>Your Result</h2>
        <button type="submit" className='flex items-center justify-center gap-2 text-white font-[poppins] text-xs bg-gradient-to-br from-cyan-500 to-blue-600 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none' onClick={handleCopy} ><Copy className='size-4' /> Copy</button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here..."
        previewStyle="vertical"
        initialEditType="wysiwyg"
        height="90%"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection