import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GppMaybeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25-6 2.25zM13 16h-2v-2h2v2zm0-4h-2V7h2v5z\" opacity=\".3\"/><path d=\"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7zM11 16h2v-2h-2v2zm0-4h2V7h-2v5z\"/>")
      .name("GppMaybeTwoTone")
  }
}

export default GppMaybeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
