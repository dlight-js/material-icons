import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon4gMobiledataFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z\"/>")
      .name("Icon4gMobiledataFilled")
  }
}

export default Icon4gMobiledataFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
