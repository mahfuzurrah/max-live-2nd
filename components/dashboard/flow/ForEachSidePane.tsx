import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import gradientBg from "@/public/images/gradient-background.png";
import { Button, Input } from "antd";
import { setFlowSidePane } from "@/lib/features/flow/flowSlice";

export default function ForEachSidePane() {
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
            <div className='w-64'>
                <h2 className='text-center text-white mt-3 text-base'>For Each</h2>

                <div className='p-5 bg-white text-center rounded-2xl mt-5'>
                    <Input size="large" placeholder="Enter link" className="rounded-lg" />
                </div>

                <div className='flex justify-between mt-5'>
                    <Button size='large' className='rounded-2xl'>Cancle</Button>
                    <Button size='large' className='rounded-2xl' onClick={handleSave}>Save</Button>
                </div>
            </div>
        </div>
    )
}
