import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SmartButtonSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 17h-3v-2h1V9H4v6h6v2H2V7h20v10zm-7.5 2 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z\"/>")
      .name("SmartButtonSharp")
  }
}

export default SmartButtonSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
