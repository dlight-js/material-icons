import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MemoryTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 17h10V7H7v10zm2-8h6v6H9V9z\" opacity=\".3\"/><path d=\"M21 11V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10zm-2-8H9v6h6V9zm-2 4h-2v-2h2v2z\"/>")
      .name("MemoryTwoTone")
  }
}

export default MemoryTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
