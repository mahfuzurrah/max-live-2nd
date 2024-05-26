"use client";
import Cors from "@/public/images/arrows-cross.svg";
import commonQu from "@/public/images/comments-question.svg";
import document from "@/public/images/file-minus.svg";
import FilterIcon from "@/public/images/filter.svg";
import Link from "@/public/images/link.svg";
import { Button, Select } from "antd";
import Image from "next/image";
import { FaPencilAlt, FaPlus } from "react-icons/fa";

import Switch, { SwitchChangeEventHandler } from "antd/es/switch";
import { useState } from "react";
const FlowDetails = () => {
  const data = [
    {
      name: "Document",
      status: "completed",
      icon: document,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Link",
      status: "completed",
      icon: Link,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "If",
      status: "completed",
      icon: Cors,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
    {
      name: "Language",
      status: "completed",
      icon: commonQu,
      describe:
        "Your input is a document, you can ask whatever you want to the model regarding this text, analyse it, generate a conclusion...",
    },
  ];

  const [clickCounts, setClickCounts] = useState<number[]>(
    new Array(data.length).fill(0)
  );
  const [items, setItems] = useState<any[]>([]);
  const [shakingIndex, setShakingIndex] = useState<number | null>();
  const [maxClicks, setMaxClicks] = useState(3);
  const [editMode, setEditMode] = useState({});
  const [activeSwitch, setActiveSwitch] = useState(false);

  const onChange: SwitchChangeEventHandler = (checked) => {
    setActiveSwitch(checked);
  };

  return (
    <div className="p-4">
      <div className="">
        <div className="flex justify-between">
          <h3>#FlowName</h3>
          <div className="flex gap-4">
            <Select
              defaultValue="This month"
              className="select"
              options={[{ value: "This month", label: "This month" }]}
            />
            <button className="wallet-btn">
              <Image src={FilterIcon} alt="" />
              Filter
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 mt-5 bg-white sm:flex-row rounded-xl">
          {data.map((item, index) => (
            <div
              onClick={() => {
                if (clickCounts[index] < maxClicks) {
                  setShakingIndex(index);
                  setTimeout(() => setShakingIndex(null), 500); // Stop shaking after 500ms

                  // Update click count
                  const newClickCounts = [...clickCounts];
                  newClickCounts[index]++;
                  setClickCounts(newClickCounts);
                  !Object.keys(editMode).length &&
                    // Add new item to array
                    setItems([
                      ...items,
                      {
                        ...item,
                        id: items.length,
                        clickCount: newClickCounts[index],
                      },
                    ]);
                }
              }}
              className={`bg-[#E6F0FF] rounded-xl cursor-pointer ${
                shakingIndex === index ? "animate-shake" : ""
              }`}
              key={index}
            >
              <div className="flex gap-2 px-2 py-3">
                <Image src={item.icon} alt="" />
                <div className="px-2">
                  <h3>{item.name}</h3>
                  <p className="">{item.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!Object.keys(editMode).length ? (
          <div className="">
            <h3 className="my-4">Graph</h3>
            <div className="bg-white rounded-xl min-h-[40vh] flex items-center justify-start p-4 ">
              <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                  <div
                    onClick={() => {
                      setEditMode(item);
                    }}
                    key={item.id}
                    className="flex items-center gap-4 "
                  >
                    <div className="flex gap-3 items-center justify-between bg-[#E6F0FF] w-52 py-2 px-4 rounded-md">
                      <div className="flex gap-2">
                        <Image src={item.icon} alt="" />
                        <p>{item.name}</p>
                      </div>

                      <div className="">
                        <FaPencilAlt />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <FaPlus
                        onClick={(e) => {
                          e.stopPropagation();

                          const newItem = { ...item, id: items.length }; // Create new item with different id
                          setItems([...items, newItem]); // Add new item to array
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <h3 className="my-4">Graph</h3>
            <div className="bg-white rounded-xl min-h-[40vh] flex flex-col justify-start p-4">
              <div className="mb-4">
                <p className="mb-2">Step Name</p>
                <div className=" rounded-md bg-[#E6F0FF] py-2 px-4 font-semibold w-48 text-center">
                  Extract Law 2024
                </div>
              </div>
              <div className="">
                <p className="mb-2">Rules</p>
                <div className="h-40 overflow-auto bg-[#E6F0FF] font-semibold px-4 py-2 rounded-lg">
                  Isolate all articles mentionned in the following court
                  decision : Par un jugement avant-dire-droit du 3 juin 2022, le
                  tribunal administratif de Lille, saisi par Mme B A et autres,
                  d'une requête tendant à ce qu'une expertise judiciaire soit
                  ordonnée afin de préciser la fraction de chance de survie
                  perdue par M. H A du fait de son défaut de prise en charge par
                  les services de police, par les médecins intervenus en garde à
                  vue et par le personnel du centre pénitentiaire d'Annœullin
                  entre les 18 et 23 juin 2013, à la condamnation de l'Etat à
                  leur verser à chacun, une somme provisionnelle de 2 000 euros
                  au titre du préjudice moral subi du fait du décès en détention
                  de M. H A, à la condamnation de l'Etat à les indemniser des
                  préjudices subis du fait du décès en détention de M.  H A, à
                  hauteur de 80 000 euros en ce qui concerne chacune de ses
                  trois épouses et de 50 000 euros en ce qui concerne chacun de
                  ses enfants, sommes assorties des intérêts à compter du 17
                  mars 2017 et de la capitalisation des intérêts, et à ce que
                  soit mis à la charge de l'Etat une somme de 5 000 euros au
                  titre de l'article L. 761-1 du code de justice administrative
                  ainsi que les dépens, a retenu la responsabilité de l'Etat du
                  fait des fautes commises tant par le personnel de l'unité de
                  consultations de soins ambulatoires (UCSA) du centre
                  pénitentiaire d'Annœullin que par le personnel pénitentiaire
                  de cet établissement, a rejeté les demandes d'indemnités
                  provisionnelles sollicitées et a ordonné la réalisation d'une
                  expertise médicale aux fins, en particulier, d'analyser les
                  conditions dans lesquelles M. A a été pris en charge à compter
                  de son arrivée au centre pénitentiaire d'Annœullin jusqu'à son
                  décès, d'indiquer de manière motivée s'il existe un lien de
                  causalité direct et certain entre, d'une part, les manquements
                  relevés dans le jugement et, d'autre part, le décès de
                  M. A et, dans l'hypothèse où les manquements précités seraient
                  à l'origine d'une perte de chance de survie subie par M. A, de
                  procéder à son évaluation en fixant son taux.Par des mémoires,
                  enregistrés les 13 et 30 janvier 2023, Mme B A, M. P A, Mme
                  L A, Mme O A, M. E A, Mme G A, Mme D A, Mme F A, Mme Q A, Mme
                  R A, Mme J A, Mme N A, M. M A, Mme K A et Mme I A, représentés
                  par Me Lequien, demandent au tribunal, dans le dernier état de
                  leurs écritures :1°) de condamner solidairement l'Etat et le
                  centre hospitalier universitaire de Lille à les indemniser des
                  préjudices subis du fait du décès en détention de M. H A, en
                  versant, d'une part, à l'ensemble de ses enfants une somme de
                  40 000 euros au titre des souffrances physiques et morales que
                  celui-ci a endurées avant son décès, d'autre part, à chacune
                  de ses trois épouses une somme de 80 000 euros et à chacun de
                  ses enfants une somme de 50 000 euros au titre de leur
                  préjudice moral, sommes assorties des intérêts à compter du 17
                  mars 2017 et de la capitalisation des intérêts ;2°) de mettre
                  à la charge de l'Etat et du centre hospitalier universitaire
                  de Lille une somme totale de 5 600 euros, soit 400 euros à
                  verser à chacun des requérants, au titre de l'article L. 761-1
                  du code de justice administrative ainsi que les dépens ;3°) de
                  dire le jugement à intervenir exécutoire par provision.Ils
                  soutiennent que :- les fautes du personnel de l'UCSA et des
                  services pénitentiaires retenues dans le jugement
                  avant-dire-droit sont de nature à engager la responsabilité de
                  l'administration ; les fautes commises par les infirmières ne
                  sont pas détachables du service ; le médecin, qui s'est
                  contenté du rapport des infirmières sur l'état de M. A, a fait
                  preuve d'une négligence fautive ;- l'expertise ordonnée
                  avant-dire-droit établit le lien de causalité entre ces fautes
                  et le décès de M. A ;- les souffrances morales et physiques de
                  M. A avant son décès constituent un préjudice justifiant le
                  versement à ses enfants d'une somme de 40 000 euros ;- leur
                  préjudice moral est nécessairement établi ; la situation de
                  polygamie de M. A à la date de son décès était légale au
                  Nigéria et le préjudice subi par ses épouses du fait de son
                  décès doit être intégralement indemnisé ; les circonstances
                  dans lesquelles ils ont appris le décès de M. A ont aggravé
                  leurs souffrances ; après application du taux de perte de
                  chance arrêté par l'expert, soit un taux de 80%, leurs
                  préjudices d'affection s'élèvent, en ce qui concerne chacune
                  des épouses du défunt, à la somme de 80 000 euros et, en ce
                  qui concerne chacun de ses enfants, à la somme de 50 000 euros
                  ;- le décès de M. A, qui subvenait aux besoins de toute sa
                  famille, leur a également causé un dommage financier.Par un
                  mémoire en défense, enregistré le 13 janvier 2023, le centre
                </div>

                <div className="flex items-center gap-2 mt-5 mb-4">
                  <p>Is Active ?</p>
                  <Switch
                    style={{
                      backgroundColor: activeSwitch ? "#0065FF" : "#bbbbbb",
                    }}
                    defaultChecked={activeSwitch}
                    checked={activeSwitch}
                    onChange={onChange}
                  />
                </div>
                <Button
                  onClick={() => setEditMode({})}
                  type="primary"
                  size="small"
                  className="rounded-lg"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowDetails;
