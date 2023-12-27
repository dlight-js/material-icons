import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EdgesensorLowSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 7h2v7H2V7zm18 3h2v7h-2v-7zM6 2v20h12V2H6zm10 15H8V7h8v10z\"/>")
      .name("EdgesensorLowSharp")
  }
}

export default EdgesensorLowSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
