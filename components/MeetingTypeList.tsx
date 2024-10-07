"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMettingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {

  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Metting"
        description="Start an instant meeting"
        handleClick={() => {
          setMettingState("isInstantMeeting");
        }}
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Metting"
        description="Start an instant meeting"
        handleClick={() => {
          setMettingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Metting"
        description="Plan your meeting"
        handleClick={() => {
          setMettingState("isScheduleMeeting");
        }}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="New recordings"
        description="check out your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => {
          setMettingState(undefined);
        }}
        title="Start a new meeting"
        className="text-center"
        buttonText="start meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}

export default MeetingTypeList;
