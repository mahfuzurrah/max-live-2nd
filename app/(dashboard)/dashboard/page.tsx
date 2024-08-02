"use client"

import { setNavbarTitle } from "@/lib/features/common/commonSlice";
import { useAppDispatch } from "@/lib/hooks";
import Loading from "@/public/images/hourglass.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Dashboard() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavbarTitle("Dashboard"))
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center justify-center text-blue-primary font-semibold"
      style={{
        height: "calc(100vh - 75px)"
      }}
    >
      <div className="mb-[75px] flex flex-col items-center gap-4">
        <Image src={Loading} alt="loading" />
        <p>Nothing to display as of now</p>
      </div>
    </div>
  );
}
