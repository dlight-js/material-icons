import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TripOriginRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z\"/>")
      .name("TripOriginRound")
  }
}

export default TripOriginRound as Pretty as Typed<DLightIconType, HTMLSpanElement>