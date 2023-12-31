import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoCellSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78 1.41-1.42zM7 18V9.83L15.17 18H7zM8.83 6 5 2.17V1h14v15.17l-2-2V6H8.83z\"/>")
      .name("NoCellSharp")
  }
}

export default NoCellSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
