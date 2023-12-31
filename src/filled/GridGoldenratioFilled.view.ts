import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GridGoldenratioFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2h7zm-9 2h-2v-2h2v2z\"/>")
      .name("GridGoldenratioFilled")
  }
}

export default GridGoldenratioFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
