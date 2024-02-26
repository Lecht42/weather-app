import {
  tryDeleteSavedPerson,
  trySavePerson,
} from "@/lib/features/actions/saga-actions";
import { useAppDispatch } from "@/lib/hooks";
import { Person } from "@/lib/intefaces";
import Image from "next/image";
import {
  Check,
  CheckCircleFill,
  CheckLg,
  CheckSquare,
  Envelope,
  Floppy,
  FloppyFill,
  GenderFemale,
  GenderMale,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";
import SecondaryButton from "../../buttons/secondary-button";
import { useState } from "react";

const GENDER_ICON_SIZE = 26;
const PHOTO_SIZE = 80;

export interface PersonCardProps extends Person {
  saved?: boolean;
}

export default function PersonCard({
  name,
  photoUrl,
  gender,
  location,
  email,
  saved: initialSaved = false,
}: PersonCardProps) {
  const dispatch = useAppDispatch();
  const [saved, setSaved] = useState(initialSaved);

  const onSaveClickHandler = () => {
    dispatch(trySavePerson({ name, photoUrl, gender, location, email }));
    setSaved(true);
  };

  return (
    <div className="bg-white drop-shadow rounded w-auto p-4">
      <div className="flex">
        <Image
          src={photoUrl}
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          alt={`Photo of ${name}`}
          className="m-1 rounded-full"
        />
        <div className="text-lg font-medium m-2 self-center">{name}</div>
        <div className="flex grow justify-end m-1">
          {gender === "male" ? (
            <GenderMale size={GENDER_ICON_SIZE} />
          ) : (
            <GenderFemale size={GENDER_ICON_SIZE} />
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <GlobeEuropeAfrica className="w-4 m-1" />
          {location}
        </div>
        <div className="flex items-center">
          <Envelope className="w-4 m-1" />
          {email}
        </div>
      </div>
      <div className="mt-4">
        <SecondaryButton
          onClick={onSaveClickHandler}
          disabled={saved}
          className="w-32"
        >
          {saved ? (
            <div className="flex flex-inline">
              <CheckCircleFill className="w-5 m-1" />
              Saved
            </div>
          ) : (
            <div className="flex flex-inline">
              <FloppyFill className="w-5 m-1" />
              Save
            </div>
          )}
        </SecondaryButton>
      </div>
    </div>
  );
}
