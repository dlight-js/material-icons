import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IsoTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 19V5L5 19h14zm-2-3.5V17h-5v-1.5h5z\" opacity=\".3\"/><path d=\"M12 15.5h5V17h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14z\"/>")
      .name("IsoTwoTone")
  }
}

export default IsoTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
