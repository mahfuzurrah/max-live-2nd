import gradientBg from "@/public/images/gradient-background.png";
import { Button, Spin } from "antd";
import { FaCheckCircle, FaFileExport } from "react-icons/fa";
import { IoCloseCircle, IoReloadOutline } from "react-icons/io5";
import { FcDocument } from "react-icons/fc";
import { useAppDispatch } from "@/lib/hooks";
import { setFlowSidePane } from "@/lib/features/flow/flowSlice";
import sparkles from "@/public/images/sparkles.svg"
import file from "@/public/images/file-minus.svg"
import Image from "next/image";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function RunningFlowsItem() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)

    function runAgain() {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }

    function closeRunningFlow() {
        dispatch(setFlowSidePane(null))
    }

    return (
        <div className='p-4 rounded-2xl w-full max-w-[40rem] h-[70vh] overflow-y-scroll'
            style={{
                backgroundImage: `url(${gradientBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"
            }}>
            <div className=''>
                <>
                    <h3 className="text-white text-sm text-center">Running #FlowName</h3>

                    <div className="bg-white rounded-xl py-8 mt-3 flex flex-col justify-center items-center">
                        <Image src={file} alt="" width={20} height={20} />
                        <h2 className="text-sm my-1">Tax Correction 2023 - Perrot</h2>
                        {
                            loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> :
                                <FaCheckCircle className="text-[#0f7b57] text-2xl" />
                        }
                    </div>

                    <div className="bg-white rounded-xl flex flex-col justify-center items-center mt-4 px-5">
                        <div className="bg-white rounded-xl py-1 mt-3 flex flex-col justify-center items-center">
                            <Image src={sparkles} alt="" width={24} height={24} />
                            <h2 className="text-sm my-1">Ask AI</h2>
                            {
                                loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> :
                                    <FaCheckCircle className="text-[#0f7b57] text-2xl" />
                            }

                        </div>

                        {
                            !loading &&
                            <p className="h-[25vh] overflow-y-scroll">
                                Réponse: <br />
                                1. Avis de vérification <br />
                                InformationValeurDate avis de vérificationImpôts visésPériode viséeDate proposée premier RDVBrigade de contrôleDivision brigadeIdentité de l'inspecteurIdentité supérieur Hiérarchique <br />
                                2. Opérations de contrôles <br />
                                InformationValeurReport 1er rendez-vousDates RDV et synthèseRéunion de synthèse <br />
                                3. Présentation de la proposition de rectification <br />
                                InformationValeurDate de réception de la proposition de rectification18 décembre 2023Nature Procédure et ConséquencesProrogation de délai formulation observations de contribuable30 joursDate limite formulation observations de contribuableDélai de reprise <br />
                                4. Liste des rectifications <br />
                                InformationValeurListe des rectifications proposées par avec montantRappel de revenus de capitaux mobiliers: 2020 - 1 632 €, 2021 - 298 €; Rappel de revenus de sous-location Micro-BNC: 2020 - 8 963 €, 2021 - 9 009 €; Reprises de charges déductibles du revenu global: 2020 - 7 084 €, 2021 - 3 592 €Liste des rectifications proposées avec lois applicablesArticle 111 a du CGI pour les revenus de capitaux mobiliers; Article 156, II-2° ter du CGI pour les frais d’accueil des personnes âgées de plus de 75 ans <br />
                            </p>
                        }
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-4">
                        <Button onClick={runAgain} size="large" className="flex items-center gap-2 justify-center col-span-1 rounded-xl font-bold">
                            Run again <IoReloadOutline />
                        </Button>
                        <Button onClick={closeRunningFlow} size="large" className="flex items-center gap-2 justify-center col-span-1 rounded-xl font-bold">
                            Close <IoCloseCircle className="text-red-600" />
                        </Button>
                        <Button size="large" className="flex items-center gap-2 justify-center col-span-1 rounded-xl font-bold">
                            Export <FaFileExport className="text-[#96c0ff]" />
                        </Button>
                    </div>
                </>
            </div>
        </div>
    )
}
