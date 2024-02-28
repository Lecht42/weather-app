import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Person } from "@/lib/intefaces";
import Temperature from "./temperature/temperature";
import Image from "next/image";
import Map from "../map/map";
import HourlyTemperatureRange from "./hourly-temperature-range/hourly-temperature-range";
import { XLg } from "react-bootstrap-icons";
import CircularProgressBar from "../progress-bars/circular-progress-bar";
import CommentedValue from "./commented-label/commented label";

export interface WeatherModalProps extends Person {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const WEATHER_ICON_SIZE = 100;

export default function WeatherModal({
  photoUrl,
  coordinates,
  weather,
  setOpen,
  open,
}: WeatherModalProps) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5">
                  <div className="flex flex-row-reverse">
                    <XLg
                      onClick={() => setOpen(false)}
                      className="cursor-pointer mb-4"
                      size={24}
                    />
                  </div>
                  {weather ? (
                    <>
                      <div className="flex items-center border-2 rounded-lg my-4 p-2">
                        <Image
                          width={WEATHER_ICON_SIZE}
                          height={WEATHER_ICON_SIZE}
                          src={weather.weatherIconUrl}
                          alt="Icon of weather"
                        />
                        <Temperature
                          temperature={weather.temp}
                          label="current"
                        />
                        <div className="flex flex-col grow items-center">
                          <Temperature
                            temperature={weather.maxTemp}
                            label="max"
                          />
                          <Temperature
                            temperature={weather.minTemp}
                            label="min"
                          />
                        </div>
                        <div className="hidden sm:block">
                         <CommentedValue value={coordinates.latitude} label="latitude" />
                         <CommentedValue value={coordinates.longitude} label="longitude"/> 
                        </div>
                      </div>
                      <div className="p-7">
                        <HourlyTemperatureRange
                          temperatures={weather.hourlyTemp}
                        />
                      </div>
                      <Map coordinates={coordinates} photoUrl={photoUrl} />
                    </>
                  ) : (
                    <CircularProgressBar />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
