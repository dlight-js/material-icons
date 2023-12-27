import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SchoolFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z\"/>")
      .name("SchoolFilled")
  }
}

export default SchoolFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
