import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon4gPlusMobiledataSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 11v2h2v2h-4V9h6V7H9v10h8v-6h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z\"/>")
      .name("Icon4gPlusMobiledataSharp")
  }
}

export default Icon4gPlusMobiledataSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
