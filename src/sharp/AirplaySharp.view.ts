import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirplaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z\"/>")
      .name("AirplaySharp")
  }
}

export default AirplaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
