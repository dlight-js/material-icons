import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z\"/>")
      .name("CropSharp")
  }
}

export default CropSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
