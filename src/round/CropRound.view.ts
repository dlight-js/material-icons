import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 15h2V7c0-1.1-.9-2-2-2H9v2h7c.55 0 1 .45 1 1v7zm-9 2c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v3H2c-.55 0-1 .45-1 1s.45 1 1 1h3v10c0 1.1.9 2 2 2h10v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1H8z\"/>")
      .name("CropRound")
  }
}

export default CropRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
