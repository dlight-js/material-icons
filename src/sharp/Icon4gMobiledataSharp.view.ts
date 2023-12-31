import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon4gMobiledataSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7zm8 4v2h2v2h-5V9h7V7h-9v10h9v-6h-4z\"/>")
      .name("Icon4gMobiledataSharp")
  }
}

export default Icon4gMobiledataSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
