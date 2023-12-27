import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop169Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 7H3v10h18V7zm-2 8H5V9h14v6z\"/>")
      .name("Crop169Sharp")
  }
}

export default Crop169Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
