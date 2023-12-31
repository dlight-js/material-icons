import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ForestSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z\"/><path d=\"M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z\"/>")
      .name("ForestSharp")
  }
}

export default ForestSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
