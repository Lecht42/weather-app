import { trySavePerson } from "@/lib/features/actions/saga-actions";
import { useAppDispatch } from "@/lib/hooks";
import { Person } from "@/lib/intefaces";
import Image from "next/image";
import {
  Envelope,
  GenderFemale,
  GenderMale,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";
import SecondaryButton from "../../buttons/secondary-button";

export default function PersonCard(props: Person) {
  const genderIconSize = 26,
    photoSize = 80;
  const dispatch = useAppDispatch();

  const onSaveClickHander = () => dispatch(trySavePerson(props));

  return (
    <div className="bg-white drop-shadow rounded w-auto p-4">
      <div className="flex">
        <Image
          className="m-1 rounded-full"
          src={props.photoUrl}
          width={photoSize}
          height={photoSize}
          alt={""}
        />
        <div className="place-self-center text-lg font-medium m-2">
          {props.name}
        </div>
        <div className="flex grow justify-end m-1">
          {props.gender === "male" ? (
            <GenderMale size={genderIconSize} />
          ) : (
            <GenderFemale size={genderIconSize} />
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-inline">
          <GlobeEuropeAfrica className="w-4 m-1" />
          {props.location}
        </div>
        <div className="flex flex-inline">
          <Envelope className="w-4 m-1" />
          {props.email}
        </div>
      </div>
      <div className="flex flex-inline mt-4">
        <SecondaryButton onClick={onSaveClickHander}>Save</SecondaryButton>
      </div>
    </div>
  );
}
