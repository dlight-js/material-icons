import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StorageFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z\"/>")
      .name("StorageFilled")
  }
}

export default StorageFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
