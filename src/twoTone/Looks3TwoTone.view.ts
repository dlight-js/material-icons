import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Looks3TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 19h14V5H5v14zm4-4h4v-2h-2v-2h2V9H9V7h4a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 0 1-2 2H9v-2z\" opacity=\".3\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2z\"/>")
      .name("Looks3TwoTone")
  }
}

export default Looks3TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
