import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NightlightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z\"/>")
      .name("NightlightSharp")
  }
}

export default NightlightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
