import OvenSvg from "../svg/OvenSvg";
import PanSvg from "../svg/PanSvg";
import MicrowavesSvg from "../svg/MicrowavesSvg";

export const svg = {
  oven: OvenSvg,
  pan: PanSvg,
  microwaves: MicrowavesSvg,
};

export const getTrueValuesInObj = (object) =>
  Object.entries(object)
    .filter(([key, value]) => value == true)
    .map(([key, value]) => key);
