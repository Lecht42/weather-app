import { Person } from "@/lib/intefaces";
import { Envelope, GenderMale, GlobeEuropeAfrica, PersonCircle } from "react-bootstrap-icons";

export default function PersonCard(props : Person) {
  return (
    <div className="grid grid-cols-2 bg-white rounded w-96 m-2 text-basic">
      <div className="flex flex-inline">
        <PersonCircle className="w-3 m-1" />
        Name Surname
      </div>
      <div className="flex justify-content-center flex-inline">
        <GenderMale className="w-3 m-1" />
        Gender
      </div>
      <div className="flex flex-inline">
        <Envelope className="w-3 m-1" />
        Email
      </div>
      <div className="flex flex-inline">
        <GlobeEuropeAfrica className="w-3 m-1" />
        Location
      </div>
    </div>
  );
}
