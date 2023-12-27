import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SensorDoorSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H4v20h16V2zm-4.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"/>")
      .name("SensorDoorSharp")
  }
}

export default SensorDoorSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
