import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlightClassSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4h-6v9h6V4zM9.5 16H18v2H8L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z\"/>")
      .name("FlightClassSharp")
  }
}

export default FlightClassSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
