import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CropFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z\"/>")
      .name("CropFilled")
  }
}

export default CropFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
