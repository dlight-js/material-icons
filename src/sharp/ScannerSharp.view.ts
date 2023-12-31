import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScannerSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4.2 5-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z\"/>")
      .name("ScannerSharp")
  }
}

export default ScannerSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
