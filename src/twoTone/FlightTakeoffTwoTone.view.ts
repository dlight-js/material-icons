import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlightTakeoffTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"/>")
      .name("FlightTakeoffTwoTone")
  }
}

export default FlightTakeoffTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
