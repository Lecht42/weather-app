import { trySavePerson } from "@/lib/features/actions/saga-actions";
import { useAppDispatch } from "@/lib/hooks";
import { Person } from "@/lib/intefaces";
import Image from "next/image";
import {
  CheckCircleFill,
  CloudSunFill,
  Envelope,
  FloppyFill,
  GenderFemale,
  GenderMale,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";
import SecondaryButton from "../../buttons/secondary-button";
import { useState } from "react";
import WeatherModal from "../../weather-modal/weather-modal";

const BUTTON_ICON_SIZE = 16;
const GENDER_ICON_SIZE = 26;
const PHOTO_SIZE = 80;

export interface PersonCardProps extends Person {
  saved?: boolean;
}

export default function PersonCard(props: PersonCardProps) {
  const dispatch = useAppDispatch();
  const [saved, setSaved] = useState(props.saved);
  const [modalVisible, setModalVisible] = useState(false);

  const onSaveClickHandler = () => {
    dispatch(trySavePerson(props));
    setSaved(true);
  };

  return (
    <>
      <div className="bg-white drop-shadow rounded w-auto p-4">
        <div className="flex">
          <Image
            src={props.photoUrl}
            width={PHOTO_SIZE}
            height={PHOTO_SIZE}
            alt={`Photo of ${props.name}`}
            className="m-1 rounded-full"
          />
          <div className="text-lg font-medium m-2 self-center">{props.name}</div>
          <div className="flex grow justify-end m-1">
            {props.gender === "male" ? (
              <GenderMale size={GENDER_ICON_SIZE} />
            ) : (
              <GenderFemale size={GENDER_ICON_SIZE} />
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <GlobeEuropeAfrica className="w-4 m-1" />
            {props.location}
          </div>
          <div className="flex flex-inline">
            <Envelope className="w-4 m-1" />
            {props.email}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <SecondaryButton
            onClick={onSaveClickHandler}
            disabled={saved}
            className="w-32"
          >
            <div className="flex flex-inline">
              {saved ? (
                <>
                  <CheckCircleFill size={BUTTON_ICON_SIZE} className="m-1" />
                  Saved
                </>
              ) : (
                <>
                  <FloppyFill size={BUTTON_ICON_SIZE} className="m-1" />
                  Save
                </>
              )}
            </div>
          </SecondaryButton>
          <SecondaryButton onClick={() => setModalVisible(true)}>
            <div className="flex flex-inline">
              <CloudSunFill size={BUTTON_ICON_SIZE} className="m-1" />
              Weather
            </div>
          </SecondaryButton>
        </div>
      </div>
      <WeatherModal open={modalVisible} setOpen={setModalVisible} {...props} />
    </>
  );
}
