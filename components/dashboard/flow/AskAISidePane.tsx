import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import gradientBg from "@/public/images/gradient-background.png";
import { Button, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import AIIcon from "@/public/images/sparkles.svg";
import { setFlowSidePane } from "@/lib/features/flow/flowSlice";

export default function AskAISidePane() {
  const dispatch = useAppDispatch()
  const { flowItemSidePane } = useAppSelector((state: RootState) => state.flow)

  function handleSave() {
    dispatch(setFlowSidePane(null))
  }

  return (
    <div className='p-4 rounded-2xl'
      style={{
        backgroundImage: `url(${gradientBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='w-[30rem]'>
        <div className="flex justify-center items-end w-full gap-3">
          <h2 className='text-center text-white mt-3 text-base'>Ask AI</h2>
          <Image src={AIIcon} alt="" width={24} height={24} />

        </div>

        <div className='p-5 bg-white rounded-2xl mt-5'>
          <div className="flex gap-4 items-center mb-4">
            <p className="text-[#2c2e30] font-bold">Input:</p>
            <Input size="large" placeholder="" value="Tax Correction 2023 - Perrot" className="rounded-lg" />
          </div>

          <div className="mb-4">
            <p className="text-[#2c2e30] text-left font-bold mb-2">Instructions:</p>
            <TextArea placeholder="Input your text..." className="rounded-xl" rows={10} />
          </div>

          <div className="flex gap-6 items-center mb-4">
            <p className="text-[#2c2e30] font-bold">Model:</p>
            <Select
              className="w-full"
              size="large"
              defaultValue="azure OpenAI GPT 4 turbo"
              options={[
                { value: '', label: 'GPT-4 OpenAI' },
                { value: '', label: 'Text-To-Text Transfer Transformer' },
                { value: '', label: 'Facebook AI' },
                { value: 'Azure OpenAI GPT 4 turbo', label: 'Azure OpenAI GPT 4 turbo' },
              ]}
            />
          </div>
        </div>

        <div className='text-center mt-5'>
          <Button size='large' type="primary" className='rounded-2xl' onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  )
}
