"use client";
import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAPIAuthWithoutBearer } from "@/services/ApiService";
import { useAuth } from "@/context/useAuth";
import VisitItem from "./VisitItem";

const MyVisit = () => {
  const { token } = useAuth();
  const { data: allVisits } = useQuery({
    queryKey: ["all-visits"],
    queryFn: async () => {
      const res = await getAPIAuthWithoutBearer("user/getVisit", token);
      return res.data;
    },
    keepPreviousData: true,
    enabled: !!token,
  });
  const visitData = useMemo(() => {
    return allVisits?.result?.visit || [];
  }, [allVisits]);
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] bg-[#f9f9f9]">
        <div className="container mx-auto px-[15px] py-10">
          <div className="flex flex-col">
            <div className="pt-[13px] pb-[30px]">
              <h1 className="font-semibold text-[#141414] text-[26px] leading-[1.6]">
                Scheduled Visits
              </h1>
            </div>
            <div className="flex flex-col gap-y-5">
              {visitData?.length > 0 ? (
                visitData?.map((item, index) => (
                  <VisitItem key={index} item={item} />
                ))
              ) : (
                <div>Visits not found..</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyVisit;
