import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AutoAwesomeMosaicTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z\" opacity=\".3\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm6 14H5V5h4v14zM19 3h-6v8h8V5c0-1.1-.9-2-2-2zm0 6h-4V5h4v4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8v8zm2-6h4v4h-4v-4z\"/>")
      .name("AutoAwesomeMosaicTwoTone")
  }
}

export default AutoAwesomeMosaicTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
