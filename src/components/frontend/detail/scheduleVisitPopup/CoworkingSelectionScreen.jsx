import { useAuth } from "@/context/useAuth";
import { postAPIAuthWithoutBearer } from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";

const CoworkingSelectionScreen = ({spaceId,formData,setFormData,error,setError,values,setToggleScheduling,setSuccessScreen,spaceData}) => {
  const { token } = useAuth();
  const { mutate: coworkingSubmitMutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await postAPIAuthWithoutBearer(
        `user/coworkingScheduleVisit/${spaceId}`,
        payload,
        token
      );
      return response.data;
    },
    onSuccess: (data, payload) => {
      if (data?.result?.success) {
        setSuccessScreen(true);
      } else {
        toast.error(data?.result?.message);
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  const handleCoworkingSubmit = () => {
    let error = {};
    if (!formData.spaceType) {
      error.spaceType = "Please select a space type";
    }
    if (!formData.howManyPeople) {
      error.howManyPeople = "Please select people count";
    }
    setError(error);
    if (Object.keys(error).length === 0) {
      const onlyStartDate = new Date(values?.preferedDate);
      onlyStartDate.setMinutes(onlyStartDate.getMinutes() - onlyStartDate.getTimezoneOffset());
      const onlyStartDateStr = onlyStartDate.toISOString().split("T")[0];
      const payload = {
        visitDate: onlyStartDateStr,
        visitTime: values?.preferredTime,
        spaceType: formData?.spaceType,
        howManyPeople: formData?.howManyPeople,
      };
      coworkingSubmitMutate(payload);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  return (
    <>
      <div className="overflow-y-auto h-[calc(90vh-100px)] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]">
        <div className="md:max-w-[80%] max-w-full mx-auto text-center p-5 ">
          <h2 className="text-[#141414] font-thin mb-5 text-lg">
            What type of space are you looking for?
          </h2>
          <div className="flex justify-center max-md:space-y-2 flex-wrap gap-x-3 gap-y-6.5 items-center">
          {
            spaceData?.privatecabin_price > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Private Office"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                    Private Office
                    </span>
                </label>
            )
          }
          {
            spaceData?.manage_office_price > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Managed Office"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                    Managed Office
                    </span>
                </label>
            )
          }
          {
            spaceData?.desks_price > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Dedicated Desk"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                     Dedicated Desk
                    </span>
                </label>
            )
          }
          {
            spaceData?.flexible_desk_price > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Flexible Desk"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                    Flexible Desk
                    </span>
                </label>
            )
          }
          {
            spaceData?.virtual_office_price > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Virtual Office"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                     Virtual Office
                    </span>
                </label>
            )
          }
          {
            spaceData?.originalPrice > 0 && (
                <label className="cursor-pointer block">
                    <input
                    type="radio"
                    name="spaceType"
                    value="Day Pass"
                    className="hidden peer"
                    onChange={handleChange}
                    />
                    <span
                    className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                                    peer-checked:shadow-[5px_5px_15px_#0000004d]  
                                    hover:shadow-[5px_5px_15px_#0000004d] transition"
                    >
                     Day Pass
                    </span>
                </label>
            )
          }
          <label className="cursor-pointer block">
            <input
              type="radio"
              name="spaceType"
              value="Not sure"
              className="hidden peer"
              onChange={handleChange}
            />
            <span
              className="rounded-[5px] px-5 py-2 border peer-checked:border-2 peer-checked:border-[#F76900] text-sm text-[#141414] border-gray-300  
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
            >
              Not sure
            </span>
          </label>
          </div>
          {error?.spaceType && (
            <span className="text-red-500">{error.spaceType}</span>
          )}
          <h2 className="text-[#141414] font-thin mt-6 mb-3 text-lg">
            For How Many People?
          </h2>

          <div className="flex flex-wrap justify-center md:gap-5 gap-3 mb-6">
            <label className="cursor-pointer block">
              <input
                type="radio"
                name="howManyPeople"
                value="1"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                1
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="2"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                2
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="3"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                3
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="4"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                4
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="5"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                5
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="6"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                6
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="7"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                7
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="8"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                8
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="9"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                9
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="10"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                10
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="11"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                11
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="12"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                12
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="13"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                13
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="14"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                14
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="15"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                15
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="16"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                16
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="17"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                17
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="18"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                18
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="19"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                19
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="20"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-10 h-10 flex items-center justify-center border text-sm text-[#141414] peer-checked:bg-[#F76900] peer-checked:text-white border-gray-300 rounded-full 
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                20
              </span>
            </label>
          </div>

          <div className="flex justify-center gap-5 mb-7.5">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="21-50"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full  peer-checked:bg-[#F76900] peer-checked:text-white
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                21-50
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="51-100"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full  peer-checked:bg-[#F76900] peer-checked:text-white
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                51-100
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="howManyPeople"
                value="100+"
                className="hidden peer"
                onChange={handleChange}
              />
              <span
                className="w-20 h-20 flex items-center justify-center border text-sm text-[#141414] border-gray-300 rounded-full peer-checked:bg-[#F76900] peer-checked:text-white
                            peer-checked:shadow-[5px_5px_15px_#0000004d]  
                            hover:shadow-[5px_5px_15px_#0000004d] transition"
              >
                100+
              </span>
            </label>
          </div>
          {error.howManyPeople && (
            <span className="text-red-500">{error.howManyPeople}</span>
          )}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setToggleScheduling(false)}
              className="cursor-pointer border border-black font-semibold text-black px-[30px] py-2 text-sm tracking-[1px] rounded-[5px]"
            >
              PREVIOUS
            </button>
            <button
              onClick={handleCoworkingSubmit}
              className="cursor-pointer w-fit px-[30px] bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]"
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="m-5 mb-0 border-t border-[#0000001a]">
          <p className="text-[#777]  font-light text-[11px] text-center py-4">
            After you submit a workspace enquiry to us, we may share your
            enquiry details (including contact details) with workspace providers
            and our commercial broker partners, who may contact you to follow up
            on your enquiry. Please read our{" "}
            <a href="" className="text-[#f76900]">
              Privacy and Cookies Policy
            </a>{" "}
            for details of how we process the information you provide.
          </p>
        </div>
      </div>
    </>
  );
};

export default CoworkingSelectionScreen;
