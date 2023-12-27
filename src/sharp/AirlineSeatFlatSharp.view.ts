import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlineSeatFlatSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 7v6H9V7h13zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04z\"/>")
      .name("AirlineSeatFlatSharp")
  }
}

export default AirlineSeatFlatSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
