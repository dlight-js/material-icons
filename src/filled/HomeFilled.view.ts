import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HomeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/>")
      .name("HomeFilled")
  }
}

export default HomeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
