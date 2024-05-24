"use client";
import dynamic from 'next/dynamic';


import { Select } from "antd";
import Image from "next/image";
import DeactivatedAccounts from '@/public/images/deactivated_accounts.svg';
import ArroUp from '@/public/images/deactivated_accounts.svg';
import camers_icons from "@/public/images/live_stream.svg"
import star from "@/public/images/star.svg"
import data from '@/components/dashboard/card/CardData';
import topModelData from "@/components/dashboard/card/TopModelData";
// import PieChart from "@/components/dashboard/chart/PieChart";
// import TopModelCard from "@/components/dashboard/card/TopModelCard";
// import OverviewCard from "@/components/dashboard/card/OverviewCard";

const TopModelCard = dynamic(() => import('@/components/dashboard/card/TopModelCard'), { ssr: false });
const OverviewCard = dynamic(() => import('@/components/dashboard/card/OverviewCard'), { ssr: false });
const PieChart = dynamic(() => import('@/components/dashboard/chart/PieChart'), { ssr: false });

const handleChange = (value: any) => {
    // console.log(`selected ${value}`);
};

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="title-area">
                <h3 className="title">Overview</h3>
                <Select
                    defaultValue="This month"
                    style={{
                        width: 132,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "This month",
                            label: "This month",
                        },
                    ]}
                />
            </div>
            {/* Overview card */}
            <div className="overview-cards max_live_card ">
                {data.map((item, index) => (
                    <OverviewCard
                        key={index}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        number={item.number}
                        gain={item.gain}
                    />
                ))}
            </div>
            {/* 2nd row */}
            <div className="dtm-main">
                {/* left */}
                <div className="dm-card-area">
                    {/* Datasets */}
                    <div className="datasets-card max_live_card">
                        <div className="overview_card">
                            <div className="title">
                                <Image src={DeactivatedAccounts} width="32" height="32" alt="Deactivated Accounts" />
                                <div className="active-content">
                                    <p className="active-text">Active models</p>
                                    <h4>13</h4>
                                    <div className="card-btn">
                                        <Image src={ArroUp} width="16" height="16" alt="Arrow Up" />
                                        <span>32.3%</span> gain this month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="datasets-card-left max_live_card">
                            {/* row 1 */}
                            <div className="row-1">
                                <div className="dot-btn">Avg Time</div>
                                <div className="img-area">
                                    <Image src={camers_icons} alt="Video Icon" />
                                    12.3 <span>hr</span>
                                </div>
                            </div>
                            {/* row 2 */}
                            <div className="row-1">
                                <div className="dot-btn purple">Avg Time</div>
                                <div className="img-area">
                                    <Image src={star} alt="Video Icon" />
                                    12.3 <span>hr</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MY MODEL CARD */}
                    <div className="my-model-card max_live_card">
                        <div className="header-area">
                            <div className="title">
                                <h4>My models</h4>
                                <p>More than 1 transaction this month</p>
                            </div>
                            <h6 className="see-all-btn">See All</h6>
                        </div>
                        <div className="chart-area">
                            <div className="chart-box">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                {/* TOP MODEL CARD */}
                <div className="top-model-card max_live_card">
                    <div className="header-area">
                        <h4 className="title">Top models</h4>
                        <h6 className="see-all-btn">See All</h6>
                    </div>
                    <div className="card-item-area">
                        {topModelData.map((userData, index) => (
                            <TopModelCard
                                key={index}
                                count={userData.count}
                                userImgSrc={userData.userImgSrc}
                                userName={userData.userName}
                                liveImgSrc={userData.liveImgSrc}
                                liveCount={userData.liveCount}
                                followersCount={userData.followersCount}
                                ratingImgSrc={userData.ratingImgSrc}
                                avgRating={userData.avgRating}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

