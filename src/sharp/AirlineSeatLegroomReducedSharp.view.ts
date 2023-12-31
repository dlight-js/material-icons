import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlineSeatLegroomReducedSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.97 21H14v-3l1-4H6V3h6v6h5c1.1 0 2 .9 2 2l-2 7h2.97v3zM5 15V3H3v14h9v-2H5z\"/>")
      .name("AirlineSeatLegroomReducedSharp")
  }
}

export default AirlineSeatLegroomReducedSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
