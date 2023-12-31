import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SensorWindowSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4v16H6V4h12M4 2v20h16V2H4zm3 17h10v-6H7v6zm3-9h4v1h3V5H7v6h3v-1z\"/>")
      .name("SensorWindowSharp")
  }
}

export default SensorWindowSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
