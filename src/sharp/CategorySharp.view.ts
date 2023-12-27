import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CategorySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 2-5.5 9h11z\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"4.5\"/><path d=\"M3 13.5h8v8H3z\"/>")
      .name("CategorySharp")
  }
}

export default CategorySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
