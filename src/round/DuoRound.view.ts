import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DuoRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2h-8C6.38 2 2 6.66 2 12.28 2 17.5 6.49 22 11.72 22 17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13-3-2v2H7V9h7v2l3-2v6z\"/>")
      .name("DuoRound")
  }
}

export default DuoRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
