import { Person } from "@/lib/intefaces";
import Image from "next/image";
import {
  Envelope,
  GenderFemale,
  GenderMale,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";

export default function PersonCard(props: Person) {
  const genderIconSize = 26,
    photoSize = 80;

  return (
    <div className="bg-white drop-shadow rounded w-96 p-4 m-2">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <Image
            className="m-2 rounded-full"
            src={props.photoUrl}
            width={photoSize}
            height={photoSize}
            alt={""}
          />
        </div>
        <div className="flex flex-col justify-center text-lg font-medium">{props.name}</div>
        <div className="flex flex-inline justify-end">
          {props.gender === "male" ? (
            <GenderMale size={genderIconSize} />
          ) : (
            <GenderFemale size={genderIconSize} />
          )}
        </div>
      </div>
      <div className="flex flex-inline">
        <GlobeEuropeAfrica className="w-4 m-1" />
        {props.location}
      </div>
      <div className="flex flex-inline">
        <Envelope className="w-4 m-1" />
        {props.email}
      </div>
    </div>
  );
}
