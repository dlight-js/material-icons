import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop169Round {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z\"/>")
      .name("Crop169Round")
  }
}

export default Crop169Round as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
