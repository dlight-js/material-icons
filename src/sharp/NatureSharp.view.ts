import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NatureSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z\"/>")
      .name("NatureSharp")
  }
}

export default NatureSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
