import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import gradientBg from "@/public/images/gradient-background.png";
import { Button } from "antd";
import Image from "next/image";
import documentIcon from "@/public/images/file-minus.svg";
import { setFlowSidePane } from "@/lib/features/flow/flowSlice";

export default function DocumentSidePane() {
  const dispatch = useAppDispatch()

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
      <div className='w-64'

      >
        <h2 className='text-center text-white mt-3 text-base'>Document Step</h2>

        <div className='p-5 bg-white text-center rounded-2xl mt-5'>
          <Image src={documentIcon} alt="" width={24} height={24} className='mx-auto' />
          <h3 className='mt-5 text-base'>Upload Document</h3>
        </div>

        <div className='flex justify-between mt-5'>
          <Button size='large' className='rounded-2xl'>Cancle</Button>
          <Button size='large' className='rounded-2xl' onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  )
}
