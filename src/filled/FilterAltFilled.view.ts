import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterAltFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z\"/>")
      .name("FilterAltFilled")
  }
}

export default FilterAltFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
