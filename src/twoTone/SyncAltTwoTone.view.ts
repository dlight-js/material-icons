import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SyncAltTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z\"/>")
      .name("SyncAltTwoTone")
  }
}

export default SyncAltTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
