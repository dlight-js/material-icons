import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExposureSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16h2z\"/>")
      .name("ExposureSharp")
  }
}

export default ExposureSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
