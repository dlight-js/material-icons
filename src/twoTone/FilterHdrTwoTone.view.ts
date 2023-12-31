import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterHdrTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 16h3.04l-1.52-2.03z\" opacity=\".3\"/><path d=\"m9.78 11.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6l-4.22 5.63zM5 16l1.52-2.03L8.04 16H5z\"/>")
      .name("FilterHdrTwoTone")
  }
}

export default FilterHdrTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
