import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop75Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 5H3v14h18V5zm-2 12H5V7h14v10z\"/>")
      .name("Crop75Sharp")
  }
}

export default Crop75Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
