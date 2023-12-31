import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowOutwardRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z\"/>")
      .name("ArrowOutwardRound")
  }
}

export default ArrowOutwardRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
